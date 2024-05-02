# To-Do/Ideas List:
___

## Imagegallery

- [ ] Figure out how to add optional styling for image descriptions

- [ ] Look into imagegallery using "i1" as key prop, instead of a unique index
- [x] Customizable height and width property
- [ ] Figure out how to click over to all images


## Page performance:

- [ ] Look into Cumulative Layout Shift
https://vercel.com/docs/speed-insights/metrics#cumulative-layout-shift-cls
--> page contents, probably image gallery

- [ ] Look into why page transitions are lagging


___

## Mobile:
- [x] Fix Homepage mobile
- [x] Fix cad page


## Footer + Navbar

- [x] Make a website footer
- [x] Footer animation onhover

- [x] Fix footer scaling problems:
    - [x] stop it from scaling the height
    - [x] put the actual footer behind the text
    - [x] Footer animation from below when hovering

## Fun:
- [x] Interactive Logo
    - [x] Change font
    - [x] Change particle size
    - [x] Change particle shape
    - [x] Try on title page

### Testing page
- [x] Autofocus on password bar
- [x] Hide password bar after password has been entered

### Page transitions
- [x] Figure out how to make page transitions without breaking everything
- [x] Add page transitions to children pages

- [ ] Add transition animations for elements on the page aswell, not just pages themselves

- [x] Fix page transitions to not only work on reload
- [x] SOLUTION --> super hacky workaround because nextjs page transitions are broken

### Backbutton
- [x] Bring back "backbutton"
- [x] Make it not show up on mobile

### Search:

- [x] Search function?
    --> https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
    - [x] Visual 
    - [x] Figure out how how to make it functional
        - [x] index.js file with all pages + keywords listed
        - [x] only display onFocus
        - [x] Make it go away on focus loss or empty field
        - [x] Animatepresence opening and closing animation
        - [x] Click outside for closing
        - [x] (x) Button to clear search field
        - [x] Page previews?

### Suspense
- [x] Figure out why layout.js isnt applying to child pages --> just use loading.js
- [x] Add suspense to children pages


### 3D models:
- [x] Figure out how to make textures --> just use gtlf
- [x] Figure out better lighting

- [x] Flowers:
    - [x] Buttons for all the "molds"
    - [x] Visualizer of the finished card, cardboard look
    - [x] Maybe some bool switch of "mold"/"Card" and then the flowers

- [x] CAD:
    - [x] Figure out how to display multiple models side to side
    - [x] Figure out how to switch between multiple models
    - [x] Buttons to switch from open to closed
        - [x] Make buttons not take up entire row
    - [x] add to cad page

### Updates:
- [x] Update Portfolio

### NEW TO-DO PAGES:
- [x] ZHdK homework

### Creative Coding:
- [x] Make better buttons (?) to toggle drawing etc
- [x] Doublecheck that mobile etc works
- [x] figure out how to set drawing to true on mouse over?
- [x] figure out how to have followmouse & autocolor on, and still be able to turn it off

### Videos/Gifs/Images:

#### General:
- [x] Make a component for my images with the handleoutsideclick etc
- [x] Change general background of all pages (fml) --> to something that doesnt look like the circle cut off halfway through
- [x] Maybe add borderRadius:'24px' to motion images
- [x] Add "title" when big 
- [x] Video embedding --> dim background
- [x] Figure out how to make "mouse hover tipps" show up --> for dim button/focus button, 
- [x] Implement the tooltips
- [x] Add page with calendar for dates (hausaufgaben etc)

#### Animations:
- [x] Make cards bigger
- [x] Change background for main animation page
- [x] Change background for sub-animation pages
- [x] Add background blur onhover
- [x] Upload all animations
- [x] Kontakt
- [x] Logo
- [x] Plasticine
- [x] Skate
- [x] Train
- [x] Music
- [x] Add descriptions on cards
- [x] Add descriptions on pages
- [x] credit maude on plasticine video
- [x] Figure out why Google Drive wont work for some videos
- [x] Decide on Layout when multiple videos per page

#### Skylands
- [ ] Maybe add an svg background?
- [x] Add background to description of images
- [x] Structure & add screenshots --> like portfolio
- [x] Figure out background colors (different ones)
- [x] Upload Screenshots
- [x] Upload Video
- [x] Upload apk
- [x] Figure out why video wont work

#### Creative-Coding
- [x] Fix code snippets looking really bad
- [x] Add code screenshots (+ maybe little "test" code sandbox things that only have the current code)
- [x] Decide on background --> colorful or not
- [x] Scrollable window/codesandbox under gallery or video
- [x] Scrollable container element?
- [x] Move "tips" button to top
- [x] Add all screenshots --> like portfolio
- [x] p5js editor
- [x] Add examples with code view + screenshots
- [x] Github Link
- [x] image gallery

#### Sketches
- [x] Add all sketches that are in portfolio
- [x] Maybe change background slightly
- [x] Look into picture/svg as backgroundcolor ?
- [x] Add description
- [x] Upload screenshots

#### CAD 
- [x] Figure out how to dynamically scale vl
- [x] Change background to be green --> like portfolio 
- [x] Figure out how to make grid --> <hr> and <vl> maybe?
- [x] Add description
- [x] Upload screenshots

#### Voxel Art
- [x] Change voxel backgrounds slightly
- [x] Upload screenshots
- [x] Add description

#### Arts & Crafts
- [x] Change crafts backgrounds slightly
- [x] Upload screenshots
- [x] Add description

#### Illustrator
- [x] Change illustrator backgrounds slightly
- [x] Upload Screenshots
- [x] Add description

### Links:
- [x] Google Drive Link
- [x] Portfolio Link (google drive)
- [x] Github Link

### About:
- [x] Copy paste CV svg files
- [x] Style app icons

## Less Priority (Visual/Layout)

### General Website issues:
- [x] Add a "page divider", a half transparent thin line to "section" different parts of a page?
- [x] Figure out dark mode on other devices
- [x] Fix title not centered on mobile
- [x] Fix youtube not allowing fullscreen

### Navbar:
- [x] subNavbar animation --> not just fade in/out
- [x] SubNavbar button --> add background
- [x] Make menu buttons on navbar "morph" onclick
- [x] Look into SVG Drawing --> Navbar open/close icon animated
- [x] Navbar colors finalize --> maybe feedback
- [x] Navbar open/close button --> make background (backgroundColor:'#211f1e') and have other items go BEHIND that
- [x] Animate the "active-path" gray box 
- [x] Navbar --> maybe bring back hover and add an outline for active path?
- [x] Navbar gray box --> figure out different colors for each page (if possible)
- [x] Make second version without hover-path
- [x] Fix not centered on mobile still
- [x] Navbar animation --> from the side
- [x] Sub-Navbar (Projects)
- [x] Navbar icon
- [x] Navbar change toggle from top to left
- [x] Change animation to not look like shit
- [x] Figure out why it closes automatically (turns out it was not using the Link router)
- [x] Navbar fixed on top of screen?
- [x] adjust spacing for focus button based on new navbar
- [x] onTap animation

### Focus/Dim Buttons:
- [x] get some padding on top of id for focus button? (make new div with 1rem padding and take away 1rem padding from subtitle div) or
- [x] Implement focus button on all pages

### Background:
- [x] Gradient like github page
- [x] Change background
- [x] Figure out gradient

### Links:
- [x] Add github links
- [x] Add Icons

### Cards:
- [x] Uniform card logos (maybe stylized)

- [x] Figure out how the hover works
- [x] Add spacing between cards
- [x] Change Backgroud of cards
- [x] Figure out individual backgrounds
- [x] Fix Background Creative Coding
- [x] Fix Background Animations
- [x] Add Project descriptions
