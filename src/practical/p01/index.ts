import axios from "axios";
export async function getPostalAddress() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
  type User = {
    id: number;
    name: string;
    phone: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
}
    const users: User[] = res.data;
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      phone: user.phone,
      address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode} (Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng})`,
    }));
}





