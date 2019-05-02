const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");

logo.setAttribute('src', siteContent["nav"]["img-src"]);

const topNavItem = document.querySelectorAll('a');
for(let i = 0; i < topNavItem.length; i++){
  topNavItem[i].textContent = siteContent['nav'][`nav-item-${i + 1}`];
}

const ctaTexth1 = document.querySelector('h1');
ctaTexth1.textContent = siteContent['cta']['h1'];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaBtn1 = document.querySelector('button');
ctaBtn1.textContent = siteContent['cta']['button'];

// Main Content
// Top Content
const mainContH4 = document.querySelectorAll('.main-content h4');
const mainContP = document.querySelectorAll('.main-content p')

mainContH4[0].textContent = siteContent['main-content']['features-h4'];
mainContP[0].textContent = siteContent['main-content']['features-content'];

mainContH4[1].textContent = siteContent['main-content']['about-h4'];
mainContP[1].textContent = siteContent['main-content']['about-content'];

//Image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Bottom Content
mainContH4[2].textContent = siteContent['main-content']['services-h4'];
mainContP[2].textContent = siteContent['main-content']['services-content'];

mainContH4[3].textContent = siteContent['main-content']['product-h4'];
mainContP[3].textContent = siteContent['main-content']['product-content'];

mainContH4[4].textContent = siteContent['main-content']['vision-h4'];
mainContP[4].textContent = siteContent['main-content']['vision-content'];

// Contact
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent['contact']['contact-h4'];

contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

// Footer
const footer = document.querySelector('footer')

footer.textContent = siteContent['footer']['copyright'];
