import React, { useState } from "react";
import "./styles.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navigation from "./Navigation";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <div className="home">
              <h2>Welcome to my Portfolio</h2>
              <p>
                I'm Digvijay Singh, an enthusiastic professional, and I'm currently available to explore exciting projects and collaborations. I'm always ready to network and connect with like-minded individuals. Please feel free to get in touch with me!
              </p>
            </div>
            <div className="additional-section">
              <h2>Welcome to the Technology Section of my Portfolio</h2>
              <p>Greetings, visitors! I extend a warm welcome to the Technology section of my portfolio.
               Here, you will gain valuable insights into my extensive involvement in the world of technology 
               and the opportunity to explore a carefully curated collection of projects I've undertaken thus far.
               As a dedicated tech enthusiast and professional, I am thrilled to share my journey, experiences,
                and accomplishments in this dynamic field. Whether you're an industry peer seeking inspiration or 
                a potential collaborator interested in my work, you'll discover valuable insights within these digital pages.</p>
            </div>
            <div>
            <a class="follow-button" href="https://github.com/Digvijay2347" target="_blank">Follow me on Github</a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="App">
      <Navigation setPage={setPage} />
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
