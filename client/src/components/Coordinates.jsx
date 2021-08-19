import { useEffect, useState } from "react";
import axios from "axios";
import Delete from "./Delete";

export default function Coordinates() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Form
  const [name, setName] = useState('');
  const [x, setX] = useState(undefined);
  const [y, setY] = useState(undefined);
  const [z, setZ] = useState(undefined);

  // Fetches the data
  const getData = async () => {
    await axios('http://localhost:5000/api/v1/coordinates')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(`Error fetching from API: `, error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // Updates the form props on change
  const onChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value)
        break;
      case 'x':
        setX(event.target.value);
        break;
      case 'y':
        setY(event.target.value);
        break;
      case 'z':
        setZ(event.target.value);
        break;
    }
  }

  // Pushes the entered values and fetches the data again
  const submit = event => {
    event.preventDefault();

    fetch('http://localhost:5000/api/v1/coordinates', {
      method: 'POST',
      body: JSON.stringify({ name, x, y, z }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      res.json();
      getData();
    });
  }

  useEffect(() => {
      getData();
  }, []);

  if (loading) return <p>Loading cooridnates...</p>

  return (
    <div>
      <ul>
        {
          data.map(coordinate => {
            return (
              <li key={coordinate._id}>
                <div>
                  <p>{coordinate.name}</p>
                  <p>{coordinate.position[0]}</p>
                  <p>{coordinate.position[1]}</p>
                  <p>{coordinate.position[2]}</p>
                  <Delete key={coordinate._id} id={coordinate._id} getData={getData}/>
                </div>
              </li>
            )
          })
        }
      </ul>

      <form onSubmit={submit}>
        <input type='text' name="name" placeholder="Name" value={name} onChange={onChange} />
        <input type='text' name="x" placeholder="X" value={x} onChange={onChange} />
        <input type='text' name="y" placeholder="Y" value={y} onChange={onChange} />
        <input type='text' name="z" placeholder="Z" value={z} onChange={onChange} />

        <input type='submit' value="Add" />
      </form>
    </div>
  );
}