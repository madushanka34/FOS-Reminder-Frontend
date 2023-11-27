import React from "react";
import Examshedule from "./Sections/Examshedule";
import MyTable from "./Sections/Table";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";

function Page() {
  return (
    <div className="bg-gradient-to-t from-yellow-400 to-yellow-200">
      <Dashboard/>
      <Examshedule />
      <MyTable />
      <Footer />
    </div>
  );
}

export default Page;
