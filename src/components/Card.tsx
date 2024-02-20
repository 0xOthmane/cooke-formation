import { useState } from "react";

interface CardProps {
  recipe: { title: string; image: string; isLiked: boolean };
}

const Card = ({ recipe }: CardProps) => {
  const [like, setLike] = useState<boolean>(recipe.isLiked);

  const onClick = () => {
    setLike(!like);
    console.log(like)
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        border: "1px solid rgba(0, 0, 0, .2)",
        backgroundClip: "padding-box",
        WebkitBackgroundClip: "padding-box",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      {like && (
        <i
          className="fa-solid fa-heart"
          style={{
            position: "absolute",
            top: 5,
            right: 10,
            color: "red",
            cursor: "pointer",
          }}
          onClick={onClick}
        ></i>
      )}
      {!like && (
        <i
          className="fa-regular fa-heart"
          style={{
            position: "absolute",
            top: 5,
            right: 10,
            color: "red",
            cursor: "pointer",
          }}
          onClick={onClick}
        ></i>
      )}

      <img src={recipe.image} alt="placeholder" width={250} />
      <p>{recipe.title}</p>
    </div>
  );
};

export default Card;
