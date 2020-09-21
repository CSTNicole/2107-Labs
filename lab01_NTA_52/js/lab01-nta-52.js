//declare element
const projectTitle = React.createElement("h1", null, "E-Commerce App");

const projDespTitle = React.createElement("h3", null, "Project Description");
const projectDescription = React.createElement("p", null, "This will be a small application where I will be selling self-made crochet patterns. There will be a shopping cart where user can buy items of their choice. There will also be a check-out page where the user can pay for the products they chose.");

const projFeaturesTitle = React.createElement("h3", null, "Project Features");
const projectFeatures = ["Javascript", "NoSQL Databases", "Cloud Services", "Web Server Management", "Secure Data Communication with Server", "Using API", "ReactApp for displaying products", "Stripe for handling payment processes", "Algolia for fast searches", "Snipcart for managing cart products", "Push Notifcations", "Ratings and Reviews", "Feedback System", "Proper Customization", "Registration Process"];

//child
const featuresList = React.createElement("ol", {key: "featuresList"}, projectFeatures.map((feature, i) => React.createElement("li", {key: i}, feature)));

const addTechTitle = React.createElement("h3", null, "Additional Technology");
const addTechnology = React.createElement("p", null, "AWS Amplify: I read about it online. I think it will be intersting to learn because it will be easier to create custom flows and develop voice-enabled features.")

const referencesTitle = React.createElement("h3", null, "References");
const references = [href = "https://www.freecodecamp.org/news/5-react-projects-you-need-in-your-portfolio/", "https://www.redbytes.in/ecommerce-mobile-app-features-list/", "https://docs.amplify.aws/"];

//child
//const referenceList = React.createElement("ul", {key: "referenceList"},
//references.map((ref, i) => React.createElement("li", {key: i}, ref))); 


const dataToRender = [projectTitle, projDespTitle, projectDescription, projFeaturesTitle, featuresList, addTechTitle, addTechnology, referencesTitle]

//add the element ^ to the DOM (Doc Obj Model)
//ReactDOM.render([projectTitle, projDespTitle, projectDescription, projFeaturesTitle, projectFeatures, addTechTitle, addTechnology], document.getElementById("root"));

ReactDOM.render(dataToRender, document.getElementById("root"));
