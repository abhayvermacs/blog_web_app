import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

const homeContent = "Embark on a transformative journey towards inner peace and well-being with our latest blog series on mindfulness. Dive into the essence of mindfulness practice as we explore its profound benefits for mental health, stress reduction, and overall quality of life. In our comprehensive series, discover practical tips and techniques to integrate mindfulness into your daily routine, from simple breathing exercises to mindful eating and beyond. Learn how to cultivate a greater sense of awareness and presence in each moment, fostering a deeper connection with yourself and the world around you. Explore expert insights and personal anecdotes that illuminate the transformative potential of mindfulness, empowering you to navigate life's challenges with greater resilience and clarity. Whether you're a seasoned practitioner or new to the concept, our blog offers valuable resources and inspiration to support you on your journey to greater well-being. Join us as we embark on this empowering exploration of mindfulness, unlocking the keys to a more balanced, joyful, and fulfilling life.";
const aboutContent = "At Blog Daily, we're dedicated to providing a haven for seekers of knowledge, inspiration, and personal growth. Our platform is a digital sanctuary where you can explore a diverse range of topics, from mindfulness and well-being to creativity, technology, and beyond. Our mission is simple: to empower individuals like you to lead happier, healthier, and more fulfilling lives. Through thought-provoking articles, expert insights, and engaging stories, we aim to spark curiosity, ignite passions, and foster meaningful connections within our community. Whether you're seeking practical tips for daily living, thought-provoking perspectives on current events, or simply a moment of inspiration, you'll find it here at [Blog Name]. Join us on this enriching journey of discovery and transformation. Together, let's explore the boundless possibilities of the human experience.";
const contactContent = "We're thrilled to connect with our readers and welcome your feedback, questions, and ideas. Your input drives the heartbeat of our community, and we're committed to fostering open communication. Reach out to us via email, social media, or our convenient contact form below. Whether you have a burning question, a suggestion for a future blog post, or simply want to share your thoughts, we're all ears. Let's embark on this journey together, building a vibrant, supportive community where every voice matters. Get in touch today and let's create something extraordinary!"

const title = ["Unveiling the Enigma of Zebras: Nature's Striped Marvels"];
const content = ["In the vast savannas of Africa, amidst the golden grasslands and acacia trees, roams one of nature's most iconic creatures: the zebra. With their striking black and white stripes, zebras captivate the imagination and intrigue scientists and wildlife enthusiasts alike. But beyond their visually stunning appearance lies a fascinating tale of survival, social dynamics, and evolutionary marvels."];

app.get("/", (req, res) => {
    res.render("home.ejs", {
        hcontent : homeContent
    });
});

app.get("/home", (req, res) => {
    res.render("home.ejs", {
        hcontent : homeContent
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs", {
        acontent : aboutContent
    });
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs", {
        ccontent : contactContent
    });
});

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs", {
        heading : title,
        blog : content
    });
});

app.get("/compose", (req, res) => {
    res.render("compose.ejs");
});

app.get("/delete", (req, res) => {
    res.render("delete.ejs");
})

app.post("/submit", (req, res) => {
    if(!title.includes(req.body["title"])){
        title.push(req.body["title"]);
        content.push(req.body["content"]);
    }
    res.render("compose.ejs");
});

app.post("/del", (req, res) => {
    for(let i = 0; i<title.length; i++){
        if(req.body["title"] === title[i]){
            title.splice(i, 1);
        };
    };
    res.render("delete.ejs");
})

app.get("/update", (req, res) => {
    res.render("update.ejs");
});


app.post("/up", (req, res) => {
    for(let i = 0; i<title.length; i++){
        if(req.body["title"] === title[i]){
            content[i] = req.body["content"];
        };
    };
    res.send("Updated Succesfully");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});


