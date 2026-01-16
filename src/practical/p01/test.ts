import test from "node:test";
import { getPostalAddress } from "./index";

type User = {
  id: number;
  name: string;
  phone : string;
    address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  geo: {
    lat: string;
    lng: string;
  };
};

test("getPostalAddress function should return postal addresses", async () => {
  const data: User[] = await getPostalAddress();
  expect(data.length).toBeGreaterThan(0);

  data.forEach((user) => {
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("phone");
    expect(user).toHaveProperty("address.street");
    expect(user).toHaveProperty("address.suite");
    expect(user).toHaveProperty("address.city");
    expect(user).toHaveProperty("address.zipcode");
  });
});

function expect(length: number) {
    throw new Error("Function not implemented.");
}

function toBeGreaterThan(arg0: number) {
    throw new Error("Function not implemented.");
}



