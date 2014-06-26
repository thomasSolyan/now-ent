var express = require('express'),
    router = express.Router();


/* GET Index page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'ec-microsite' })
});

var datas = [{
  "title" : "Career Development for Millennials: the NowEnterprise for the Next Generation", 
  "pubDate" : "Wed, 02 Apr 2014 21:02:40 +0000", 
  "creator" : "Mike Davidson", 
  "imageLocation" : "http://blog.tahoepartners.com/wp-content/uploads/2014/04/Crowded-Escalator.jpg", 
  "displayTitle" : "get ready for the millennials"
},
{
  "title" : "The Future of the Knowledge Worker is the NowEnterprise",
  "displayTitle" : "future of the knowledge worker",
  "pubDate" : "Mon, 17 Mar 2014 21:15:43 +0000",
  "creator" : "David Sidwell",
  "imageLocation" : "http://blog.tahoepartners.com/wp-content/uploads/2014/03/Hands-with-Digial-Tablet-Stylus.jpg"
},
{
  "title" : "Goodbye Intranet. Say Hello to the NowEnterprise",
  "displayTitle" : "goodbye intranet, hello to the nowentreprise",
  "pubDate" : "Mon, 13 Jan 2014 21:17:36 +0000",
  "creator" : "Ralph Keipert",
  "imageLocation" : "http://blog.tahoepartners.com/wp-content/uploads/2014/01/Coffee-Cup.jpg"
},
{
  "title" : "Enterprise Collaboration Obstacles: Breaking Down Organizational Silos",
  "displayTitle" : "collaboration obstacles",
  "pubDate" : "Wed, 26 Jun 2013 20:08:19 +0000",
  "creator" : "Ralph Keipert",
  "imageLocation" : "http://blog.tahoepartners.com/wp-content/uploads/2013/09/Silos.jpg"
},
{
  "title" : "Enterprise Collaboration Strategy and Roadmap",
  "displayTitle" : "Enterprise Collaboration Strategy & Roadmap",
  "pubDate" : "Mon, 17 Jun 2013 19:50:00 +0000",
  "creator" : "David Sidwell",
  "imageLocation" : "http://blog.tahoepartners.com/wp-content/uploads/2013/09/Brainstorm-Session.jpg"
},
{
  "title" : "Enterprise Collaboration: User Experience and Change Resilient Design",
  "displayTitle" : "Collaboration: User Experience and Change Resilient Design",
  "pubDate" : "Wed, 09 Oct 2013 15:01:24 +0000",
  "creator" : "Mike Davidson",
  "imageLocation" : "http://blog.tahoepartners.com/wp-content/uploads/2013/10/Change.jpg"
},
{
  "name" : "Reyes Holdings",
  "copy" : "Here's an origin story for you: what started as a simple request for document management evolved into a roadmap for the next three years.",
  "imageUrl" : "images/work/1.jpg"
},
{
  "name" : "Huron Consulting",
  "copy" : "What does an award-winning intranet look like? Like increasing usage by 86% and tripling the number of content contributors.",
  "imageUrl" : "images/work/1.jpg"
},
{
  "name" : "Hollister",
  "copy" : "Where does an Enterprise Collaboration roadmap take you? At Hollister, all over the world.",
  "imageUrl" : "images/work/1.jpg"
},
{
  "name" : "Navistar",
  "copy" : "Finding thousands of untapped employee ideas - and uncovering 5.3MM in savings. That's pretty heroic.",
  "imageUrl" : "images/work/1.jpg"
},
{
  "ddLinks" : [ "one", "two", "three", "seperate link" ],
  "mainLinks" : [ "home", "challenge", "solution", "portfolio", "get started" ],
  "el" : "#"
},
{
  "mainCopy" : "SHAREPOINT, A HERO’S TALE",
  "secondaryCopy" : "Are you ready to go from scapegoat to hero?"
},
{
  "linkName" : [ "problem", "implication", "trends", "answer", "benefits", "how", "what" ],
  "el" : "#"
},
{
  "images" : [
    { "id_" : "problem_1","imageUrl" : "images/chart.png" },
    { "id_" : "implication_1", "imageUrl" : "images/about/2.jpg" },
    { "id_" : "trends_1", "imageUrl" : "images/about/3.jpg" },
    { "id_" : "answer_1", "copy": "”... it became apparent that we needed to construct a strategy before we started talking about long-term funding much less executing anything.“" },
    { "id_" : "benefits_1", "imageUrl" : "images/services/chart1.png" },
    { "id_" : "how_1", "imageUrl" : "images/services/chart2.png" },
    { "id_" : "what_1", "imageUrl" : "images/services/chart3.png" },
  ]
},
{
  "data" : [
    {
      "id_" : "problem_2",
      "h2" : "problem",
      "h4" : "There’s no doubt about it - you’re not alone;",
      "h4br" : "implementing SharePoint can be challenging.",
      "para1" : "A 2013 Industry Watch Report from AIIM found that 61% of SharePoint ECM projects had stalled or did not meet expectations.",
      "heavy" : "And, as an IT leader, you’ve heard the complaints..."
    },
    {
      "id_" : "implication_2",
      "h2" : "implication",
      "h4" : "Even after you get SharePoint live, users still aren’t happy.",
      "para1" : "“SharePoint isn’t easy to use.”",
      "para1br" : "“I can’t find what I’m looking for.”",
      "para1br1" : "“It dosen’t make me more productive. It actually makes my job harder.”",
      "para1br2" : "“I’d rather walk on hot coals... (well maybe not yet)”",
      "para2":"And then your team weighs in, “This is a mess. I can’t support it.”",
      "heavy" : "And there is the future to consider..."
    },
    {
      "id_" : "trends_2",
      "h2" : "trends",
      "h4" : "Future trends compound the challenges.",
      "para1" : "Millennials will soon make up 75% of the workforce.",
      "para1br" : "Tablets are outselling PC’s and smart phones are ubiquitous.",
      "para1br1" : "Social technology has changed the way people interact.",
      "heavy" : "Becoming the hero seems as though it will only get harder.",
      "heavy2" : "So, where can you go from here?"
    },
    {
      "id_" : "answer_2",
      "h2" : "answer",
      "h4" : "Can you go from SharePoint scapegoat to hero and save the day? Yes you can.",
      "para1" : "The answer starts with an Enterprise Collaboration Roadmap.",
      "para2" : "Galvanize your organization around a common set of priorities and set a course for high adoption. It’s amazing what buy-in and alignment can do",
      "heavrUrl": "http://blog.tahoepartners.com/index.php/enterprise-collaboration-strategy-ready-fire-aim/",
      "heavy" : "READ HOW ONE CLIENT DID IT"
    },
    {
      "id_" : "benefits_2",
      "h2" : "answer",
      "h4" : "Being a hero is always better than being the scapegoat.",
      "para1" : "When you plan ahead and start SharePoint projects from an enterprise collaboration roadmap, adoption increases through applied consistency, appropriate information access, and an architecture with speedy response times.",
      "heavy" : "And it deesn’t take much to get started..."
    },
    {
      "id_" : "how_2",
      "h2" : "how it works",
      "h4" : "Start with where you are.",
      "para1" : "The process of developing a roadmap means taking stock of your current state – your sites, tools, infrastructure, and processes, leveraging best practices and our experience to help define your vision for the future, and prioritizing the initiatives required to move forward."
    },
    {
      "id_" : "what_2",
      "h2" : "what it covers",
      "h4" : "Turn Roadblocks into Building Blocks",
      "para1" : "Your roadmap creates a clear path to the future vision for your SharePoint strategy. With solutions defined for each component, along with steps to achieve each goal, you will have the background to guide your organization in taking the right steps at the right time in the journey. And to become a SharePoint hero!"
    }
  ]
}];





/* GET IT page. */
router.get('/it-test', function(req, res) {
  var db = req.db,
      collection = db.get('ecMicro');
  collection.find({},{},function(e, docs){
    res.render('it-dev', {
      title: 'ec-microsite',
      ecData : docs
    });
  });

});

/* GET Index page. */
router.get('/it-dev', function(req, res) {
    res.render('it-dev', {
      title: 'ec-microsite',
      ecData : datas
    });
});

module.exports = router;

