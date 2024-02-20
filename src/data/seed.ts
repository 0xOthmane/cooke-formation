import { data } from "./index";
export const seedData = async () => {
  const resp = await fetch("https://restapi.fr/api/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  });
  return resp.json();
};
