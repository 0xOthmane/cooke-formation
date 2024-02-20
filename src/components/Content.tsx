import { useEffect, useState } from "react";
import Card from "./Card";
import { seedData } from "../data/seed";
const Content = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(width <= 768);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      width <= 768 ? setIsMobile(true) : setIsMobile(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  useEffect(() => {
    seedData().then((data) => setRecipes(data.data));
  }, []);
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        color: "GrayText",
      }}
    >
      <div style={{ padding: 24, marginInline: 24, height: "100%" }}>
        <h2 style={{ marginBlockStart: 0 }}>Discover our new recipes</h2>
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid rgba(0, 0, 0, .2)",
            backgroundClip: "padding-box",
            WebkitBackgroundClip: "padding-box",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,  1fr)",
              gridTemplateRows: "repeat(3,1fr)",
              padding: 16,
              gap: 16,
            }}
          >
            {recipes?.map((recipe,i) => (
              <Card key={i} recipe={recipe} />
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
