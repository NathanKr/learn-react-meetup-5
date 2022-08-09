<h2>Motivation</h2>
Prepare for meetup 5



<h2>Ignoring in first path</h2>
vite index.html
<ul>
<li>Google Analytics : i have seen few videos about this so ignored at first path</li>
<li>meta charset="utf-8" : i get it by default</li>
<li>link rel="icon" type="image/svg+xml" href="/src/favicon.svg" : not clear what it is</li>
<li>meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no" : will probably get from next.js</li>
<li>meta name="theme-color" content="#000000" : will probably get from next.js</li>  
<li>SavvyCal gives error not clear why and if i can put a code in _document</li> 
</ul>

<h2>Flow</h2>
<ul>
<li>according to lecture .component order : Home , About (needed tweaks) </li>
</ul>

<h2>points of interests</h2>
<ul>
<li>App.tsx was remarked because it is not a page</li>
<li>i had to fix url("../images/main-pic-2.jpg") in Home.styles.css . not clear how it worked in react</li>
<li>EventsSlide-name used but not exist replaced with EventsSlide_text</li>
<li>i am not using Top and Footer so added color:white in globals.css</li>
<li>the About.css has non existing classes like About-description-img-1 , it working on react but not in next.js so i needed to tweak it</li>
</ul>
