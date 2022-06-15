import { react, useEffect } from "react";

export default function ItemDetails(props) {
  console.log(props);
  return (
    <div>
      <p>{props.details.itemName}</p>
      <img src={props.details.itemImage}></img>
      <p>{props.details.itemPrice}</p>
      <p>{props.details.itemDescription}</p>
      <p>{props.details.ProductType}</p>
      <p>{props.details.productCode}</p>
      <button>Add to basket</button>
    </div>
  );
}
