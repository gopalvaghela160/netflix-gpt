# authentication

# protected routes

# form handling

# netflix gpt app

- create react app
- configure tailwind css
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form validation
- what is useRef hook?
- Firebase setup
- deploying our app to production
- Create SignUp User Account
- implement SignIn user api
- created redux store with user slice.
- implemented sign Out
- updated profile
- BugFix : Sign up user displayName and profile picture updates
- BugFix : if User is not login Redirect / page and user is login in than redirect /browse page
- unsubscribe to the onAuthStateChanged callback
- ADD hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies lists API.
- custom hook for movie playing movie 
- create movieSlice
- update store with movies data
- planing for mainContainer and secondary container
- fetch data for trailer video
- update store with trailer video data
- Embedded the youtube video and make it autoplay  and mute
- tailwind css to make main container look awesome 

- Fetch from TMDB movies

# Features

- Login / Sign Up
  - Sign In / Sign up Form
  - redirect to browse page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N

- NetflixGPT
  - Search Bar
  - Movie Suggestions

#

npm install firebase
npm install -g firebase-tools
firebase login
firebase init
firebase deploy

# onAuthStateChanged

whenever the user auth status change.whenever user is logged in whenever is log
out this keeps a track .


# load component than check log why console log print two times ?
if i remove strict mode than it print only one time.if i apply react.strictmode than lots of thing are apply twice. this is react thing.
it will just happen twice in your local. when you are developing your app.when you are doing npm run start it in your local project only tis will happen twice.
but if you will make a build for production this will not happen twice .
# why it happens twice tis the reason is that react does extra rendering of your components to check for some inconsistency between your calls.and this does and this only happens in development mode and it will throw an error if there is some inconsistency in your rendering cycle . 