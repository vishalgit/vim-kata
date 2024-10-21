#!/bin/bash -e
'NVIM_APPNAME="kickstart nvim" nvim' -S config.vim -S main.vim -c 'call LoadCurrentKata()'
