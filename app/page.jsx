"use client"; 

import { useState } from "react";
import Navbar from "../components/Navbar";
import FlightSearchForm from "../components/FlightSearchForm";
import FlightResults from "../components/FlightResults";

const Home = () => {
  const [flights, setFlights] = useState([]);

  const handleSearch = async (origin, destination, date) => {
    const response = await fetch(`/api/flights?origin=${origin}&destination=${destination}&date=${date}`);
    const data = await response.json();
    setFlights(data);
  };

  return (
    <div>
      <Navbar />

      {/* Hero Image Background */}
      <div 
        className="relative w-full h-[500px] bg-cover bg-center rounded p-4"  
        style={{ backgroundImage: `url('/hero1.jpg')` }} // ✅ Correct way
      />

      {/* Search Form Section */}
      <div className="absolute bottom-[2%] left-10 container mx-auto p-6">
        <div className="flex space-x-4 pb-3">
          <FlightSearchForm onSearch={handleSearch} />
        </div>
      </div>

      {/* Flight Results */}
      <div className="mt-40">
        <FlightResults flights={flights} />
      </div>
    </div>
  );
};

export default Home;
