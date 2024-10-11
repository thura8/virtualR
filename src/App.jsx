import React from "react";
import {
  NavBar,
  Hero,
  Features,
  WorkFlow,
  Pricing,
  Testimonials,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <>
      <NavBar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
