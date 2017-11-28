function buildPage() {
    var content = "<ul>";
    for(var i=0, entry; entry=entries[i]; i++){
        content += "<li>" + entry.display_date + ": " + entry.event;
    }
    content += "</ul>"
    document.getElementById("content").innerHTML = content;
}


buildPage()