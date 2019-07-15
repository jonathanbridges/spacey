# spacey

### spacey 

spacey is a central hub for content pertaining to astronomy and the space industry. It allows visitors to make select and filter their favorite content, and save a customized dashboard that they can view on repeat visits.

## Background and Overview

Consolidating content from a multitude of sources allows users to spend less time navigating multiple websites to get the content they want.

spacey aggregates content from API endpoints such as NASA, SpaceX, and Twitter.

We will need to: 
  * Create a webapp that is capable of making GET requests to many different APIs
  * Work with extracting data from JSON responses and make them visually appealing to end users 
  * Build a database that allows for users to persist their favorite modules/feeds
  * Create a notification system that alerts users when items in their feeds have been updated

## Functionality & MVP

   - [ ] User Auth: Sign Up and Log In
   - [ ] Default Dashboard & Feeds (splash page with several boilerplate API calls)
   - [ ] Filtering (selection and display of specific feeds)
   - [ ] Subscribing to Feeds (persisting feeds in DB to allow for those to render upon future visits)
   - [ ] Production README


#### Bonus Features / Stretch Goals
   - [ ] Notifications
   - [ ] Comments / Channels

## Technologies

  ##### Backend: MongoDB/Express
  ##### Frontend: React/Node.js

## Technical Challenges

Many of the API endpoints for anything related to space science are incredibly dense and require a serious math and astronomy background to digest. Lots of research and judgement calls have to be made about what is reasonable to parse and what cannot be. Some of our loftier ideas for visualizations likely will not be able to be implementated in a reasonable timeframe.

  - Extensive research on available data from APIs
  - Making effective API calls and parsing the data appropriately
  - Parsing data and making it visually appealing for visitors 
  - Persisting user views from session to session 
  - Learning a new technology stack

## Accomplished over the Weekend

  - Extensive research on API endpoints from NASA, SpaceX, Twitter, other sources 
  - Design aesthetic and basic layout for page agreed upon 
  - Database and Repo created
  - Readme
  - User authentication on database backend

## Group Members & Work Breakdown

**Emarson Serrano**,
**Eric Leong**,
**Jonathan Bridges**

### July 13 - 14
  - Research and testing of API endpoints and datasources - **Emarson, Eric, Jonathan**
  - MongoDB and Repo Setup - **Eric, Jonathan**
  - BE User Auth and Testing - **Eric, Jonathan**
  - React/Redux FE setup = **Emarson, Eric**
  - Readme - **Jonathan**
  
### July 15 - 17

TODOs - # Default Dashboard & Feeds, Filtering, Subscribing, Notifications, Comments
