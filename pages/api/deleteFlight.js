// Example: Express.js API Route
app.delete('/api/deleteFlight/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await database.deleteFlight(id); // Replace with your database logic
      res.status(200).json({ message: 'Flight deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete flight' });
    }
  });
  