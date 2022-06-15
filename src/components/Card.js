export default function Card(props) {
  console.log(props);
  // function addToBasketArr(event) {
  //   // adds id of item thats added to basket state which has been sent down from the app component
  //   event.preventDefault();
  //   const { id } = event.currentTarget;

  //   props.setBasket((prev) => {
  //     return [...prev, id];
  //   });
  // }

  const route = `/item/${props.data._id}`;

  return (
    <div>
      <a href={route}>
        <div>{props.data.itemName}</div>
        <img src={props.data.itemImage}></img>
        <p>{props.data.itemPrice}</p>
      </a>
      <button id={props.data._id}>Add to Basket</button>
    </div>
  );
}
