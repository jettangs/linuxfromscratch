# What is Cross Linux From Scratch?

Cross Linux From Scratch (CLFS) is a project that provides you with step-by-step instructions for building your own customized Linux system entirely from source.

# Why would I want a CLFS system?

Many wonder why they should go through the hassle of building a Linux system from scratch when they could just download an existing Linux distribution. However, there are several benefits of building CLFS. Consider the following:

- CLFS teaches people how to build a cross compiler

Building CLFS teaches you how to make a cross-compiler and the necessary tools, to build a basic system on a different architecture. For example you would be able to build a Sparc toolchain on an x86 machine, and utilize that toolchain to build a Linux system from source code.

- CLFS teaches people how to utilize a multilib system

CLFS takes advantage of the target system's capability, by utilizing a multilib capable build system.

- CLFS teaches people how a Linux system works internally

Building CLFS teaches you about all that makes Linux tick, how things work together and depend on each other. And most importantly, how to customize it to your own tastes and needs.

- Building CLFS produces a very compact Linux system

When you install a regular distribution, you often end up installing a lot of programs that you would probably never use. They're just sitting there taking up (precious) disk space.

- CLFS can be built from most Unix Style Operating Systems

You can build CLFS even if you don't have Linux running. Our build instructions have been tested to build from Solaris and the BSDs.

- CLFS is extremely flexible

Building CLFS could be compared to a finished house. CLFS will give you the skeleton of a house, but it's up to you to install plumbing, electrical outlets, kitchen, bath, wallpaper, etc. You have the ability to turn it into whatever type of system you need it to be, customized completely for you.

- CLFS offers you added security

You will compile the entire system from source, thus allowing you to audit everything, if you wish to do so, and apply all the security patches you want or need to apply. You don't have to wait for someone else to provide a new binary package that (hopefully) fixes a security hole. Often, you never truly know whether a security hole is fixed or not unless you do it yourself.

# What can I do with my CLFS system?

A by-the-book CLFS system is fairly minimal, but is designed to provide a strong base on which you can add any packages you want. See the CBLFS and BLFS projects for a selection of commonly used packages.

# Who's who:

| Job | Name |  Arch |
| :----:  | :----:  | :----:  |
| Project Co-Leader | Ryan Oliver | x86, x86_64, sparc, mips, powerpc |
| Project Co-Leader | Jim Gifford | x86, sparc, mips, powerpc |
| Project Co-Leader | Joe Ciccone | x86, x86_64, mips, alpha, sparc, hppa, arm |
| Editor | Ken Moffat | x86, x86_64, powerpc |
| Editor | Matt Darcy | x86, x86_64, sparc |
| Editor | Jeremy Utley | x86, x86_64, sparc, mips, powerpc, 1.x Release Manager |
| Editor | Chris Staub | x86 Proofreader |
| Editor | Manuel Canales Esparcia | XML/XSL Editor |
| Editor | Justin Knierim | x86, sparc, FTP & Website Maintainer |
| Editor | Nathan Coulson | Bootscripts |
| Editor | Jonathan Norman | x86, x86_64 & 1.2 Release Manager |
| Editor | William Harrington | x86, x86_64, ppc64, sparc, mips, powerpc |
| Editor | Andrew Bradford | Embedded |

#Referenced by:

| Name | Authors | Publisher |
| :----:  | :----:  | :----:  |
| Building Embedded Linux Systems | Philippe Gerum, Karim Yaghmour, Jon Masters, Gilad Ben-Yossef | O'Reilly |
