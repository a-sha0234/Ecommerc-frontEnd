import Card from "../components/Card";
import { react, useEffect } from "react";

export default function Home(props) {
  return (
    <div>
      {props.items.map((data) => {
        return <Card data={data} />;
      })}
    </div>
  );
}
