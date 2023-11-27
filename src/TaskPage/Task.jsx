import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Top from "./TaskComponents/Top";
import Mytask from "./TaskComponents/Mytask";

function Task() {
  return (
    <div className="bg-yellow-200">
      <Header />
      <Top />
      <Mytask />
      <Footer />
    </div>
  );
}

export default Task;
