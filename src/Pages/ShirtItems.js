import { useEffect, useState } from "react";

import Card from "../components/Card";

export default function ShirtItems(props) {
  // let arr = props.items.filter((item) => {
  //   if (item.ProductType == "shirt") {
  //     return { item };
  //   }
  // });

  // console.log(props.getItemsbyType("shirt"));

  return (
    <div>
      {props.getItemsbyType("shirt").map((item) => {
        return <Card data={item} />;
      })}
    </div>
  );
}
