# Assignment 1 - ReactJS app.

Name: Conor Coker

## Overview.

[A brief statement on the content of this repository.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
#### Feature 1: Additional Static Endpoints from TMDB
- **Two** additional static endpoints:

  1. **Trending and Top Rated Movies**
     
     <img src="https://github.com/user-attachments/assets/80cc999a-703b-4c68-b24a-494ea193a097" alt="Image of my trending page" width="400"/>
     
     <img src="https://github.com/user-attachments/assets/87c1609b-51e7-481d-a88d-4579a9dea17f" alt="Image of my rating page" width="400"/>

#### Feature 2: Additional Parameterized Endpoints from TMDB
- Adding **two** additional **parameterized** endpoints:

  1. **Movie Recommendations**

     <img src="https://github.com/user-attachments/assets/777b6568-1fbf-4acf-9a79-7b7c2aeffe96" alt="Image of my new Recommendations button on the movie details page" width="400"/>
     
     <img src="https://github.com/user-attachments/assets/c5d2a7f1-23a9-4990-b3aa-e9a1e1d18d25" alt="Image of my new Recommendations Drawer" width="400"/>

  2. **Alternative Titles**

     <img src="https://github.com/user-attachments/assets/bb667c1e-ad44-43ed-8487-7e63b49d682d" alt = "Image of alternative titles displaying on movie detail page" width="400">

#### Feature 3: Extensive Linking Of Information
- Adding a **actors page** that contains their **image**, **name**, **gender**, **country**, **movies** and **biography**.

   1. **Actor Page with actor details**

      <img src="https://github.com/user-attachments/assets/6c74a221-df89-4353-9a40-257ad3000536" alt="Image of my new actors page" width="400"/>

   2. **Actor's movies details which when clicked links to movie page**
  
      <img src="https://github.com/user-attachments/assets/4917e828-e016-44ec-ada4-b42135aeae09" alt = "Image of movie details on their actors page which links to the movie" width="400">

#### Feature 4: Extensive Linking Of Information II
- Adding links to popular actors on movie details page which when clicked opens a new actor page.  

   1. **Movie detail page with actor details**

      <img src="https://github.com/user-attachments/assets/dd3e26f3-a508-4ee5-b87c-5907f41716c0" alt="Image of my actor details on movie details" width="400"/>

   2. **Actor's movies details which when clicked links to movie page**
  
      <img src="https://github.com/user-attachments/assets/929bd6e1-a29d-4966-9d32-04bace2023d9" alt = "Image of the actor details once clicked" width="400">

#### **Feature 5: Caching with React Query on all endpoints**

- The app uses **React Query** with the `useQuery` hook to cache API responses.

   1. **React Query DevTools showing cached data**
   
   ![React Query DevTools showing cached data](https://github.com/user-attachments/assets/06956ba2-93c5-4ea8-9d4f-c7120f7a3641)

**How It Works:**
   - Unique query keys like `["singular-actor-details", { id: actorId }]` cache the data.
   - Cached data is reused on subsequent visits.

#### **Feature 6: Adding a additonal filter (filter by adult)**

- On the homepage we can now filter by movies where adult = true. This works as intended however it may not of been the best feature to implement as there are not many movies where adult = true on the discover page. 

   1. **New filtering option**
   
   ![The new filter by adult option](https://github.com/user-attachments/assets/a86b7dfb-0a77-4e2d-8825-390c80549aa0)

**How It Works:**
- Unique query keys like `["singular-actor-details", { id: actorId }]` cache the data.
- Cached data is reused on subsequent visits.
      
## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).