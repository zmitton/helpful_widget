# Kohana PHP Framework

AMMPS install for my mac running Mavericks. This is ment to be pretty simple. If you have any questions raise an issue. 
On the ampps install I actually downloaded Kohana from the "frameworks" link. It uses code developed originally by github user: shadowhand [this empty kohana framework](https://github.com/kohana/kohana to build a simple crud app on top of an [AMPPS install](http://ampps.com/download).

I'm listening to [Brandon Liu's youtube video](https://www.youtube.com/watch?v=YaZVbT9RMG8) on Kohana and I'm really liking it, even though its very rudimentary (best real-world explanation of what a framework actually IS I have ever heard).

Like most web frameworks there is a huge learning curve, and a lot of syntactical sugar at first that you have to accept without really understanding why.

one controller file for each model

unfortunately Heroku doesn't support Kohana frameworks, so instead of scratching my head all night, I decided to repeat the work in something similar to rails, but much more light weight. I used Sinatra because It has the same MVC structure and the ability to use an ORM without all the extra "stuff". This is actually a combo of a skeleton I used at DevBootcamp, with some files that allow it to run seamlessly on a Heroku thin server when the time comes.

making it pretty:
I quickly realized I needed to make a page that looked professional to stick in the background of this "widget". the actual eHow.com page looks snazzy as hell, so I though, I have basically two choices here: download a simple responsive css template, or try to make my own from scratch and risk having my site look like it was built in 2002. Now I just need to find something that isn't designed specifically for wordpress, something kindof difficult these days.

once I have my article, and my helpful-not-helpful widget sitting in it, I need to determine how to connect this thing to data.The obvious structure would be a Post model, that has many Votes attached to it. The Votes will have a boolean 'helpful' field indicating yes or no, and will be tied to many 'Vote_Reasons'. The Vote_Reasons are join tables, and the last table, 'Reasons', contains only 5 single field text entries: Too general, Out of date, Inaccurate, Needs more photos, and Other.

The only thing left out of the picture here is the User. I'd like to tie all of this back to a user, but then by convention I would have to require a person to create an account and login. The current eHow site isn't requiring login in order to vote. This is actually a bit perplexing to me because any decent hacker should be able to corrupt these votes with thousands upon thousands of vote requests. Generally there is at least a captcha required. I believe these votes are not considered a "big deal" within the company and 99% of the time they are overlooked by malicious hackers.

I do however appreciate the fact that my vote is counted even though I haven't logged in.

Next I have to stick some css and ajax onto the widget to get it flowing up and down the page properly. Lets test this functionality in a few browsers and devices. The only way to get it on my phone is to post to a live server so this marks my first heroku push.

making an app in heroku is rather easy, just add a few configuration files to the project to tell it how too serve and adding a subdomain and a cName to my godaddy zone file, and it was up and running at "HelpfulWidget.ZacMitton.com".

So now I have the data, and I need to display the rest of the page to display said data using RESTful routes. Here are those routes, in link form for easy access:

Now I have more pages though, and I dont want them to look all crappy either. more css beautification, but the problem really is a matter of lacking content. When you dont have much content, you can't make a page look very good. I've noticed the right picture bring a page 5 years  into the future. Here I decided to impliment a little d3 as well. I've wanted to try d3 for a while. Why the hell not.