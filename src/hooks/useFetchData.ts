import { useEffect, useState } from "react";
import { seedData } from "../data/seed";
type Recipe = {
  title: string;
  image: string;
  isLiked: boolean;
};
export default function useFetchData() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  // const getData = async () => {
  //   const resp = await fetch("https://restapi.fr/api/recipes?limit=10", {
  //     method: "GET",
  //   });
  //   return resp.json();
  // };
  useEffect(() => {
    seedData().then((data) => setRecipes(data.data));
  }, []);
  return { recipes, setRecipes };
}
