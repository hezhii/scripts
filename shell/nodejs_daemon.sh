#!/bin/sh

# TODO set process name
PRO_NAME="./bin/www"
SHELL_OUT="shellout.txt"

export NODE_ENV=production

while true; do
    server=`ps aux | grep $PRO_NAME | grep -v grep | wc -l`
    if [ "$server" -lt "1" ]; then
        # TODO set command
        nohup npm start &
        timeNow=`date "+%Y-%m-%d %H:%M:%S"`
        echo "$timeNow:Stopped unexpected,restarting!\r\n" >> $SHELL_OUT
        sleep 10
    fi
    sleep 5
done