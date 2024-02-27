import { useState } from "react";

interface CardProps {
  recipe: { title: string; image: string; isLiked: boolean };
  onDelete: () => void;
}

const Card = ({ recipe, onDelete }: CardProps) => {
  const [like, setLike] = useState<boolean>(recipe.isLiked);

  const onClick = () => {
    setLike(!like);
    console.log(like);
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
          className="fa-solid fa-heart fa-lg"
          style={{
            position: "absolute",
            top: 15,
            right: 10,
            color: "red",
            cursor: "pointer",
          }}
          onClick={onClick}
        ></i>
      )}
      {!like && (
        <i
          className="fa-regular fa-heart fa-lg"
          style={{
            position: "absolute",
            top: 15,
            right: 10,
            color: "red",
            cursor: "pointer",
          }}
          onClick={onClick}
        ></i>
      )}
      <i
        className="fa-sharp fa-solid fa-xmark fa-lg"
        style={{
          position: "absolute",
          top: 15,
          left: 10,
          color: "grey",
          cursor: "pointer",
        }}
        onClick={onDelete}
      ></i>
      <img src={recipe.image} alt="placeholder" width={250} />
      <p>{recipe.title}</p>
    </div>
  );
};

export default Card;
