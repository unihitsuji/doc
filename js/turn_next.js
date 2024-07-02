function turn_next(id_or_obj, val = 'block', empty = val) {
    let target;
    if (typeof(id_or_obj) == "string") {
        target = document.getElementById(id_or_obj).nextElementSibling; }
    else {
        target = id_or_obj.nextElementSibling; }
    if (target.style.display == "") {
        target.style.display = empty; }
    else if (target.style.display == "none") {
        target.style.display = val; }
    else {
        target.style.display = "none"; } }
