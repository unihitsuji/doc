function _css(...strs) {
    let ret = 'could not access';
    for (let i in strs) { ret += ` ${strs[i]}`; }
    return ret; }

//  セレクタにタグ名を記述するときは小文字にすること
function css(selector_text) {
    let styles = {};
    for (let sheet of document.styleSheets) {
        let href = sheet.href ? sheet.href : 'inline';
        try {
            for (let rule of sheet.cssRules) {
                if (selector_text == rule.selectorText) {
                    for (let style of rule.style) {
                        try {
                            styles[style] = [rule.style[style], href];
                        } catch (er) {
                            let msg = _css(`\n  stylesheet: ${href}`,
                                           `\n  style: ${style}`,
                                           `\n  error: `);
                            console.warn(msg, er) } } } }
        } catch (er) {
            let msg = _css(`\n  stylesheet: ${href}`, `\n  error: `);
            console.warn(msg, er); } }
    return styles; }
