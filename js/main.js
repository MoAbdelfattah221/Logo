// Start Header 
// Initialize Variables
let header = document.createElement("header");
let headerContainer = document.createElement("div");
let logoLink = document.createElement("a");
let imgLink = document.createElement("img");
let headerUl = document.createElement("ul");
let headerIcon = document.createElement("i");

// Add Classes and Styling
document.body.style.cssText = "font-family: 'Cairo', sans-serif;"
header.classList.add("py-4");
header.style.cssText = "background-image: linear-gradient(to right , #a517ba , #5f1782);";
headerContainer.classList.add("container" , "d-flex" , "justify-content-between" , "align-items-center");
headerIcon.classList.add("icon" , "fa-solid" , "fa-bars" , "text-light");
headerUl.classList.add("list-unstyled" , "p-0" , "m-0" , "d-flex");
imgLink.style.cssText = "width: 100px;";

// Appending Elements
document.body.appendChild(header);
header.appendChild(headerContainer);
headerContainer.appendChild(logoLink);
headerContainer.appendChild(headerIcon);
logoLink.appendChild(imgLink);
headerContainer.appendChild(headerUl);

// Loops
for(let i = 0; i < 5; i++){
    let headerLi = document.createElement("li");
    let liLink = document.createElement("a");

    headerUl.appendChild(headerLi);
    headerLi.appendChild(liLink);

    liLink.classList.add("text-light" , "mx-2" , "text-decoration-none");
    liLink.href = "#";

    liLink.style.cssText = "font-size: 13px;";
}

// Add Content
document.getElementsByTagName("a")[1].textContent = "HOME";
document.getElementsByTagName("a")[1].href = "index.html"
document.getElementsByTagName("a")[2].textContent = "SERVICES";
document.getElementsByTagName("a")[2].href = "#services"
document.getElementsByTagName("a")[3].textContent = "ABOUT US";
document.getElementsByTagName("a")[3].href = "#advantage"
document.getElementsByTagName("a")[4].textContent = "TESTIMONIALS";
document.getElementsByTagName("a")[4].href = "#testimonials"
document.getElementsByTagName("a")[5].textContent = "CONTACT";
document.getElementsByTagName("a")[5].href = "#icons"

// SRC
logoLink.href = "index.html"
imgLink.src = "./images/demo-logo.png";

// Functions
headerIcon.onclick = () => {
    headerUl.classList.toggle("active");
}

// End Header 

///////////////////////////////////

// Start Landing
// Initialize Variables
let sectionLanding = document.createElement("section");
let landingWave = document.createElement("img");
let landingContainer = document.createElement("div");
let imageDiv = document.createElement("div");
let ContentDiv = document.createElement("div");
let landingImg = document.createElement("img");
let heading = document.createElement("h2");
let paragraph = document.createElement("p");

// Add Classes and Styling
sectionLanding.classList.add("landing");
landingWave.classList.add("mw-100");
sectionLanding.style.cssText = "background-image: linear-gradient(to right , #a517ba , #5f1782);";
landingContainer.classList.add("container" , "d-flex" , "justify-content-between" , "align-items-center");
imageDiv.classList.add("image-div");
landingImg.classList.add("mw-100")
ContentDiv.classList.add("content-div");
heading.classList.add("fw-bold" , "text-light");
paragraph.classList.add("text-light");



// Appending Elements
document.body.appendChild(sectionLanding);
sectionLanding.appendChild(landingContainer);
sectionLanding.appendChild(landingWave);
landingContainer.appendChild(ContentDiv);
landingContainer.appendChild(imageDiv);
imageDiv.appendChild(landingImg);
ContentDiv.appendChild(heading);
ContentDiv.appendChild(paragraph);

// SRC
landingImg.src = "./images/home2.png";
landingWave.src = "./images/wave1.png";

// Add Content
heading.innerHTML = "BEST DIGITAL AGENCY"
paragraph.innerHTML = "We are a digital marketing agency in Egypt. That is both strategically and creatively motivated. We mix all aspects of digital marketing to help you grow your business and build strong relationships with your clients."

// End Landing

///////////////////////////////////

// Start Services 
// Initialize Variables
let servicesSection = document.createElement("section");
let servicesContainer = document.createElement("div");
let servicesRow = document.createElement("div");
let servicesLink = document.createElement("a");
let servicesComponent = document.createElement("h2");

// Add Classes and Styling
servicesSection.classList.add("services" , "py-5");
servicesSection.id = "services";
servicesContainer.classList.add("container");
servicesRow.classList.add("row" ,"pt-5");
servicesComponent.classList.add("fw-bold" , "text-center" , "text-secondary");
servicesLink.classList.add("text-decoration-none" , "text-light" , "m-auto" , "py-2" , "px-4" , "rounded" , "text-secondary" , "text-center" , "d-block");
servicesLink.style.cssText = "width: fit-content; background-image: linear-gradient(to right , #a517ba , #5f1782);";

// Appending Elements
document.body.appendChild(servicesSection);
servicesSection.appendChild(servicesContainer);
servicesSection.prepend(servicesComponent);
servicesSection.appendChild(servicesLink);
servicesContainer.appendChild(servicesRow);

servicesLink.href = "#";

// Loops
for(let j = 0; j < 3; j++){
    let servicesDiv = document.createElement("div");
    let servicesDivBox = document.createElement("div");
    let servicesDivBoxImg = document.createElement("img");
    let servicesDivBoxHeading = document.createElement("h4");
    let servicesDivBoxParagraph = document.createElement("p");

    servicesRow.appendChild(servicesDiv);
    servicesDiv.appendChild(servicesDivBox);
    servicesDivBox.appendChild(servicesDivBoxImg);
    servicesDivBox.appendChild(servicesDivBoxHeading);
    servicesDivBox.appendChild(servicesDivBoxParagraph);

    servicesDiv.classList.add("col-12" , "col-sm-4" , "col-lg-4" , "mb-4");
    servicesDivBox.classList.add("text-center")
    servicesDivBoxImg.classList.add("mw-100");
    servicesDivBoxHeading.classList.add("pt-3");
    servicesDivBoxParagraph.classList.add("text-secondary");
    servicesDivBoxParagraph.style.cssText = "font-size: 12px;";

    servicesDivBoxImg.style.cssText = "width: 80px;"

}

// Add Content
document.getElementsByTagName("h2")[1].textContent = "WHAT WE DO ?";
document.getElementsByTagName("a")[6].textContent = "All Services";


document.getElementsByTagName("img")[3].src = "./images/service1.png";
document.getElementsByTagName("img")[4].src = "./images/service2.png";
document.getElementsByTagName("img")[5].src = "./images/service3.png";

document.getElementsByTagName("h4")[0].textContent = "GROWTH MARKETING";
document.getElementsByTagName("h4")[1].textContent = "ONLINE BRANDING";
document.getElementsByTagName("h4")[2].textContent = "ANIMATED ADS";

document.getElementsByTagName("p")[1].textContent = "We are a digital marketing agency in Egypt. That is both strategically and creatively motivated. We mix all aspects of digital marketing to help you grow your business";
document.getElementsByTagName("p")[2].textContent = "We are a digital marketing agency in Egypt. That is both strategically and creatively motivated. We mix all aspects of digital marketing to help you grow your business";
document.getElementsByTagName("p")[3].textContent = "We are a digital marketing agency in Egypt. That is both strategically and creatively motivated. We mix all aspects of digital marketing to help you grow your business";
// End Services 

///////////////////////////////////

// Start Advantage
// Initialize Variables
let advantageSection = document.createElement("section");
let advantageContainer = document.createElement("div");
let advantageRow = document.createElement("div");
let advantageImage = document.createElement("div");
let advantageImg = document.createElement("img");
let advantageText = document.createElement("div");
let advantageTextHeading = document.createElement("h2");
let advantageTextUl = document.createElement("ul");
let advantageComponent = document.createElement("h2");

// Add Classes and Styling
advantageSection.classList.add("advantage" , "py-5");
advantageSection.id = "advantage";
advantageContainer.classList.add("container");
advantageRow.classList.add("row" ,"pt-5" , "align-items-center");
advantageComponent.classList.add("fw-bold" , "text-center" , "text-secondary");
advantageImage.classList.add("col-12" , "col-sm-6" , "col-lg-6" , "mb-4");
advantageText.classList.add("col-12" , "col-sm-6" , "col-lg-6");
advantageTextHeading.classList.add("fw-bold")
advantageImg.classList.add("mw-100");

// Appending Elements
document.body.appendChild(advantageSection);
advantageSection.prepend(advantageComponent);
advantageSection.appendChild(advantageContainer);
advantageContainer.appendChild(advantageRow);
advantageRow.appendChild(advantageText);
advantageText.appendChild(advantageTextHeading);
advantageText.appendChild(advantageTextUl);
advantageRow.appendChild(advantageImage);
advantageImage.appendChild(advantageImg);

// Loops
for(let k = 0; k < 5; k++){
    let advantageTextLi = document.createElement("li");
    advantageTextUl.appendChild(advantageTextLi);
    advantageTextLi.classList.add("mb-2");
}

// Add Content
advantageImg.src = "./images/network.png";
document.getElementsByTagName("h2")[2].textContent = "WHY CHOOSE US ?";
document.getElementsByTagName("h2")[3].textContent = "Why we're different";
document.getElementsByTagName("li")[5].textContent = "Understand our clint's business goal first";
document.getElementsByTagName("li")[6].textContent = "Believe in doing business with honey";
document.getElementsByTagName("li")[7].textContent = "We deliver on time";
document.getElementsByTagName("li")[8].textContent = "We create a wining content strategy";
document.getElementsByTagName("li")[9].textContent = "We protect your online reputation";


// End Advantage

///////////////////////////////////

// Start Testimonials
// Initialize Variables
let testimonialsSection = document.createElement("section");
let testimonialsContainer = document.createElement("div");
let testimonialsRow = document.createElement("div");
let testimonialsComponent = document.createElement("h2");

// Appending Elements
document.body.appendChild(testimonialsSection)
testimonialsSection.appendChild(testimonialsContainer)
testimonialsSection.prepend(testimonialsComponent);
testimonialsContainer.appendChild(testimonialsRow);

// Loops
for(let l = 0; l < 2; l++){
    let testimonialsDiv = document.createElement("div");
    let testimonialsDivBox = document.createElement("div");
    let testimonialsDivBoxP = document.createElement("p");
    let testimonialsDivBoxDetails = document.createElement("div");
    let testimonialsDivBoxDetailsImg = document.createElement("img");
    let testimonialsDivBoxDetailsData = document.createElement("div");

    let testimonialsDivBoxDetailsName = document.createElement("p");
    let testimonialsDivBoxDetailsPosition = document.createElement("p");

    testimonialsRow.appendChild(testimonialsDiv);
    testimonialsDiv.appendChild(testimonialsDivBox);
    testimonialsDivBox.appendChild(testimonialsDivBoxP);
    testimonialsDivBox.appendChild(testimonialsDivBoxDetails);
    testimonialsDivBoxDetails.appendChild(testimonialsDivBoxDetailsImg);
    testimonialsDivBoxDetails.appendChild(testimonialsDivBoxDetailsData);
    testimonialsDivBoxDetailsData.appendChild(testimonialsDivBoxDetailsName);
    testimonialsDivBoxDetailsData.appendChild(testimonialsDivBoxDetailsPosition);

    testimonialsDiv.classList.add("col-12" , "col-sm-6" , "col-lg-6" , "mb-4");
    testimonialsDiv.style.cssText = "border-left: 4px solid #5f1782;"
    testimonialsDivBoxDetails.classList.add("d-flex" , "align-items-center")
    testimonialsDivBoxDetailsData.classList.add("ms-3")
    testimonialsDivBoxDetailsImg.classList.add("mw-100");
    testimonialsDivBoxDetailsName.classList.add("mb-1");
    testimonialsDivBoxDetailsPosition.classList.add("mb-1");

    testimonialsDivBoxDetailsImg.style.cssText = "width: 50px; heigh: 50px; border-radius: 50%;"
}

// Add Classes and Styling
testimonialsSection.classList.add("testimonials" , "py-5")
testimonialsSection.id = "testimonials";
testimonialsContainer.classList.add("container")
testimonialsComponent.classList.add("fw-bold" , "text-center" , "text-secondary");
testimonialsRow.classList.add("row" ,"pt-5");

// Add Content
document.getElementsByTagName("h2")[4].textContent = "WHAT CLIENTS SAY";
document.getElementsByTagName("p")[4].textContent = "We are a digital marketing agency in Egypt. That is both strategically and creatively motivated. We mix all aspects of digital marketing to help you grow your business";
document.getElementsByTagName("p")[5].textContent = "Angelina";
document.getElementsByTagName("p")[6].textContent = "Co-founder at xyz";

document.getElementsByTagName("p")[7].textContent = "We are a digital marketing agency in Egypt. That is both strategically and creatively motivated. We mix all aspects of digital marketing to help you grow your business";
document.getElementsByTagName("p")[8].textContent = "John Doe";
document.getElementsByTagName("p")[9].textContent = "Director at xyz";

document.getElementsByTagName("img")[7].src = "./images/user1.jpg"
document.getElementsByTagName("img")[8].src = "./images/user2.jpg"

// End Testimonials

///////////////////////////////////
// Start Social
// Initialize Variables
let iconSections = document.createElement("section");
let iconContainer = document.createElement("div");
let iconUl = document.createElement("ul");
let iconsComponent = document.createElement("h2");

// Appending Elements
document.body.appendChild(iconSections);
iconSections.appendChild(iconContainer);
iconContainer.appendChild(iconsComponent);
iconContainer.appendChild(iconUl);

// Loops
for(let u = 0; u < 6; u++){
    let iconLi = document.createElement("li");
    let iconImg = document.createElement("img");

    iconUl.appendChild(iconLi);
    iconLi.appendChild(iconImg);

    iconLi.classList.add("mx-2");
    iconImg.classList.add("mw-100");
    iconImg.style.cssText = "width: 50px;"
}

// Add Classes and Styling
iconSections.classList.add("icons" , "py-5")
iconSections.id = "icons";
iconContainer.classList.add("container")
iconsComponent.classList.add("fw-bold" , "text-center" , "text-secondary" , "mb-4");
iconUl.classList.add("d-flex" , "p-0" , "m-0" , "list-unstyled" , "w-100" , "justify-content-center");

// Add Content
document.getElementsByTagName("h2")[5].textContent = "WHAT CLIENTS SAY";
document.getElementsByTagName("img")[9].src = "./images/facebook-icon.png";
document.getElementsByTagName("img")[10].src = "./images/instagram-icon.png";
document.getElementsByTagName("img")[11].src = "./images/twitter-icon.png";
document.getElementsByTagName("img")[12].src = "./images/whatsapp-icon.png";
document.getElementsByTagName("img")[13].src = "./images/linkedin-icon.png";
document.getElementsByTagName("img")[14].src = "./images/snapchat-icon.png";

// End Social

///////////////////////////////////

// Start Footer 
// Initialize Variables
let footer = document.createElement("footer");
let footerContainer = document.createElement("div");
let footerRow = document.createElement("div");
let footerImgLogo = document.createElement("img");
let footerImgUp = document.createElement("img");
let footerP = document.createElement("p");
let footerHeading = document.createElement("h5");
let footerHeadingTwo = document.createElement("h5");
let footerEmail = document.createElement("input");
let footerButton = document.createElement("button");
let footerCopy = document.createElement("p");
let footerCopySpanOne = document.createElement("span");
let footerCopyIcon = document.createElement("i");
let footerCopySpanTwo = document.createElement("span");
let footerCopyLink = document.createElement("a");

// Appending Elements
document.body.appendChild(footer);
footer.prepend(footerImgUp);
footer.appendChild(footerContainer);
footerContainer.appendChild(footerRow);
footerContainer.appendChild(footerCopy);
footerCopy.appendChild(footerCopySpanOne);
footerCopy.appendChild(footerCopyIcon);
footerCopy.appendChild(footerCopySpanTwo);
footerCopy.appendChild(footerCopyLink);

// Loops
for(let m = 0; m < 3; m++){
    let footerDiv = document.createElement("div");
    let footerDivBox = document.createElement("div");

    footerRow.appendChild(footerDiv);
    footerDiv.appendChild(footerDivBox);

    footerDiv.classList.add("col-12" , "col-sm-4" , "col-lg-4" , "mb-4");
}

// Add Classes and Styling
footer.classList.add("footer" , "pb-3");
footer.style.cssText = "background-image: linear-gradient(to right , #a517ba , #5f1782);";
footerContainer.classList.add("container" , "pt-3");
footerRow.classList.add("row");
footerImgLogo.classList.add("mw-100");
footerImgUp.classList.add("mw-100");
footerP.classList.add("text-light" , "mt-3");
footerHeading.classList.add("text-light");
footerHeadingTwo.classList.add("text-light");
footerCopy.classList.add("text-light" , "text-center" , "pt-3" , "m-0");
footerCopy.style.cssText = "font-size: 12px; border-top: 1px solid #939393;"
footerCopyIcon.classList.add("fa-solid" , "fa-heart");
footerCopyLink.classList.add("text-light" , "text-decoration-none");
footerCopySpanOne.classList.add("me-1");
footerCopyIcon.classList.add("me-1");
footerCopySpanTwo.classList.add("me-1");
// Add Content
footerImgLogo.src = "./images/demo-logo.png";
footerImgUp.src = "./images/wave2.png";
footerCopySpanOne.textContent = "Made With";
footerCopySpanTwo.textContent = "By";
footerCopyLink.textContent = "Mohamed Abdelfattah";
footerCopyLink.href = "https://www.facebook.com/profile.php?id=100077184805922";
document.getElementsByTagName("div")[30].appendChild(footerImgLogo);
document.getElementsByTagName("div")[30].appendChild(footerP).textContent = "We are a digital marketing agency in Egypt. That is both strategically and creatively motivated. We mix all aspects of digital marketing to help you grow your business";
document.getElementsByTagName("div")[32].appendChild(footerHeading).textContent = "CONTACT US";
document.getElementsByTagName("div")[34].appendChild(footerHeadingTwo).textContent = "GET IN TOUCH";
document.getElementsByTagName("div")[34].appendChild(footerEmail).placeholder = "Your Email";
document.getElementsByTagName("div")[34].appendChild(footerEmail).classList.add("rounded" , "py-1" , "px-3");
document.getElementsByTagName("div")[34].appendChild(footerEmail).style.cssText = "outline: none; border: 1px solid #ccc;";
document.getElementsByTagName("div")[34].appendChild(footerButton).textContent = "Subscribe";
document.getElementsByTagName("div")[34].appendChild(footerButton).classList.add("rounded" , "py-1" , "px-3" , "d-block" , "text-light" , "mt-3");
document.getElementsByTagName("div")[34].appendChild(footerButton).style.cssText = "border: none; outline: none; background-image: linear-gradient(to right , #a517ba , #5f1782);";


for(let x = 0; x < 3; x++){
    let footerIconDiv = document.createElement("div");
    let footerIconDivIcon = document.createElement("i");
    let footerIconDivSpan = document.createElement("span");

    document.getElementsByTagName("div")[32].appendChild(footerIconDiv);
    footerIconDiv.appendChild(footerIconDivIcon);
    footerIconDiv.appendChild(footerIconDivSpan);

    footerIconDiv.classList.add("d-flex" , "align-items-center" , "mt-4");
    footerIconDivIcon.classList.add("d-flex" , "justify-content-center" , "align-items-center" , "me-2");
    footerIconDivIcon.style.cssText = "background-image: linear-gradient(to right , #a517ba , #5f1782); width: 30px; height: 30px;";
    footerIconDivSpan.classList.add("text-light");
}
document.getElementsByTagName("i")[1].classList.add("fa-solid" , "fa-location-dot" , "text-light" , "rounded")
document.getElementsByTagName("i")[2].classList.add("fa-solid" , "fa-phone" , "text-light" , "rounded")
document.getElementsByTagName("i")[3].classList.add("fa-regular" , "fa-envelope" , "text-light" , "rounded")

document.getElementsByTagName("span")[0].textContent = "Cairo , Egypt";
document.getElementsByTagName("span")[1].textContent = "+201157130586";
document.getElementsByTagName("span")[2].textContent = "moabdelfattah221@gmail.com";

// End Footer 
