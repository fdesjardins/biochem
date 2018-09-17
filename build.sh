#!/usr/bin/env bash

for f in conspectus/*.md; do
  fullfilename=$(basename $f)
  filename=${fullfilename%.*}
  echo "building $f"
  pandoc --mathjax "$f" -o "build/conspectus-$filename".pdf
done

for f in group-work/*.md; do
  fullfilename=$(basename $f)
  filename=${fullfilename%.*}
  echo "building $f"
  pandoc --mathjax "$f" -o "build/group-work-$filename".pdf
done
