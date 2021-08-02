import React from "react";
import Home from './components/Home/home';
import Posts from './components/Posts/posts';
import About from './components/AboutSection/About';




function App() {
  return (
    <div className="d-auto">
      <Home />
      <Posts />
      <About />
    </div>
  );
}

export default App;
