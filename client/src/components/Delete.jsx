export default function Delete(props) {
  const remove = event => {
    fetch(`http://localhost:5000/api/v1/coordinates/${props.id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then((res) => {
        res.json();
        props.getData();
      });
  }

  return (
    <button onClick={remove}>Delete</button>
  );
}