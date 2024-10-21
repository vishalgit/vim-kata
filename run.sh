#!/bin/bash -e
export NVIM_APPNAME=kickstart
nvim -S config.vim -S main.vim -c 'call LoadCurrentKata()'
