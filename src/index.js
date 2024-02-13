import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Name />
        <Info />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="profile.jpg" alt="Abeer" className="avatar" />;
}
function Name() {
  return <h1>Muhammad Abeer</h1>;
}
function Info() {
  return (
    <p>
      Hey, I'm M Abeer, currently in my 6th semester doing BS CS. I'm all about
      creating fantastic websites,mobile apps, and at the moment, I'm working on
      Food Delivery App project. When I'm not in class or coding, you'll catch
      me watching tech videos to stay in the loop.
    </p>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((data) => {
        return (
          <Skill
            skill={data.skill}
            color={data.color}
            level={data.level}
            key={data.skill}
          />
        );
      })}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "beginner" ? "👶" : null}</span>
      <span>{level === "intermediate" ? "👍" : null}</span>
      <span>{level === "advanced" ? "💪" : null}</span>
    </div>
  );
}
//React v-18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
// React.render(<App />);
