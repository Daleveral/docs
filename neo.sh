#!/bin/bash

title="$1"
if [ -z "$title" ]; then
    echo "Please provide a title for the post."
    exit 1
fi

date=$(date +%Y-%m-%d)
filename="posts/${title// /-}.md"

cat << EOF > "$filename"
---
title: 
tags: []
categories: []
date: $date
description: 
---
EOF

echo "New post created at $filename"
