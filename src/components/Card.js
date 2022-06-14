export default function Card(props) {
  console.log(props);
  return <div>{props.data.itemName}</div>;
}
