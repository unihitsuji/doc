function turn_spec(id_or_obj, val = 'table') {
    let target;
    if (typeof(id_or_obj) == "string") {
        target = document.querySelector(id_or_obj);}
    else {
        target = id_or_obj; }
    if (target.style.display == "") {
        target.style.display = val; }
    else if (target.style.display == "none") {
        target.style.display = val; }
    else {
        target.style.display = "none"; } }
