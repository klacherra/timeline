# Lacerra Family Timeline
**DEVELOPMENT GUIDE**

1. [How it works](#how-it-works)
   1. [Vocab](#vocab)
   1. [GitHub](#github)
   1. [File structure](#file-structure)
1. [Edits and formatting](#edits-and-formatting)
   1. [Adding an event](#adding-an-event)

## How it works

### Vocab
The Lacerra Family Timeline website is hosted using a feature of github.com called [GitHub Pages](https://pages.github.com/), which gives users the option of serving a static, HTML-based website from a _code repository_ (or "repo"). A repo is a directory of files, that's all. The files listed above, all the files that make up the website, are all one repo.

The defining characteristic of a code repo in this context is _version control_, essentially a heavily structured version of the "track changes" function of a program like Microsoft Word. The majority of projects on GitHub use the "git" version control system, where it gets its name.

In git, code changes are broken down into _commits_: Think of a "commit" as the equivalent of hitting the "Save" button in MS Word, if every time you saved the document you _also_ had to describe the changes you were saving. The result is a long list of "saves" (commits), with the ability to rewind to previous saves, or see what a particular set of changes actually changed.

In software development, this can be helpful for many reasons, particularly if a group of people is all working on the same set of files. In our case, it's mostly used because GitHub Pages is the most convenient way to push changes to the website's files straight out to the internet.

The _domain name_, "lacherra.com," that points to this website is registered through Amazon Web Services, which also hosts the _DNS records_ for the domain name: DNS records are how a browser determines where to find a web page: If the "domain name" is the name of the site, DNS records indicate the "address." In our case, the domain is configured to [point to GitHub's servers](https://help.github.com/articles/setting-up-an-apex-domain/) that have been set up specifically to work with GitHub Pages. This can be changed at any time if the need arises.

### GitHub
The "timeline" repo is owned by GitHub user "klacherra." In practically all common uses of git, code edits are made "locally," on a developer's workstation, and then pushed to GitHub using a "git client," probably a command-line tool that interacts with the GitHub API. In our case, we can skip all of that and take advantage of GitHub's robust online editor.

To open a file for editing, log into GitHub, then navigate to the file in question (to edit the `data.js` file, for example, just [click on `data.js`](https://github.com/klacherra/timeline/blob/master/data.js)). From here, you should see a panel displaying all the file's code, with a set of three icons in the top-right corner of the panel. Click the pencil icon. This will open the editor; make whatever changes you want, then scroll to the bottom to _commit the changes_.

"Committing," in git, is equivalent to "saving" the file. In a traditional setup, where you would have a copy of the code on a computer somewhere, you could "save" the file like you would any other without necessarily "committing" it to the main repository; this distinction isn't relevant for our setup. There are two available fields: The smaller box is for the _commit message_, and the larger one immediately below it is for an "extended description"; you can safely ignore the description field entirely if you want to.

The commit message, however, could prove to be important: If you make a mistake and need to "rewind," descriptive commit messages (not, as some people frequently do, `"asdfasdf changes asdf"`) may help figure out where things went wrong. Try to keep the message under 50 characters, otherwise the whole message won't be displayed.

Once you have a message finished, click the green "Commit changes" button, and within moments your changes should be live online. (The option to "Commit directly to the `master` branch" is the one you want. "Branches" are basically parallel versions of the code used to propose changes without making them permanent before they've been reviewed.) If you make changes but want to get rid of them instead of saving, closing the window won't cause any damage—changes aren't recorded until they are committed.

A corollary to the "descriptive commit message" recommendation is to make commits relatively small; if there are unrelated changes to be made, consider breaking them up into separate commits. For example, if you're adding a dozen events in the timeline, and also re-tagging a bunch of old events with new people, you might make separate commits for those things, to make commit messages more clear and to make it easier to pull out a particular change later without needing to reverse a bunch of unrelated things that coincidentally were done at the same time. (In real life, this will probably never, ever happen, so do whatever you want with the commits. It's just worth keeping in mind.)

### File structure
The composition of the website is fairly straightforward, and should change very little unless there are substantial modifications to the look or functionality of the site.

* **index.html:** The first file loaded by the browser when someone goes to lacherra.com. It defines where to find all the other relevant files (where the Javascript is stored, where to get the style files, etc.) and provides the "skeleton" of the site. If you look at the file itself, you'll see there isn't any actual timeline data in it, only the articulation of where different sections are supposed to be in relation to each other.
* **custom.css:** "CSS" stands for "cascading stylesheets," and for this project it's basically where we define the site-specific details of how different elements of the page should look. This file is where we set that the size of the text inside the filter buttons is supposed to be slightly smaller, for example, and that the "emphasis" items should have a red date. (Note: Almost all of the style information for the site isn't stored within the repository at all: If you look in `index.html`, you'll see that it pulls in a CSS file called `bootstrap.min.css`; this is a widely used, pre-fabricated set of styles that is used mosty for helping with layout of the page.)
* **data.js:** This is the file you will be changing most often. This is where the events in the timeline are defined, and where the other properties of the display can be overridden. To change the main headline of the page, for example, you would change it here (with the `pageTitle` variable), not in `index.html`.
* **builder.js:** This file, plus `data.js`, is loaded by `index.html` and is executed when the user's browser renders the page. While `data.js` defines all the timeline events, `builder.js` tells the browser how to arrange them: This file sorts all the events by year, determines the proper HTML formatting for each one, and tells the browser to display it.
* **README.md:** The file you're reading right now.
* **CNAME:** This file is particular to GitHub pages. Normally, sites using GitHub pages use a URL like `klacherra.github.io`, which is assigned automatically. This file tells GitHub we're going to be using a custom domain.
* **images:** This is a directory; it's where images are stored.

## Edits and formatting

### Adding an event
Adding an event means adding it to `data.js`. In that file, you'll see a variable called `entries` being defined—this is the one we're going to be changing. `entries` is an _array_, or list, of event _objects_; we just need to add another event to the list. The formatting for each event is predictable and consistent: Each event is enclosed in curly braces (`{` and `}`), and **each event is followed by a comma**. If you forget a comma, or accidently delete one, the page will not load properly. This is weirdly important in Javascript. (As you can see, the only exception to the comma crisis is the final entry in the array.)

The page-building scripts expect a typical event to have (at least) three _fields_:

* `sort_date`: The builder will sort all events by year. This means you can put new events anywhere you want in the file and it will still appear in chronological order, but it also means this field is particularly important when there are multiple events happening in the same year. To keep the events from appearing in an unanticipated order, just make sure their `sort_date` properties are different: For example, rather than making three events, each with a `sort_date` value of `2011`, you might make the first one `2011`, the second `2011.5`, and the third `2011.8`. It doesn't matter what numbers you use, only that they are numbers.
* `display_date`: How you actually want the date printed on the page. If you want an event to show up at "1856" in the chronology, for example, but you want the date to be printed as "1856 or 1860, February 12," you would set `display_date` to `1856 or 1860, February 12`.
* `event`: The description of the event. This will be printed exactly as specified.

Here's an example of what that event would look like:

```javascript
{
    sort_date: 1856,
    display_date: `1856 or 1860, February 12`,
    event: `Felice "Grandpa" Lacerra born in Italy`
},
```

There are several syntax notes to emphasize here: First, **all properties are followed by a comma**, with the exception of the last one in the event. As with the other commas, if you forget one of these, the page explodes. This was not my idea. In addition, `sort_date` is a number, so it **does not have any quotation marks around it**. The other fields, `display_date` and `event`, are _strings_, so **they do require quotation marks.** You can use conventional quote marks here (`"` or `'`), but it's recommended you use backticks as in the example above. This avoids the confusion that can pop up when you use regular quote marks to define the string, but then need to use quotation marks _inside_ the string as well.

Your new event can go anywhere in the `events` list, though it will probably be easier to manage if you try to keep them in approximately chronological order. Again, be sure your event has a comma after it, as well as the event _before_ your new one.