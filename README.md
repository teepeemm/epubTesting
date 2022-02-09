# epubTesting

## tl;dr: Good enough epub readers

<dl>
<dt>iOS</dt>
<dd>Books, Google Play Books, Kobo Books, PocketBook</dd>
<dt>Mac OS X</dt>
<dd>best: Calibre</dd>
<dd>Books, EPUB Viewer Pro, Yomu</dd>
</dl>

---------------------------

The overall goal is to use https://github.com/brucemiller/LaTeXML to convet https://github.com/teepeemm/APEXCalculusLT_Source to an epub.  Some epub readers are less useful than others for reading the resulting file.  The goal of this repository is to track what epub readers don't work and why, and to determine what shortcomings I can work around.  For our purposes, "Good enough" and "OK" means the extent to which we're able to work around any problems.

Compile the epub using `perl minimalEpub.pl epubSupport`, and view the resulting `epubSupport.epub` with various operating systems and apps.  We collect the results here.

In order to be good enough, the epub reader needs to use stylesheets, make a stab at rendering MathML, not have grevious mistakes, and not require a login.

## iOS

epub reader | CSS (x/13) | JS (x/15) | MathML (x/5)
---|---|---|---
Books | 11 | 15 | (1,2)
Epub Reader (Junjie Ruan) | 0 | 0 | 0
EPUB Reader (LTD DevelSoftware) | 0 | 15 | 0
Google Play Books | 13 | 2 | (1,2) 
Kobo Books | 11 | 15 | (1,2)
PocketBook | 13 | 15 | (1,2) 

Notes:
* Books, Kobo Books: assumes light mode

Failing eReaders: GoodReads, Kindle, Marvin 3 (Appstafarian), Nook

## Mac OS X

epub reader | CSS (x/8) | JS (x/15) | MathML (x/5)
---|---|---|---
Books | 13 | 15 | (1,2)
Calibre | 10 | 15 | 5
EPUB Viewer Pro | 13 | 15 | (1,2)
Yomu | 13 | 15 | (1,2)

Notes:
* Calibre: doesn't detect light/dark mode

Failing eReaders: Epub Files Viewer

## MathML Errors

1. Doesn't resize fences
2. `\!` becomes `<mpadded width="-1.7pt">` which swallows the encased element
