---
title: "cv mobile app"
date: "10-12-2018"
description: "This was the final project at the 20h talent bootcamp I joined in, it was meant to be an app, designed to work just on mobile devices so it could be complied in the future on a hybrid app. The goal of the project was to create an app to manage student profiles and company profiles so they could communicate with each other and create more work opportunities. The project took over two months of duration, combining other cases and workshops to be able to apply this new knowledge to develop more complex functionalities."
---

### Infinite scroll

![Infinite Scroll](./img/infinite-scroll.gif)

The first functionality I was in charge of, was to create an infinite scroll home page that was able to render student profiles in blocks of ten so when the user reaches the bottom of the page it loaded ten more student profiles until there weren't more profiles to load from the server. The approach I took in this occasion was to attach an event listener to the main container where the profiles was loaded and made a calculation with the scroll position of it and the window height, and then fire a data fetch with a dynamic link that changes for every request avoiding fetching the same users twice.

### Quick search

![Quick Search](./img/quick-search.gif)

Another functionality I was in charge of develop was to add a quick search bar on the main page to find users that are already loaded from the server. This search had to find coincidences at the same time on the user's name, username, email and company. Finally, the coincidence of each user is highlighted to help the user find what he's looking for.
