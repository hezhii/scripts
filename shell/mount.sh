#!/bin/sh

host=$1
password=$2
username=root
sourcePath=public
mountPoint=/Users/poppy/Repositories/newbest

umount $mountPoint
sshfs $username@${host}:$sourcePath $mountPoint

# /usr/bin/expect <<-EOF
# set timeout 30
# spawn sshfs $username@${host}:$sourcePath $mountPoint
# expect "*assword:"
# send "$password\r"
# expect "*]#"