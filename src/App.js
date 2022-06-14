import { react, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchData } from "./ApiCalls/getItems";
//component imports

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import ItemDetails from "./components/ItemDetails";
import Header from "./components/Header";
import Traineritems from "./Pages/TrainerItems";
import ShirtItems from "./Pages/ShirtItems";

function App() {
  const [itemData, setItemData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getItemsbyType(type) {
    let arr = itemData.filter((item) => {
      if (item.ProductType == type) {
        return { item };
      }
    });

    return arr;
  }

  useEffect(() => {
    fetchData(setItemData);
  }, []);

  useEffect(() => {
    if (itemData.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [itemData]);

  return (
    <BrowserRouter>
      {" "}
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={itemData} />}></Route>
        <Route
          path="/trainers"
          element={
            <Traineritems items={itemData} getItemsbyType={getItemsbyType} />
          }
        ></Route>
        <Route
          path="/shirts"
          element={
            <ShirtItems items={itemData} getItemsbyType={getItemsbyType} />
          }
        ></Route>

        {isLoading == false &&
          itemData.map((data) => {
            let route = `/item/${data._id}`;
            return (
              <Route
                path={route}
                element={<ItemDetails details={data} />}
              ></Route>
            );
          })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
