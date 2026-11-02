const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Resume information (edit this section to update your website)
const resume = {
  name: "Pankaj Priyanshu",
  initials: "PP",
  email: "ppriyanshu015@gmail.com",
  phone: "+91 7905775991",
  location: "Varanasi, India",
  role: "Software Application Development Student",
  summary: "Motivated software application development student with a strong foundation in C, C++, Python, HTML, CSS, and R. Currently pursuing an M.Voc in Software Application Development at Cochin University of Science and Technology. Passionate about mobile application development using Flutter and eager to contribute to innovative software projects while continuously improving technical skills.",
  education: [
    {
      degree: "Master of Vocation",
      subject: "Software Application Development",
      institution: "Cochin University of Science and Technology",
      period: "Expected 2028",
      result: "Currently pursuing"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      subject: "",
      institution: "Amity University",
      period: "2020 – 2023",
      result: "CGPA: 7.54"
    }
  ],
  technicalSkills: ["C", "C++", "Python", "HTML", "CSS", "R"],
  softSkills: ["Problem Solving", "Teamwork", "Communication", "Time Management", "Analytical Thinking"],
  interests: ["Reading", "Writing", "Solving coding problems", "Reading technology blogs", "Learning new programming languages"],
  languages: ["English", "Hindi"],
  interestsNote: "Mobile application development using Flutter"
};

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: `${resume.name} | Personal Portfolio`,
    resume
  });
});

// Friendly fallback for unknown routes
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", resume });
});

app.listen(PORT, () => {
  console.log(`Resume website running at http://localhost:${PORT}`);
});