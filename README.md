# epubTesting

## tl;dr: Good enough epub readers

<dl>
<dt>iOS</dt>
<dd>Books, Digital Editions (Adobe), Google Play Books, Kobo Books, PocketBook</dd>
<dt>Android</dt>
<dd>Google Play Books</dd>
<dt>Mac OS X</dt>
<dd>best: Calibre</dd>
<dd>Books, EPUB Viewer Pro, Yomu</dd>
<dt>Windows</dt>
<dd>best: Calibre</dd>
<dd>Freda</dd>
</dl>

These readers display the epub decently well and render MathML.  The "best" ones also resize fences (parentheses, brackets, etc) for large arguments.

---------------------------

The overall goal is to use https://github.com/brucemiller/LaTeXML to convet https://github.com/teepeemm/APEXCalculusLT_Source to an epub.  Some epub readers are less useful than others for reading the resulting file.  The goal of this repository is to track what epub readers don't work and why, and to determine what shortcomings I can work around.  For our purposes, "Good enough" and "OK" means the extent to which we're able to work around any problems.

Compile the epub using `perl minimalEpub.pl epubSupport`, and view the resulting `epubSupport.epub` with various operating systems and apps.  We collect the results here.

In order to be good enough, the epub reader needs to use stylesheets, make a stab at rendering MathML, not have grevious mistakes, and not require a login.

## iOS

epub reader | CSS (x/13) | JS (x/36) | MathML (x/5)
---|---|---|---
Books | 11 | 36 | 2
Calibre Companion | 10 | 2 | 0
Digital Editions (Adobe) | 13 | 3 | 2
Epub Reader (Junjie Ruan) | 0 | 0 | 0
EPUB Reader (LTD DevelSoftware) | 0 | 36 | 0
Google Play Books | 13 | 3 | 2
Kobo Books | 11 | 36 | 2
PocketBook | 13 | 36 | 2

Notes:
* Books, Kobo Books: assumes light mode

Untryable eReaders: GoodReads, Kindle, Marvin 3 (Appstafarian), Nook

## Android

epub reader | CSS (x/13) | JS (x/36) | MathML (x/5)
---|---|---|---
Cool Reader | 3 | 0 | 0
eBoox | 1 | 0 | 0
EPUB Reader (Librera) | 0 | 0 | 0
eReader Prestigio | 0 | 0 | 0
FBReader | 0 | 0 | 0
FullReader | 0 | 0 | 0
Google Play Books | 13 | 2 | 4
Lithium | 13 | 36 | 0
Moon+ Reader | 1 | 0 | 0
PocketBook | 13 | 0 | 0
ReadEra | 1 | 0 | 0

Are these lousy results related to testing on Android 6.0.1?

## Mac OS X

epub reader | CSS (x/13) | JS (x/36) | MathML (x/5)
---|---|---|---
Books | 13 | 36 | 2
Calibre | 10 | 36 | 5
EPUB Viewer Pro | 13 | 36 | 2
Yomu | 13 | 36 | 2

Notes:
* Calibre: doesn't detect light/dark mode

Untryable eReaders: Epub Files Viewer, MarginNote 3

## Windows

epub reader | CSS (x/13) | JS (x/36) | MathML (x/5)
---|---|---|---
Bookviser Preview | 0 | 0 | 0
Calibre | 10 | 36 | 5
Freda | 10 | 3 | 2
EPUB File Reader | 10 | 3 | 0
Icecream EPUB Reader | 10 | 3 | 0
Overdrive | 10 | 2 | 0
Reader for PC (Sony) | 11 | 3 | 0
Sumatra PDF | 0 | 1 | 0

Notes:
* Freda: white on black background except MathML is reversed; fence sizing ok, simplest `<mpadded>` still has error.

## MathML Errors

The most common MathML errors are not resizing the fences (contributes 1 error) and allowing `<mpadded width="-1.7pt">` (which comes from `\!`) to swallow its contents (contributes 2 errors).  If a viewer has no comment on why it scored 2, 3, or 4 points for MathML, it's because of some combination of those two errors.
