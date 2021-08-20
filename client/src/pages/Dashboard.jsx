import axios from 'axios';
import { useState, useEffect } from 'react';

// Helpers
import { getCoordinatesUrl } from '../helpers/api';

// Custom components
import CoordinatesList from '../components/CoordinatesList';
import CoordinatesForm from '../components/CoordinatesForm';

export default function Dashboard() {
  const url = getCoordinatesUrl();
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    axios(url).then(response => { setCoordinates(response.data) });
  }, []);

  return (
    <>
      <section className='coordinate-section'>
        <CoordinatesList coordinates={coordinates} setCoordinates={setCoordinates} />
        <CoordinatesForm coordinates={coordinates} setCoordinates={setCoordinates} />
      </section>
    </>
  );
}