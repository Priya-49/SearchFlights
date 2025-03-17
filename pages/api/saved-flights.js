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
  bookingClass: String,
});

const Flight = mongoose.models.Flight || mongoose.model("Flight", flightSchema);

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
  });
};

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const flights = await Flight.find();
      res.status(200).json(flights);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch flights" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
