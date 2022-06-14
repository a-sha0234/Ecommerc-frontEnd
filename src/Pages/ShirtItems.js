import { useEffect, useState } from "react";

import Card from "../components/Card";

export default function ShirtItems(props) {
  let arr = props.items.filter((item) => {
    if (item.ProductType == "shirt") {
      return { item };
    }
  });

  return (
    <div>
      {arr.map((item) => {
        return <Card data={item} />;
      })}
    </div>
  );
}
