import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import AddHall from "../forms/addHall";
import { Routes, Route } from "react-router-dom";
import AddConferenceForm from "../forms/hallBooking";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow relative z-0">
        <Routes>
          <Route path="/addHall" element={<AddHall />} />
          <Route path="/book" element={<AddConferenceForm />} />
          {/* Add other routes as needed */}
        </Routes>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
