S3 as a Single Webpage Application engine
===

This site is a demo of how S3 Website functionality can be used to create a multi-page "Single Webpage Application". 

Every page on this site is generated from a single HTML document (it's at [http://composedit.net/docstore.html](http://composedit.net/docstore.html)) which uses Haldean's [docstore](https://github.com/haldean/docstore) javascript MarkDown processor. 

Traditionally, single webpage applications like this have to use horrible hacks to handle many urls. Using query-strings, or anchor links (aka hash urls) are common methods. But with S3 Website, we can use the ErrorDocument functionality as a routing engine. 

By configuring the error document to be /docstore.html, it's loaded by S3 for any missing page. A [slightly modified copy of docstore](https://github.com/colmmacc/docstore) then uses document.location.path to figure out what the url was, and tries to find a corresponding markdown file in /text/[path].md. /text/default.md is used for the root page (this page that you are reading). 

Give it a try:

+ [Dickens](http://composedit.net/dickens)
+ [Austen](http://composedit.net/austen)
+ [Conan-Doyle](http://composedit.net/conan-doyle)
+ [Twain](http://composedit.net/twain)

Each of those pages was produced just by uploaded a Markdown file, and new pages can be added just as easily. No need to run any kind processor like Jekyll or Octopress, and no exploitable server side code to maintain either!

At present the only downside is that S3 preserves the error code, and so the status returned is 403. It'd be nice if there was a way to make this 200.

Colm MacCárthaigh
