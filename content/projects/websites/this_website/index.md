---
title: "This Website"
date: 2022-04-18
description: My personal resume site.
projectLink: https://carterhay.net
sourceLink: https://github.com/idlecore/carterhay.net
menu:
  project:
    name: This Website
    identifier: this_website
    parent: websites
    weight: 10
tags: ["Website"]
categories: ["Websites"]
---

In 2023 I decided that I needed to improve my resume website. My previous website was extremely light-weight using only basic html/css and no javascript. It was built using the Pure CSS framework. The main problem with it was that it was ugly, and hard to update. The design of the website wasn't good. I designed it myself; however, I'm a developer, not a designer. My update process involved re-building the pug, saas, and coffeescript generation by hand then replacing files on google cloud.

I decided that my new website should meet the following requirements:
- Good design.
- The ability to easily update blog posts and projects while remaining static.
- Remain fairly light-weight.

I've used Hugo in the past for some of my other Websites, especially websites for customers that might need updates to the contents, so this was a natural choice.

After looking through some of the Hugo themes, I came across Toha. It had many of the features I was looking for and looked very good. For all intents and purposes, this website is using this theme, with very little modification of the actual design.