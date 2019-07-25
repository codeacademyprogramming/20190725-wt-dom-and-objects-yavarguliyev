"use strict";

let body = document.body;

/* Header */

let header = document.createElement("header");
    body.appendChild(header);


/* Main */    

let main = document.createElement("main");
    body.appendChild(main);

let section = document.createElement("section");
    
    body.appendChild(section);

let divContainer = document.createElement("div");
    divContainer.classList = ("container");
    body.appendChild(divContainer);  

main.appendChild(section); 
section.appendChild(divContainer);   
    
/* Row 1 */

let divRow1 = document.createElement("div");
    divRow1.classList = ("row");
    body.appendChild(divRow1); 

let divHeading = document.createElement("div");
    divHeading.classList = ("col-12 text-head");
    body.appendChild(divHeading); 
    
let headingTitle = document.createElement("h1");
    headingTitle.innerHTML = "What People Say";
    body.appendChild(headingTitle);

divContainer.appendChild(divRow1); 
divRow1.appendChild(divHeading);
divHeading.appendChild(headingTitle);  
  
/* Row 2 */    

let divRow2 = document.createElement("div");
    divRow2.classList = ("row");
    body.appendChild(divRow2); 

let divReviews = document.createElement("div");
    divReviews.classList = ("col-12");
    body.appendChild(divReviews); 

let peopleThoughts = document.createElement("h2");
    peopleThoughts.classList = ("subheading");
    peopleThoughts.innerHTML = "Reviews";
    body.appendChild(peopleThoughts);

divContainer.appendChild(divRow2);
divRow2.appendChild(divReviews);
divReviews.appendChild(peopleThoughts);


/* Paragraph 1 */

let divRow3 = document.createElement("div");
    divRow3.classList = ("row author-image");
    body.appendChild(divRow3);  

divContainer.appendChild(divRow3);
    

let divCol1 = document.createElement("div");
    divCol1.classList = ("col-4");
    body.appendChild(divCol1);

let paragraph1 = document.createElement("p");
    paragraph1.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    body.appendChild(paragraph1); 
    
let image1 = document.createElement("img");
    image1.setAttribute("src", "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg");
    body.appendChild(image1);

let name1 = document.createElement("h3");
    name1.innerHTML = "John Doe";
    body.appendChild(name1);    

divRow3.appendChild(divCol1);
divCol1.appendChild(paragraph1);
divCol1.appendChild(image1);
divCol1.appendChild(name1);


/* Paragraph 2 */

let divCol2 = document.createElement("div");
    divCol2.classList = ("col-4");
    body.appendChild(divCol2);

let paragraph2 = document.createElement("p");
    paragraph2.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    body.appendChild(paragraph2); 
    
let image2 = document.createElement("img");
    image2.setAttribute("src", "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg");
    body.appendChild(image2);

let name2 = document.createElement("h3");
    name2.innerHTML = "Pete Jones";
    body.appendChild(name2);     

divRow3.appendChild(divCol2);
divCol2.appendChild(paragraph2);
divCol2.appendChild(image2);
divCol2.appendChild(name2);


/* Row 3 Paragraph 3 */

let divCol3 = document.createElement("div");
    divCol3.classList = ("col-4");
    body.appendChild(divCol3);

let paragraph3 = document.createElement("p");
    paragraph3.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    body.appendChild(paragraph3); 
    
let image3 = document.createElement("img");
    image3.setAttribute("src", "https://cdn.pixabay.com/photo/2018/05/07/08/52/business-3380350_1280.jpg")
    body.appendChild(image3);

let name3 = document.createElement("h3");
    name3.innerHTML = "Mark Wilson";
    body.appendChild(name3);     

divRow3.appendChild(divCol3);
divCol3.appendChild(paragraph3);
divCol3.appendChild(image3);
divCol3.appendChild(name3);



  




/* Footer */

let footer = document.createElement("footer");

    body.appendChild(footer);

