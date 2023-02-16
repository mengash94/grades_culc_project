const express = require("express");
const app = express();
const path = require("path")
const port = 3000;
// set the ejs view, path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,'static_files')));
app.use(express.urlencoded({ extended: true }));
// set viriables to for to save all input
let subjects = [];

app.get("/", (req, res) => {
  res.render("index", { subjects });
});
 // add method
app.post("/add-subject", (req, res) => {
  let subject = {
    name: req.body.name,
    grade: req.body.grade,
    units:req.body.units
  };
  subjects.push(subject);
  res.redirect("/");
});
// return to main pages to add more subjects
app.post("/add-more", (req, res) => {
  res.redirect("/");
});

// calculator all gardes and send the avg and subject to result
app.post("/calculator", (req, res) => {
  let total = 0
  console.log("total",total)
  for(let subject of subjects){
    if (subject.units == 5){
      total = total+ (parseFloat(subject.grade)+25) ;
    
    }else if(subject.units == 4){
      total = total+ (parseFloat(subject.grade)+15) ;
    }
    else {
      total = total+ (parseFloat(subject.grade)) ;
    }
    
  }
  avg = total/subjects.length ;

  res.render("result",{ subjects:subjects,avg:avg })
});

// do new calculator nethod

app.post("/new-calculator", (req, res) => {
  subjects = [];
  res.redirect("/");
});

// set listen  local port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

