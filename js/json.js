//  url にアクセスして結果を受け取る
//  url が異なるオリジンのときは、url 側が
//  CORS (Cross-Origin Resourse Sharing) していなければならない
async function json(url, proc, ...inputs) {
    try {
        const res = await fetch( url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' } } );
        if (!res.ok) { throw new Error('ネットワーク異常'); }
        let data;
        try {
            data = await res.json();
        } catch (er) {
            data = res; // JSON 化失敗だが proc に渡すため
            console.error('info: json.js json due to bad json: ', er); }
        proc(data);
        console.log('done: json.js json', data);
    } catch (er) {
        console.error('done: json.js json due to fail: ', er); } }

/*
Python + Flisk での例

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # CORSを有効化

@app.route('/api', methods=['GET', 'POST'])
def api():
    # CGI処理を実行
    data = {"message": "Hello from server!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
*/
