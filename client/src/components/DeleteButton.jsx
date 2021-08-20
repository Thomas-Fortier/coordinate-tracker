import axios from 'axios';

// Helpers
import { getCoordinatesUrl } from '../helpers/api';

export default function DeleteButton({ id, coordinates, setCoordinates }) {
  const onClick = () => {
    const url = `${getCoordinatesUrl()}/${id}`;
    
    axios.delete(url)
      .then(response => {
        if (response.status === 200) {
          var coordinatesCopy = coordinates;
          setCoordinates(coordinatesCopy.filter(coordinate => id !== coordinate._id));
        }
      });
  }

  return <button className='delete-button button' onClick={onClick}>🗑️</button>
}