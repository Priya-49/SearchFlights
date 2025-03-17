export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/saved-flights`);
      const savedFlights = await response.json();

      res.status(200).json(savedFlights);
    } catch (error) {
      console.error("Error fetching saved flights:", error);
      res.status(500).json({ error: 'Failed to fetch saved flights' });
    }
  } else {
    // Method not allowed
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}


