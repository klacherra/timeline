# Lacerra Family Timeline
**DEVELOPMENT GUIDE**

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
