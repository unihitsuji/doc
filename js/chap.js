//  chatGPT に英文を和訳させるためのプロンプトを作る
function chap(inp = 'inp', out = 'out') {
    let dst = gebi(out);
    let lines = gebi(inp).value.split('\n');
    let empty = 0;
    let option_code = false;
    let option_dl   = false;
    let option_dt   = false;
    dst.value += '```\n';
    for (let line of lines) {
        if ( line.trim().startsWith('<pre><code>') ) {
            if (option_dt) dst.value += '  </dd>\n';
            option_dt = false;
            if (option_dl) dst.value += '</dl>\n';
            option_dl = false;
            dst.value += `${line}\n`;
            option_code = true;
        } else if ( line.trim().startsWith('</code></pre>') ) {
            dst.value += `${line}\n`;
            option_code = false;
        } else if ( option_code ) {
            dst.value += `${line}\n`;
        } else if ( line.trim() &&
                    (line.startsWith('-') || line.startsWith('/')) ) {
            empty = 0;
            if (! option_dl ) dst.value += '<dl>\n';
            option_dl = true;
            if ( option_dt ) dst.value += '  </dd>\n';
            option_dt = true;
            let str = line.startsWith('/') ? line.substring(1) : line;
            dst.value += `  <dt>${str}</dt>\n`;
            dst.value += '  <dd>\n';
        } else if ( line.trim() ) {
            empty = 0;
            dst.value += `<span class="en">${line}</span>\n`;
            dst.value += '<span class="ja"></span>\n';
        } else if ( option_dt && empty == 1 ) {
            empty += 1
            dst.value += '  </dd>\n';
            option_dt = false;
        } else if ( option_dl && empty == 2 ) {
            dst.value += '</dl>\n';
            option_dl = false;
        } else {
            empty += 1;
            dst.value += '<br><br>\n'; } }
    if ( option_dt ) dst.value += '  </dd>\n';
    if ( option_dl ) dst.value += '</dl>\n';

    dst.value += '```\n'
    dst.value += 'class="en" の英文を和訳し、直下の class="ja" に挿入せよ.\n';
    dst.value += 'class="en" の英文も下記に基づき修正せよ.\n';
    dst.value += '- 英文、訳文ともに二重引用符は " に統一せよ\n';
    dst.value += '- 全角開きカッコは 半角スペース+半角開きカッコに、\n';
    dst.value += '- 全角閉じカッコは 半角閉じカッコ+半角スペースにせよ\n'
    dst.value += '- a, code, var タグ内の言葉は訳さず タグごと使うこと\n'; }
