function buildPage() {
    var content = "<ul>";
    for(var i=0, entry; entry=entries[i]; i++){
        content += "<li"
        if(entry.emphasis) {
            content += ` class="emphasize"`
        }
        content += `><strong>` + entry.display_date + `:</strong> ` + entry.event;
    }
    content += "</ul>"
    document.getElementById("content").innerHTML = content;
    document.getElementById("title").innerHTML = pageTitle;
}


buildPage()