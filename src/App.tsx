import React from "react";
import Navbar from "./components/navbar/nav";
import Index from "./pages/index/index";
import Internships from "./pages/internships/internships";
import Interviews from "./pages/interviews/interviews";
import Contact from "./pages/contact/contact";
import "./App.css";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Index />;
      break;
    case "/internships":
      component = <Internships />;
      break;
    case "/interviews":
      component = <Interviews />;
      break;
    case "/contact":
      component = <Contact />;
      break;
  }
  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
