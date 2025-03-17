import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const flightSchema = new mongoose.Schema({
  airline: String,
  airlineName: String,
  flightNumber: String,
  departureAirport: String,
  departureTime: String,
  arrivalAirport: String,
  arrivalTime: String,
  price: String,
  cabin: String,
  bookingClass: String
});

const Flight = mongoose.models.Flight || mongoose.model("Flight", flightSchema);

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};

export default async function handler(req, res) {
  await connectDB();
  
  if (req.method === 'POST') {
    try {
      const existingFlight = await Flight.findOne({ flightNumber: req.body.flightNumber });

      if (existingFlight) {
        return res.status(400).json({ message: "Flight already saved!" });
      }

      const newFlight = new Flight(req.body);
      await newFlight.save();

      res.status(200).json({ message: "Flight saved successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to save flight" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
