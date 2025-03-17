// pages/saved-flights.js
import SavedFlightsPage from '../components/SavedFlightsPage';


export async function getServerSideProps() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/saved-flights`);
    const data = await response.json();
    return { props: { savedFlights: data } };
  } catch (error) {
    console.error("Error fetching saved flights:", error);
    return { props: { savedFlights: [] } };
  }
}

const SavedFlightsPageContainer = ({ savedFlights }) => {
  return <SavedFlightsPage savedFlights={savedFlights} />;
};

export default SavedFlightsPageContainer;
