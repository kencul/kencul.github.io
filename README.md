# kenwebsite

I used a template from a website to start myself off with a basic template on the main page and a bit of css. (https://ziontutorial.com/how-to-create-a-modern-website-using-html-and-css-step-by-step-website-tutorial/)

I used this template to look up all the tags and css to try to grasp all the concepts.

I imported fonts from **google fonts api** in the css, works great

Tried to make the works section of my nav bar have a **drop down**, couldn't get it to work, so commented out and left it for later

Added picture, playing around with border radius. I didn't like the hard edges, so looked up an implementation to create a **gradient**, which I fiddled with until the edges were much less obvious

Added text to introduce myself quickly on main page, wanted the button to start playing my music. this made me want to create a **custom audio player**, which I will save for later after I finish more basic layout stuffs

Added 7 new pages, total 8. I don't know if i'll have enough time to add everything, but I will work on the most important ones first

Tried to make the **nav bar sticky** quickly, but didn't work so I moved on (https://www.w3schools.com/howto/howto_js_navbar_sticky.asp)

Started changing nav bar and realized it would be super tedius to copy paste changes everytime, so adding javascript to fetch nav.html for every page

Chrome doesn't allow access to local files, so this wasn't possible in my environment. It will be possible on a server or on the github website

Working on music page, simplifying it with including just 3 columns, and probably just 3 youtube videos

The youtube videos are showing up, but not scaling up to the flex box properly and getting a playback error

The playback error was because I wasn't using the proper embed link. Getting the proper embed from youtube and fixing links solved the playback issue (https://stackoverflow.com/questions/32426401/embeded-youtube-video-error)

With the power of flex box, I found I can add as many iframe elements as I wish. I made the youtube video embed fill the entire width, and applied a aspect ratio in the css to make the videos look watchable.

The elements are at different heights depending on the length of the text, but I can't figure out how to align the flex boxes according the the bottom of them.

Solved alignment through <align-self: flex-end;>

Soundcloud embed works great, but blasts your ears, and there is no volume control on the embed UI. I tried importing the soundcloud widget api and setting the volume to 50%.

Importing the api works, but setting the volume didn't work, and i couldn't figure it out, so I commented it out for now

I want to try to implement some Unity games I made for a different class

Requires accessing local files again, so only possible if i push to github or get a webhost, but I want to be able to test quickly so I will do this later again. Requires webgl (https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)

Added icons to social page that redirect to my profile in each social.

trying to make it change color on hover, tried layering the original and hover version of the image, but i couldn't figure out layering the flex objects

filter: hue-rotate didn't work, so i settled on a scaling effect on hover for the social media icons

I decided to work on the about page next, as the home page looked great with a picture, so i wanted to include another picture

I wanted the picture to be on the right and the text on the left to be opposite of the home screen, but it was a little lazy with my implementation and I can't keep track of the flex boxes, so the image is skewed far to the left.

BUT it looks ok, and the text looks nice, so I left it as is.

Checking back at the home page, I won't have time to implement the music transport, so I am having the button to listen to my music on the home page redirect to the music page

The picture in the about page doesn't seem to be getting the gradient like the one on the home page.

But, I think it would be most impactful and cool to get my Unity game working in WebGL than any other feature atm, so I am going to work on that, which will require pushing to the github and checking the website there, which will severely reduce my efficiency

My imports from google fonts dont work on the github pages, which makes the entire website unusable

Fixed by removing https: from the url, as github pages doesn't like that
This breaks my local version, so I can't preview changes without pushing now

first attemp at the unity embed, the window is really short, and the unity logo shows up, but never finishes loading

the github pages update extremely slow after pushing, so its very difficult to debug. I will push one more time, and hope it works in class!