import axios from "axios";
import instance from "../axios";

async function fetchData(setter) {
  const getItems = await instance.get(`/`);

  setter(getItems.data);
}

export { fetchData };
