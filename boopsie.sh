#/bin/#!/usr/bin/env bash

while IFS=$'\t' read -r -a VALUES ; do
  mkdir -p /opt/boopsie/text/$VALUES[2]/$VALUES[3]
  echo ${VALUES[0]}
  FILE=`sed 's/ /_/' < $VALUES[0]`
  /opt/boopsie/text/$VALUES[2]/$VALUES[3]/$FILE.txt < $VALUES[4]
done <<< boopsie_test.tsv

tar -cv /opt/boopsie | gzip > archive.tar.gz
