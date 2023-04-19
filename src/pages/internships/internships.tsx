import React, { useState, useEffect } from "react";
import "./internships.css";
import expand_icon from "./expand-icon-default.svg";
import expand_icon_expanded from "./expand-icon-expanded.svg";

type InternshipInfo = {
  company: string;
  role: string;
  location: string;
  date: string;
  salary: string;
  source: string;
  application_process: string;
  typical_day: string;
  skills: string;
  work_environment: string;
  best_experience: string;
  recommendations: string;
  housing: string;
  housing_review: string;
};

type InternshipInfoList = { [key: string]: InternshipInfo };

const internshipInfos: InternshipInfoList = {
  0: {
    company: "Bank of America",
    role: "Global Tech Analysy",
    location: "Charlotte, NC",
    date: "",
    salary: "> $9,000",
    source: "LinkedIn",
    application_process:
      "This student learned of the internship through the Bank Of America Early Insights Program. The student participated in a forum and then final round interviews. There was a technical round for interviews as well. Quotes from student:  “The technical rounds were not difficult - asked about time complexity and simple OOP questions.” “They wanted female interns, so the process was relatively easy in all honesty.”",
    typical_day: "",
    skills:
      "This student knew Object-Oriented Programming and Java and BofA is all in Java.",
    work_environment: "",
    best_experience: "",
    recommendations: "",
    housing:
      "My dad reached out to some colleagues in the area and they helped me.",
    housing_review: "",
  },
  1: {
    company: "Google",
    role: "Software Engineering Intern",
    location: "remote",
    date: "",
    salary: "> $9,000",
    source:
      "I had previously applied to something at Google, so a recruiter reached out to me the summer before to let me know that internships would be opening up.",
    application_process:
      "Pretty standard-submit resume, coding challenge, and then 3, 45-minute technical interviews.",
    typical_day:
      "9-5, one full-team meeting from 11-11:30. Then meeting with my intern “host” 2-3x per week as well. Most of the rest of the day spent reading documentation (this was a lot more of my time than I expected beforehand) and then rest of the time writing code. Lots of asking for help from my host and learning new tools by reading docs.",
    skills:
      "I was able to code at the level of a standard Cornell CS junior, and knew stuff about data structures, testing, etc. Learned a new programming language on the job (Go), stuff about testing in industry, CI/CD, and about cloud technologies on the whole!",
    work_environment:
      "Very supportive/not too stressful at all, no pressure to work long hours. Expectation that you are not an expert, but will take the time to learn new tools and skills. For example, my entire project was in a programming language I had never written before, but I learned quickly.",
    best_experience:
      "Doing a final project (creating a command-line interface for ML testing for the PhDs on my team), and presenting to the team.",
    recommendations:
      "If you want a SWE role/want to be in technology and are not sure what role you want, I would say to apply! You will learn a lot and be around people who love technology and are great at building it.",
    housing: "Through a family friend connection.",
    housing_review:
      "Though it was remote, I lived with some friends in NYC. Was super fun to be with them and be in a new city!",
  },
  2: {
    company: "IBM",
    role: "Data Science Intern",
    location: "Remote",
    date: "",
    salary: "> $9,000",
    source: "Networking",
    application_process:
      "I was referred, then filled out an online application and had an interview where I talked through my previous projects and answered behavioral questions.",
    typical_day:
      "I'd work on my project or learn a skill via the free courses provided in the morning and then after lunch would attend team meetings, intern events (guest speakers, get to know other interns, etc.), and would meet with mentors to update my progress and ask for advice if there were any blockers.",
    skills: "",
    work_environment:
      "Very supportive & collaborative, helped me shape the internship experience based on what I wanted to learn.",
    best_experience:
      "Intern Hackathon – I did a three day hackathon with a group of 4 other interns to try and develop a product that would help reduce food insecurity, my team was featured on the intern podcast that week!",
    recommendations: "",
    housing: "",
    housing_review: "",
  },
  3: {
    company: "Mirador LLC",
    role: "Summer Analyst",
    location: "Darien, CT",
    date: "",
    salary: "> $9,000",
    source: "Networking",
    application_process:
      "Use LinkedIn to network and find internships for freshman summer, even if there is not a formal internship posted you may be able to get a position through networking!",
    typical_day:
      "Arrive 8:30 am, meet with my manager, work until lunch, eat lunch with the other interns, finish projects for the day in the afternoon, leave 5:30pm.",
    skills:
      "I had some Excel skills prior but I gained a lot more proficiency in Excel and also learned a lot about professional communication in an office environment.",
    work_environment: "It was a startup environment and a small company.",
    best_experience:
      "I enjoyed eating lunch every day with the other interns and my manager.",
    recommendations:
      "Someone who is entrepreneurial and enjoys taking initiative would fit well into this role because in a startup environment it is especially important to be able to take on responsibility and autonomy with tasks.",
    housing: "I lived at home.",
    housing_review: "I enjoyed saving money living at home!",
  },
  4: {
    company: "Mote Marine Laboratory and Aquarium",
    role: "Research Intern (Ecotoxicology Department)",
    location: "Sarasota, FL",
    date: "",
    salary: "5,000 - $9,000",
    source:
      "I interned with The Nature Conservancy in high school and their college programs managers sent us emails with internship opportunities.",
    application_process:
      "I believe you needed a resume, cover letter, and one letter of recommendation. Be sure to look into what research topic your mentors are currently working on and whether you find it interesting. If you have more time, I would recommend reading their past papers, and specifically, focus on the Methods section as it may describe in detail what experiments and trials you may work on during your summer there.",
    typical_day:
      "I was responsible for taking care of the butterflyfish wet lab. Every morning I checked on the fish, recorded physical parameters of the water, fed them, and then cleaned their tanks. I do the same thing in the afternoon. On some days, I also got to help the other interns in my department on their projects. Towards the end of my summer, my days consisted more of running experiments with the fish, analyzing data, and working on my poster.",
    skills:
      "I definitely learned several lab techniques skills ranging from equipment use, wet lab maintenance, and even how to handle two parasitic outbreak. Learning how to read and understand marine biology research is also a skill that you will work on as you draft up the writing for your poster. In preparation for my poster presentation, I also practiced presenting in front of my friends and asked for feedback on how to make my work easier to understand.",
    work_environment:
      "It was great! I developed a great relationship with my mentors. All the staff were very friendly to interns and answered all of my questions. You also bond with your intern cohort really well because you all live together in the same apartment complex.",
    best_experience:
      "Work-wise, I think the best feeling I had was when my data supported past feeding observations that coral-feeding butterflyfish preferred a certain genus of corals. It was one of those aha! moments. Besides that, I think the best experience was getting to hang out with your fellow interns, cooking together, and going to the beach with them almost every weekend.",
    recommendations:
      "As long as you’re interested in marine science and conservation, I think you’ll be a great fit! My department was more lab-focused, but I know other departments work differently. My roommate worked in Stranding Investigations so their team respond to calls for marine animal rescue. Almost every night he would show me pictures he took of manatees and sea turtles. I know other friends who did more fieldwork or coding, so I think contacting mentors and asking what work they have planned for interns is the best way to find something that suits you.",
    housing: "The internship program provides housing.",
    housing_review:
      "Really awesome. The apartment is very new and comes furnished. You are super close to the farmers market on the weekends. Sarasota is a beach city so I went to the beach almost every weekend. The only issue is that you do need to drive everywhere, including to work everyday, and the public transportation isn't that good in Sarasota. However, it's not really a problem because your intern friends will have cars and you all live in the same building so it's super convenient to carpool.",
  },
};

const Internships: React.FC = () => {
  const [displayInternships, setDisplayInternships] = useState([]);

  const SearchBar = () => {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for internships..."
          className="search-input"
        />
      </div>
    );
  };

  const InternshipToggleCard = (props: {
    info: InternshipInfo;
    bgColor: number;
    index: string;
  }) => {
    const { info, bgColor, index } = props;
    const bgCol = bgColor === 1 ? "#F5F5F5" : "#FFFFFF";
    const [expanded, setExpanded] = useState(false);
    const [expandIcon, setExpandIcon] = useState(expand_icon);

    useEffect(() => {
      if (expanded) {
        setExpandIcon(expand_icon_expanded);
      } else {
        setExpandIcon(expand_icon);
      }
    }, [expanded]);

    return (
      <div
        className="internship-toggle-card"
        style={{ backgroundColor: bgCol }}
      >
        <div className="small">
          <div
            className="expand-icon"
            onClick={() => {
              console.log("clicked");
              console.log(expanded);
              setExpanded(!expanded);
            }}
          >
            <img src={expandIcon} alt="expand-icon" />
          </div>
          <div className="company">
            <h3>{info.company}</h3>
            <p>
              {info.location} {info.date !== "" ? "- " + info.date : ""}
            </p>
          </div>
          <div className="role">
            <h3>{info.role}</h3>
          </div>
          <div className="salary">
            <h3>{info.salary}</h3>
          </div>
        </div>
        <div
          className="large"
          id={props.index}
          style={expanded ? { display: "block" } : { display: "none" }}
        >
          <p>Rest of the info</p>
        </div>
      </div>
    );
  };

  const InternshipTable = () => {
    return Object.keys(internshipInfos).map((key) => {
      return (
        <InternshipToggleCard
          info={internshipInfos[key]}
          bgColor={parseInt(key) % 2}
          index={key}
        />
      );
    });
  };

  return (
    <div className="internships">
      <SearchBar />
      <div className="internship-table-header">
        <div className="company">
          <h3>Company</h3>
        </div>
        <div className="role">
          <h3>Role</h3>
        </div>
        <div className="salary">
          <h3>Salary</h3>
        </div>
      </div>
      <div className="internship-table">{InternshipTable()}</div>
    </div>
  );
};

export default Internships;
