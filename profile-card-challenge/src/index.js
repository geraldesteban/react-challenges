import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";

const skillsData = [
  {
    skill: "React + Tailwind CSS",
    level: "Beginner",
    color: "blue",
  },
  {
    skill: "MongoDB + Mongoose",
    level: "Advanced",
    color: "red",
  },
  {
    skill: "Node.js + Express",
    level: "Advanced",
    color: "yellow",
  },
  {
    skill: "MERN Stack with Tailwind CSS",
    level: "Advanced",
    color: "orange",
  },
  {
    skill: "Web Developer",
    level: "Advanced",
    color: "skyblue",
  },
  {
    skill: "Full-Stack Web Developer",
    level: "Intermediate",
    color: "green",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="image/geraldProfile.png"
      className="profile"
      alt="Gerald C. Esteban"
    />
  );
}

function Intro() {
  return (
    <div className="intro">
      <h2 className="intro-name">Gerald C. Esteban</h2>
      <p className="intro-bio">
        MERN Stack with Tailwind CSS web developer in Tarlac State University.
        When not coding, I like to exercise in home, to ride motorcycle, or to
        play online games.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <ul className="skillList">
      {/* Challenge 1 
      <Skill skill="React + Tailwind CSS 💪" color="blue" />
      <Skill skill="MongoDB + Mongoose 💪" color="red" />
      <Skill skill="Node.js + Express 💪" color="yellow" />
      <Skill skill="MERN Stack with Tailwind CSS 💪" color="orange" />
      <Skill skill="Web Developer 💪" color="skyblue" />
      <Skill skill="Full-Stack Web Developer 💪" color="green" />
       */}
      {/* Challenge 2 */}
      {skillsData.map((skillLists, index) => (
        <Skill
          key={index}
          skill={skillLists.skill}
          level={
            skillLists.level === "Beginner"
              ? "👶🏻"
              : skillLists.level === "Intermediate"
              ? "👍"
              : "💪"
          }
          color={skillLists.color}
        />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <li className="skillStyle" style={{ backgroundColor: color }}>
      {skill} {level}
    </li>
  );
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
