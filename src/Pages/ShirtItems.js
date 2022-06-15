import { useEffect, useState, useContext } from "react";

import Card from "../components/Card";

export default function ShirtItems(props) {
  return (
    <div>
      {props.getItemsbyType("shirt").map((item) => {
        return <Card data={item} setBasket={props.setBasket} />;
      })}
    </div>
  );
}
