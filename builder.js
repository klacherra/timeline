function buildContent(filter) {
    pageTitle = originalPageTitle // set it back to its original value, in case anything was filtered
    if(filter) pageTitle += ": " + filter;

    var content = "<ul>";
    for(var i=0, entry; entry=entries[i]; i++){
        var toPrint = true;
        if(filter) {
            toPrint = false;
            if(entry.people) {
                for(var j=0, person; person=entry.people[j]; j++) {
                    if(person == filter) {
                        toPrint = true;
                        break;
                    }
                }
            }
        }
        if(toPrint) {
            content += "<li"
            if(entry.emphasis) {
                content += ` class="emphasize"`
            }
            content += `><strong>` + entry.display_date + `:</strong> ` + entry.event;
    
            if(entry.image) {
                content += `<br><center><a href="images/` + entry.image.filename + `" target="_blank"><img class="img-fluid rounded" width="` + (entry.image.width || 100) + `%" src="images/` + entry.image.filename + `"></a></center>`
            }
        }
    }
    content += "</ul>"
    document.getElementById("content").innerHTML = content;
    document.getElementById("title").innerHTML = pageTitle;
}

function buildTags() {
    // build a duplicate-free list of all the people:
    var people = [];
    for(var i=0, entry; entry=entries[i]; i++){
        if(entry.people) {
            for(var j=0, person; person=entry.people[j]; j++) {
                people.push(person);
            }
        }
    }
    var people = _.uniq(people);

    // print out the list in the "tags" column
    var tags = `<button type="button" class="btn btn-light filterbtn" onclick="buildContent()">Clear all filters</button><br>`;
    for(var i=0, person; person=people[i]; i++) {
        tags += `<button type="button" class="btn btn-light filterbtn" onclick="buildContent('` + person + `');">` + person + `</button><br>`;
    }
    document.getElementById("tags").innerHTML = tags;
}

function buildPage() {
    buildContent()
    buildTags()
}

originalPageTitle = pageTitle // in case we change it to something else temporarily 
buildPage()
