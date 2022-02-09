# this file is in the Public Domain

# this creates an epub file

use strict;
use warnings;
use Archive::Zip;

my $zipped = Archive::Zip->new();
# the first item in the zip has to be this
# no newline allowed at the end
# must have no compression
$zipped->addString({
    string => 'application/epub+zip',
    zipName => 'mimetype',
    compressionLevel => Archive::Zip::COMPRESSION_LEVEL_NONE
});
$zipped->addTree($ARGV[0],'',sub { ! m[(/|^)\.]; } ); # skip dot files
unless ( $zipped->writeToFileNamed("$ARGV[0].epub") == Archive::Zip::AZ_OK ) {
    die 'write error';
}
# command line:
# zip -X -q0 media.epub mimetype # ?!?!?! not working !?!?!?!
# zip -qrD media.epub *
# check:
# unzip -v media.epub
