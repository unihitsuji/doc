//  code タグ内のテキストの前後をトリミングする
//  code タグに onclick が指定されてるなら class に .has-onclick を追加する
function trim_code() {
    //  getElementsByTagName は HTMLCollection を返す。配列ではない
    document.querySelectorAll('code').forEach( (x) => {
        x.textContent = x.textContent.trim();
        if (x.getAttribute('onclick')) x.classList.add('has-onclick'); } ); }

