function buildPage() {
    var content = "<ul>";
    for(var i=0, entry; entry=entries[i]; i++){
        content += "<li"
        if(entry.emphasis) {
            content += ` class="emphasize"`
        }
        content += `><strong>` + entry.display_date + `:</strong> ` + entry.event;

        if(entry.image) {
            content += `<br><center><img class="img-fluid" width="` + (entry.image.width || 100) + `%" src="images/` + entry.image.filename + `"></center>`
        }
    }
    content += "</ul>"
    document.getElementById("content").innerHTML = content;
    document.getElementById("title").innerHTML = pageTitle;
}


buildPage()