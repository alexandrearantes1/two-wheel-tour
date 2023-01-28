# Two Wheels Motorcycle Tours

Two Wheels Motorcycle Tours is an imaginary company specialized in providing multi-day motorcycle tours and motorcycle rental services in Ireland.

Motorcycle rental services would be provided for people who cannot bring their own motorcycle to Ireland or would like to experience riding a different motorcycle than their own.  

![Responsive Mockup](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/pngs/am-i-responsive.png)

## Project Goals

The goal of this project is to deliver a fully implemented front-end website that inspires motorcyclists to purchase motorcycle tours and/or to rent motorcycles in the Republic of Ireland. 

The site was designed to be easy to navigate, find information and to provide the user an intuitive way of identifying which page they are in. Pictures were carefully selected to convey a sense of freedom, fun and to inspire people to learn more about the Republic of Ireland. 

Different styles of motorcycles were used in the home cards (Adventure, Naked, Ninja) to convey the idea that you can enjoy the tours regardless of your motorcycle style.

## Target Audience

This website was targeted to motorcyclists from Ireland or from abroad interested in safely riding along experienced riders while getting to know a bit of history behind each landmark and town visited. 

## Features

Each page is divided into 3 main segments: header, content and footer. Each segment was designed to provide quick access to relevant information and allow for quick navigation to all pages and external links.

### Existing Features

- __Header__
  - The header contains the Navigation Bar including the Two Wheels Motorcycle Tours and links to all 3 pages.

- __Navigation Bar__

  - Featured on all three pages, the navigation bar is fully responsive. On the left hand side it contains links to the landing page (logo). On the right hand side, it contains links to the pages: Motorcycle Tours, Rent a Motorcycle and Contact Us. This allows for practical navigation without the need to rely on browser's navigation controls. 
  
  - Links on the right side of the navigation bar change their colour on mouse over to provide feedback to the user. When a link is clicked, it changes its colour to green in order to match the colour of the background of the segment below it, thus providing an additional way of the user to identify in which page they are.  
 
![Nav Bar](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/pngs/nav-bar.png)

- __The landing page image__

  - The landing page includes a photograph that captures the feel of being out on the road, exploring and enjoying being in nature with a motorcycle. 

![Landing Page](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/home-hero.webp)

- __Navigation Cards__

  - Each of the navigation cards contains an image with a different type of motorcycle, adventure, naked and sportbike. This was an intentional choice, in order to highlight that people do not necessarily need an adventure our touring motorcycle to enjoy our motorcycle tours.

![Home Cards](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/pngs/home-cards.png)

- __The Footer__ 

  - The footer section design was based on the Republic of Ireland's flag and includes links to the relevant social media sites for Two Wheels Motorcycle Tours. The links will open on a new tab to allow easy navigation for the user.
  - The footer is valuable to the user as it encourages them to keep connected via social media.

![Footer](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/pngs/footer.png)

- __Motorcycle Tours__

  - This section will provide the user with information about each tour offered by the company and what is included and what is not.
  - Each card contains an image of one of the locations covered by that tour, a short intro text about the tour, a list of main attractions as well as the price of the tour and a link to the Contact Us page.

![Motorcycle Tours](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/pngs/tour-card.png)

- __Rent a Motorcycle__

  - This section will display the 3 different motorcycles options for rent offered by the company.
  - Each card contains an image of the motorcycle, a short description and a list of features that the motorcycle offers. It also contains the price per day, a link to the Contact Us page and re-fuelling fees for each motorcycle in case they are not returned with a full tank.
  - This section will make it easier for the user to consider the full costs associated with the tours and help them decide if they would like to rent a motorcycle, or ride their own. 
  
![Rent a Motorcycle](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/pngs/rent-card.png)

- __Contact Us__

  - The The contact us page provides a contact form that will allow users to send a message. The user will be asked to specify if the message is regarding motorcycle tours, motorcycle rental, or other subject.
  - This section is valuable to the user as they will be able request more informations about tours, motorcycle rentals, make booking requests, or request any other information not yet included on the website.

![Contact Us](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/pngs/contact-us.png)

### Features Left to Implement

- In the future, an online booking system could be developed to it make easier for users to book their tours or motorcycle rentals, as well as taking online payments. 
- A Gallery section with pictures from past tours.
- A carousel of images for the tours cards containing pictures of each location covered by the tour and its name, instead of a static image.

## Testing 

- The website was tested on a wide range of screen sizes on Chrome, Safari, Firefox and Edge. 
- On large screens:
  - The nav bar will be fully displayed with the logo to the left, and 3 links side by side to the right. 
  - The cards on the home page will be displayed side by side. 
  - The footer will contain the colours of the Irish flag each taking 1/3 of the viewport. 
  - The social media links will be displayed in the white central stripe.

- On screens below or equal to 1024px wide:
  - The colours green and orange of the flag will take 25% of the page, and the central white stripe will take 50%, keeping more space for the social media links. 

- On screens below or equal to 768px wide:
  - The logo in the navbar will be displayed at the centre. The rest of the navbar will collapse into a hamburger. When clicked, the hamburger transforms into an "X" button and the 3 links (Motorcycle Tours, Rent a Motorcycle, and Contact Us) will be displayed on a semi-transparent list on top of the content of the page. 
  - The cards on the landing page, "motorcycle tours" and "rent a motorcycle" pages will be stacked on top of each other, taking 90% of the width of the page. 
  - The contact form on the "contact us" page will be positioned below the image of the motorcycle. 

- On screens below or equal to 620px wide:
  - The colours green and orange of the flag on the footer will not be displayed in order to give more space to the white stripoe containing the social media links. 

- Bugs:
  - The content elements (below navbar) were displaying a 20px blank space above it's content, even with margins and paddings set to 0. Curiously, when you add "border: 1px solid transparent;"  to the element, the blank space disappears.
  - There were no major issues identified regarding layout elements, css transitions or responsiveness. The site works as intended on all browsers that it was tested on.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Falexandrearantes1.github.io%2Ftwo-wheels-motorcycle-tours%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Falexandrearantes1.github.io%2Ftwo-wheels-motorcycle-tours%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Lighthouse - Dev Tools
  - No major issues reported on the Desktop version of the lighthouse report.
    ![Lighthouse page load analysis - desktop](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/pngs/lighthouse-index-desktop.png).
  - Mobile performance was 75%, all other reports returned 100%.
    ![Lighthouse page load analysis - desktop](https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/assets/images/pngs/lighthouse-index-desktop.png).


### Unfixed Bugs

- A curious glitch seems to happen on home cards hover effect, where the width of the card slightly varies (flicker) during the transition. This issue was only observed on a HP 27W display monitor and only at certain viewport width sizes and certain positions of the browser window on the screen. The issue does not occur on a MacBook Pro Retina Display or Google Pixel 6 Pro mobile phone. It was not possible to determine the exact cause of the issue and it remains unsolved as of 28/01/2023.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the main branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://alexandrearantes1.github.io/two-wheels-motorcycle-tours/index.html

## Credits 

### Content 

- The texts for the description on the motorcycle rental cards were taken from [Triumph Ireland](https://www.triumph.ie/) and [Harley Davidson Ireland](https://www.harley-davidson.com/ie).
- All icons used on the website (home cards, tour cards and social media links) were taken from [Font Awesome](https://fontawesome.com/).
- Social Media links :hover effects were based on the online tutorial on Youtube Channel [Online Tutorials](https://www.youtube.com/watch?v=13z8K7z64os&t=94s).

### Media

- All photos used on the website were taken from [Unsplash](https://www.unsplash.com) with the exception of the Contact Us page, which is from my personal archive.

