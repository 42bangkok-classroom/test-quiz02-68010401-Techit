import axios from "axios";
export async function getPostalAddress() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
}


