import { react, useEffect } from "react";

export default function ItemDetails(props) {
  console.log(props);
  return (
    <div>
      <p>{props.details.itemName}</p>
      <button>Add to basket</button>
    </div>
  );
}
