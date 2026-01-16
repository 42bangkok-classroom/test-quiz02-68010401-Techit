import axios from "axios";
 export async function getPostalAddress() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data.map((user: any) => ({
    id: user.id,
    name: user.name,
    address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
  }));
   
 }
  





