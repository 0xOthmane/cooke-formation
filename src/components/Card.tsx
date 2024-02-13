import placeholder from "../assets/images/placeholder.jpg";

const Card = () => {
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
      }}
    >
      <img src={placeholder} alt="placeholder" width={250} />
      <p>Menu Burger</p>
    </div>
  );
};

export default Card;
