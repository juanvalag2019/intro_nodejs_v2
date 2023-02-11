#! /usr/bin/env node

import fetch from 'node-fetch';
import yargs from 'yargs';
import open from 'open';

const { argv } = yargs(process.argv);

const res = await fetch('https://reddit.com/.json');
const data = await res.json();
const childrenPosts = data.data.children;

const randomPost = childrenPosts[Math.floor(Math.random() * childrenPosts.length)];
const postLink = `https://reddit.com${randomPost.data.permalink}`;

if (argv.print) {
    console.log(`
    title: ${randomPost.data.title},
    link: ${postLink}
    `);
} else {
    open(postLink);
}