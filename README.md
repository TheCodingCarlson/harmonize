# harmonize

##An App To Inspire Musical Creation

###Created By Chris Carlson

![Screenshot](http://i.imgur.com/vy1Gn0Z.png)


###What Does It Do?
Harmonize is an App that aids aspiring musicians in creating chord progressions. Users are able to pick a starting note and chord quality and from there are given suggestions on what chord or chords would make sense musically to go to next. I created these suggestions based on popular chord progressions that have been used in pop/rock over the years. Users are able to choose 4 chords and save 4 chord progressions that they make to their profile if logged in. Designed with mobile in mind, I decided to go with a simple design that was easy use and navigate. I hope this apps serves as an inspiration for those who have always wanted to write songs, but felt limited by their lack of music theory. 

Check it out [HERE](https://harmonize2.herokuapp.com).

###User Stories
* Someone that knows a few chords on the piano but doesn't know how to put them together
* Someone that wants to start learning music but feels overwhelmed by the concept/seems too hard
* Someone that wants to write songs but doesn't know where to start
* A music teacher that wants to aid their students with learning cord progressions

###Major Hurdles
A major hurdle for me was finding a way to navigate through the major and minor tree chord structures in a practical way without repeating code over and over again. Seeing as how I had a small time frame for this project I was forced to make due and get something out that was functional and complete.  I hope to go back and refactor the code in the future.

One aspect that made this more difficult was having functionality no matter what note was chosen. I used a Javascript music theory framework called Teoria.js to create the relationships once the root note was chosen. However, this added another level of complexity that was difficult to navigate around.  Regardless, I really enjoyed working with Teoria and was very happy to find such a powerful tool for developers.

###Future Goals
Displaying notes of the chords chosen. Adding sound samples to chords. Sharing chord progressions between users.

###Technologies Used
* Express/Node
* Angular.js
* Mongo/Mongoose
* Bootstrap
* Teoria.js
* jQuery
* CSS3
* HTML5
* Bcrypt
* JSON Web Tokens

###Link to Wireframes
[Wireframes](https://www.dropbox.com/sh/hirfoex4qet0xm6/AAAdKO4JhgqzYMwkMlM1u20ia?dl=0)

