import getProxy from "../config/config";

export default function Delete(props) {
  const remove = event => {
    fetch(`${getProxy()}/${props.id}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
      .then((res) => {
        res.json();
        props.getData();
      });
  }

  return (
    <button className="delete" onClick={remove}>🗑</button>
  );
}