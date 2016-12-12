# What is Automated Linux From Scratch?

Automated Linux From Scratch (ALFS) is a project that creates the generic framework for an extendable system builder and package installer.

# Why would I want to use ALFS?

After having gone through the LFS and BLFS books more than 2 or 3 times, you will quickly appreciate the ability to automate the task of compiling the software you want for your systems.

# What can I do with ALFS?

The goal of ALFS is to automate the process of creating an LFS system. It seeks to follow the book as closely as possible by directly extracting instructions from the XML sources. This is the reason why it may also be used as a test of the current book instructions.

# How is ALFS implemented?

The official implementation of ALFS is called jhalfs. Originally created by Jeremy Huntwork, but since developed and maintained by Manuel Canales Esparcia, George Boudreau, and Thomas Pegg, jhalfs has become a light-weight, practical method of automating an LFS build. jhalfs is a Bash shell script that makes use of Subversion and xsltproc to first download the XML sources of the Linux From Scratch book and then extract any necessary commands, placing them into executable shell scripts. If you do not already have the necessary source packages in place on your system, jhalfs can fetch them. Finally, jhalfs generates a Makefile which will control the execution of the shell scripts, allowing for recovery if the build should encounter an error. A way to use package management has been added by Pierre Labastie.

The most current jhalfs stable release can been downloaded from [here](http://www.linuxfromscratch.org/alfs/downloads/jhalfs/stable/).

jhalfs is maintained as a subversion repository. To fetch the latest development version, you can use this command:

svn co svn://svn.linuxfromscratch.org/ALFS/jhalfs/trunk jhalfs
To know what book versions are supported by each jhalfs version, please see [here](http://wiki.linuxfromscratch.org/alfs/wiki/SupportedBooks).

An extension of ALFS aimed at automating the building of packages in the BLFS book is now included in jhalfs.

# History

Before jhalfs, an implementation named nALFS was developed. A more ambitious project, named simply alfs was designed around 2004, but was never pushed to completion.

- nALFS

The first ALFS implementation was nALFS by Neven Has. nALFS was a small program written in C. It first parsed an XML profile that contained information concerning the LFS build process into a series of internal commands. It could then execute these at your discretion, thus automating the compilation of LFS.

- alfs

There were many in-depth features that had been requested for ALFS implementations. Because of this, development had been slated for an entirely new build tool which would have been called alfs. To see a list of features that would have appeared in alfs, please read our Software Requirements Specification. Eventually, the ease of use of jhalfs ultimately pushed development of alfs to the bottom of the stack.

# Who's who:

- Project Leader: Thomas Pegg
- Developer(jhalfs): George Boudreau
- Developer(jhalfs): Manuel Canales Esparcia
- Developer(jhalfs, ablfs): Pierre Labastie