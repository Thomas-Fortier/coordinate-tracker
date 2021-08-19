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
    await axios(process.env.PROXY)
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

    fetch(process.env.PROXY, {
      method: 'POST',
      body: JSON.stringify({ name, x, y, z }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      setName('');
      setX('');
      setY('');
      setZ('');

      res.json();
      getData();
    });
  }

  useEffect(() => {
      getData();
  }, []);

  if (loading) return <p>Loading cooridnates...</p>

  const tableBody = (
    <table>
      <tbody>
        {
          data.map(coordinate => {
            return (
              <tr key={coordinate._id}>
                <td className="name"><p>{coordinate.name}</p></td>
                <td>{coordinate.position[0]}</td>
                <td>{coordinate.position[1]}</td>
                <td>{coordinate.position[2]}</td>
                
                <td><Delete key={coordinate._id} id={coordinate._id} getData={getData}/></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );

  const nothing = (
    <p className="nothing">Nothing to show yet!</p>
  );

  const bodyRender = data.length === 0 ? nothing : tableBody;

  return (
    <>
      <div className="container">
        <h1 className="title">Coordinates</h1>
        
        {bodyRender}
      </div>

      <form onSubmit={submit}>
        <input type='text' name="name" placeholder="Name" value={name} onChange={onChange} />
        <input type='text' name="x" placeholder="X" value={x} onChange={onChange} />
        <input type='text' name="y" placeholder="Y" value={y} onChange={onChange} />
        <input type='text' name="z" placeholder="Z" value={z} onChange={onChange} />

        <input className="add" type='submit' value="+" />
      </form>
    </>
  );
}