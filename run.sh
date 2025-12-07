#!/bin/bash -e
NVIM_APPNAME="astro" nvim -S config.vim -S main.vim -c 'call LoadCurrentKata()'
