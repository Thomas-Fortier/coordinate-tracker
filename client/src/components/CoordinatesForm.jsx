import axios from 'axios';
import { useForm } from 'react-hook-form';

// Helpers
import { getCoordinatesUrl } from '../helpers/api';

export default function CoordinatesForm({ coordinates, setCoordinates }) {
  const url = getCoordinatesUrl();
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit(data => {
    axios.post(url, data)
      .then(response => {
        if (response.status === 200) {
          let coordinate = response.data;
          setCoordinates([...coordinates, coordinate]);
        }
      });
  });

  return (
    <div className='form-container'>
      <form className='form-inline' onSubmit={onSubmit}>
        <input {...register('name')} type='text' placeholder='Name' />
        <input {...register('x')} type='number' placeholder='X' />
        <input {...register('y')} type='number' placeholder='Y' />
        <input {...register('z')} type='number' placeholder='Z' />
        <input className='submit' type='submit' value='➕' />
      </form>
    </div>
  );
}