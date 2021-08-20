// Custom components
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default function CoordinatesList({ coordinates, setCoordinates }) {
  const onClick = () => {

  }

  return (
    <table className='list'>
      <tbody>
        {
          coordinates.map(coordinate => {
            return (
              <tr>
                <td className='name-cell'>{coordinate.name}</td>
                <td className='position-cell'>{coordinate.position[0]}</td>
                <td className='position-cell'>{coordinate.position[1]}</td>
                <td className='position-cell'>{coordinate.position[2]}</td>
                <td className='update-cell'>
                  <DeleteButton id={coordinate._id} coordinates={coordinates} setCoordinates={setCoordinates} />
                  <EditButton />
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}