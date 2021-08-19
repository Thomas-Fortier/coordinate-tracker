export default function Delete(props) {
  const remove = event => {
    fetch(`${process.env.PROXY}/${props.id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then((res) => {
        res.json();
        props.getData();
      });
  }

  return (
    <button className="delete" onClick={remove}>🗑</button>
  );
}