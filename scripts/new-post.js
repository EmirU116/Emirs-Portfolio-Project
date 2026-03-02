#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run new-post -- "Your Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const date = new Date().toISOString().split('T')[0];

const postsDir = path.join(__dirname, '..', 'posts');
if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir);

const filepath = path.join(postsDir, `${slug}.md`);
if (fs.existsSync(filepath)) {
  console.error(`File already exists: posts/${slug}.md`);
  process.exit(1);
}

const template = `---
title: "${title}"
date: "${date}"
description: ""
tags: []
---

## Introduction

Write your post here.
`;

fs.writeFileSync(filepath, template);
console.log(`Created: posts/${slug}.md`);
