import React from "react";
import "./interviews.css";
import Banner from "./banner.svg";
import Andres_Interview from "./Andres.mp3";
import Dumebi_Interview from "./Dumebi.mp3";
import Andres_headshot from "./andres_headshot.svg";
import Dumebi_headshot from "./dumebi_headshot.svg";
import Mary_Interview from "./Mary.mp3";
import Mary_headshot from "./Mary.jpg";
import Peyton_Interview from "./Peyton.mp3";
import Peyton_headshot from "./Peyton.jpeg";
import V_Interview from "./V.mp3";
import V_headshot from "./V.jpeg";
import Zayana_Interview from "./Zayana.mp3";
import Zayana_headshot from "./Zayana.jpeg";
import Internship_Panel from "./Internship_Panel.mp3";
import Externship_Panel from "./Externship_Panel.mp3";
import Elena_Interview from "./Elena.mp3";
import Elena_headshot from "./Elena.jpeg";

type details = {
  name: string;
  headshot: string;
  interview: string;
  description: string;
  timestamps: { [key: string]: string };
};

const Interview_details: { [key: string]: details } = {
  0: {
    name: "Amazon with Andres",
    headshot: Andres_headshot,
    interview: Andres_Interview,
    description:
      "Hear about a student's experience interning at Amazon during the height of COVID-19 as well as some tips he has for freshmen looking for internships!",
    timestamps: {
      "00:27": "Amazon",
      "00:21": "Application process",
      "09:33": "Interview tips and behavioral interview",
      "25:15": "Housing",
      "26:57": "Advice on applying to and looking for internships",
    },
  },
  1: {
    name: "CSMore with Dumebi",
    headshot: Dumebi_headshot,
    interview: Dumebi_Interview,
    description:
      "Hear about a student's experience at the CSMore program offered by Cornell. Also, get to hear about how he found his academic interests and how he transferred it to a professional interests as well!",
    timestamps: {
      "00:20": "Introduction",
      "01:21": "CSMore program",
      "08:20": "Skills learned and advice",
      "12:30": "How this experience helped him with his major/career path",
      "21:46": "More advice",
    },
  },
  2: {
    name: "Mary",
    headshot: Mary_headshot,
    interview: Mary_Interview,
    description: "",
    timestamps: {},
  },
  3: {
    name: "Peyton",
    headshot: Peyton_headshot,
    interview: Peyton_Interview,
    description: "",
    timestamps: {},
  },
  4: {
    name: "V",
    headshot: V_headshot,
    interview: V_Interview,
    description: "",
    timestamps: {},
  },
  5: {
    name: "Zayana",
    headshot: Zayana_headshot,
    interview: Zayana_Interview,
    description: "",
    timestamps: {},
  },
  6: {
    name: "Elena",
    headshot: Elena_headshot,
    interview: Elena_Interview,
    description: "",
    timestamps: {},
  },
  7: {
    name: "Internship Panel",
    headshot: "",
    interview: Internship_Panel,
    description: "",
    timestamps: {},
  },
  8: {
    name: "Externship Panel",
    headshot: "",
    interview: Externship_Panel,
    description: "",
    timestamps: {},
  },
};

const Interviews: React.FC = () => {
  const renderInterviews = () => {
    return Object.keys(Interview_details).map((key) => {
      return (
        <div className="interview">
          <div className="interview-header">
            <h2>{Interview_details[key].name}</h2>
          </div>
          <div className="interview-display-box">
            <div className="playbox">
              <div className="interview-image">
                <img
                  className="headshot"
                  src={Interview_details[key].headshot}
                  alt="headshot"
                />
              </div>
              <audio
                className="audio-controls"
                controls
                src={Interview_details[key].interview}
              />
            </div>
            <div className="interview-media-box">
              <p className="interview-description">
                {Interview_details[key].description}
              </p>
              <div className="interview-timestamps">
                <h3>Timestamps</h3>
                <ul>
                  {Object.keys(Interview_details[key].timestamps).map(
                    (time) => {
                      return (
                        <li>
                          {time}- {Interview_details[key].timestamps[time]}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="interviews">
      <div className="banner">
        <img className="banner" src={Banner} alt="banner" />
      </div>
      <h1>Interviews</h1>
      <div className="interviews-container">{renderInterviews()}</div>
    </div>
  );
};

export default Interviews;
