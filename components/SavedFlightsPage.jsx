import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; 

const SavedFlightsPage = ({ savedFlights = [] }) => {
  const [flights, setFlights] = useState(savedFlights); // State to manage saved flights

  // Function to handle delete
  const handleDelete = (index) => {
    const updatedFlights = flights.filter((_, i) => i !== index);
    setFlights(updatedFlights);
  };

  return (
    <div className="max-w-6xl mx-auto mt-22 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-black mb-6 text-center">Saved Flights</h2>

      {Array.isArray(flights) && flights.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-400 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-black text-lg">
                <th className="border border-gray-400 p-3">Airline</th>
                <th className="border border-gray-400 p-3">Flight No.</th>
                <th className="border border-gray-400 p-3">Departure</th>
                <th className="border border-gray-400 p-3">Departure Time</th>
                <th className="border border-gray-400 p-3">Arrival</th>
                <th className="border border-gray-400 p-3">Arrival Time</th>
                <th className="border border-gray-400 p-3">Cabin</th>
                <th className="border border-gray-400 p-3">Booking Class</th>
                <th className="border border-gray-400 p-3">Price</th>
                <th className="border border-gray-400 p-3">Actions</th> 
              </tr>
            </thead>
            <tbody>
              {flights.map((flight, index) => (
                <tr key={index} className="text-center bg-white hover:bg-gray-100">
                  <td className="border border-gray-400 p-3">{flight.airlineName} ({flight.airline})</td>
                  <td className="border border-gray-400 p-3">{flight.flightNumber}</td>
                  <td className="border border-gray-400 p-3">{flight.departureAirport}</td>
                  <td className="border border-gray-400 p-3">{flight.departureTime}</td>
                  <td className="border border-gray-400 p-3">{flight.arrivalAirport}</td>
                  <td className="border border-gray-400 p-3">{flight.arrivalTime}</td>
                  <td className="border border-gray-400 p-3">{flight.cabin}</td>
                  <td className="border border-gray-400 p-3">{flight.bookingClass}</td>
                  <td className="border border-gray-400 p-3 font-semibold text-gray-700">{flight.price}</td>
                  <td className="border border-gray-400 p-3">
                  <button 
                    onClick={() => handleDelete(index)}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                  >
                   Delete
                 </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">No saved flights.</p>
      )}
    </div>
  );
};

export default SavedFlightsPage;
