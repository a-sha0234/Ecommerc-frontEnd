import { useEffect, useState } from "react";
import { fetchTrainers } from "../ApiCalls/getItems";
import Card from "../components/Card";

export default function Traineritems(props) {
  return (
    <div>
      {props.getItemsbyType("trainers").map((item) => {
        return <Card data={item} setBasket={props.setBasket} />;
      })}
    </div>
  );
}
