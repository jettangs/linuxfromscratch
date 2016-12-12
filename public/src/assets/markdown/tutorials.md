# Download the Linux From Scratch Book

Several versions of the LFS book are available for download, in several formats:

# Current Stable

This is the latest released LFS book, well tested and mature enough for everyday use.

You may download the stable book in various formats from the [stable book](http://www.linuxfromscratch.org/lfs/downloads/stable/) directory.

# Current Development

This is the LFS Book in its current development state. Changes can happen that break the build temporarily.
Not recommended for inexperienced LFS'ers.

Daily rendered [snapshots](http://www.linuxfromscratch.org/lfs/downloads/development/) may be downloaded. Or check out the book's XML source from our Subversion repository and render it yourself:

`svn co svn://svn.linuxfromscratch.org/LFS/trunk/BOOK/`

Other versions of the source may be similarly downloaded by changing the URL above. For example, use svn://svn.linuxfromscratch.org/LFS/tags/7.0/ for 7.0 version of the book's XML source.

# Systemd version of LFS

# Current Stable

This is the latest released LFS systemd book, well tested and mature enough for everyday use.

You may download the stable book in various formats from the stable book directory.

# Current Development

This is the LFS systemd Book in its current development state. Changes can happen that break the build temporarily.
Not recommended for inexperienced LFS'ers.

Daily rendered snapshots may be downloaded. Or check out the book's XML source from our Subversion repository and render it yourself:

`svn co svn://svn.linuxfromscratch.org/LFS/trunk/BOOK`

After the prerequisites listed in the INSTALL file are present, use 'make REV=systemd', to render the book. Additional information is listed in the README file.

# LFS Museum

Old and crusty. But still useful as an educational experience, or to see how LFS has grown	over the years. http://archive.linuxfromscratch.org/lfs-museum/

# Packages for LFS

LFS has a list of packages and patches which you should download. Please use the versions which are listed in the book (see the [FAQ](http://www.linuxfromscratch.org/faq/#why-not-version)); these are tested versions which are known to work with each other. There are several ways to download the packages.

### Hunt and Peck

When a package is not available from the location listed in the book, some other places to try are:

A search for the full package name in google or your favorite search engine
[Debian Package Search Page](http://www.debian.org/distrib/packages)
[filemirrors.com](http://www.filemirrors.com/)
Sources from your linux distro

### LFS HTTP/FTP Sites

If the above methods are not available to you, the packages are also available in a tarball and individually on the following ftp and http mirrors. HLFS package tarballs and individual packages are also available on these mirrors.

- ftp://ftp.lfs-matrix.net/pub/lfs/ (Los Angeles, CA, USA, 200Mbps)
- http://ftp.lfs-matrix.net/pub/lfs/ (Los Angeles, CA, USA, 200Mbps)
- ftp://ftp.osuosl.org/pub/lfs/ (Corvallis, OR, USA, 100Mbps)
- http://ftp.osuosl.org/pub/lfs/ (Corvallis, OR, USA, 100Mbps)
- http://mirror.jaleco.com/lfs/pub/ (Washington, DC, USA, 1 Gbps)
- http://mirrors-usa.go-parts.com/lfs (Michigan, USA, 1Gbps)

Also available as ftp or rsync: ftp://mirrors-usa.go-parts.com/lfs and rsync://mirrors-usa.go-parts.com/lfs