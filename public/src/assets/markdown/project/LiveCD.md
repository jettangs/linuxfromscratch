**Note: The LiveCD is no longer being maintained. However, it still works well for many purposes, such as a rescue disk. The packages and the rendered LFS book on the CD are quite out of date.**

# What is the LFS LiveCD?

A LiveCD is a CD that is able to boot your system into a 'live', working operating system, independent of anything on your hard drive. It's a little different than an installation CD, which boots your system into a program that will guide you through the installation of some system onto your hard drive. With a LiveCD, you have an entire system contained on the CD and with that, the freedom to do nearly anything that a system installed on your hard drive can.

The LFS LiveCD is geared specifically toward providing a reliable host system for the purpose of building Linux From Scratch. Therefore, it may not be what you would envision as a "perfect" Linux system. It should, however, provide you with a comfortable enough environment so that you can, in turn, build your own "perfect" system.

For a more detailed description of the current version of the LiveCD read the documentation.

# Why would I want to use the LFS LiveCD?

It provides a known good host for building LFS
At times, Linux distros are built in such a way that make it difficult to successfully build LFS using that distro as a host. Their releases may even contain bugs that are really only exposed with heavy compiling, as is done when building LFS. The LiveCD has been tested thoroughly and is known to successfully build the current version of LFS without deviation.

Removes the LFS prerequisite of having a Linux distro installed on your system
To build LFS, you need to have a host Linux system with development tools. In this case, the LiveCD is the host system. This allows you to build LFS onto a completely blank machine, if you so desire.

Doubles as a rescue CD
Having a LiveCD close at hand can be a life saver if your system breaks or suddenly refuses to boot. You can boot the CD, fix the error on your local system, reboot, and voila!

Includes all sources and the LFS Book
This spares you from having to download all the packages individually, which can be quite time consuming. It also removes the need for a working internet connection.

# Who's who:

- Project Leader/Maintainer: Jeremy Huntwork
- Maintainer/i18n: Alexander Patrakov
- Maintainer: Thomas Pegg