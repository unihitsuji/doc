function enclose_body(str) {
    let b = attr('basecss',  'href');
    let t = attr('themecss', 'href');
    let ret = '<html lang="ja">\n';
    ret += '  <head><title></title>\n';
    ret += '    <meta charset="UTF-8">\n';
    ret += '    <meta name="viewport"\n';
    ret += '          content="width=device-width, initial-scale=1.0">\n';
    ret += `    <link id="basecss"  rel="stylesheet" href="${b}">\n`;
    ret += `    <link id="themecss" rel="stylesheet" href="${t}">\n`;
    ret += '  </head>\n  <body>';
    ret += str;
    ret += '  </body>\n</html>';
    return ret; }
