import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="header"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          paddingBottom: 2,
        }}
      >
        <i className="fa-solid fa-bars"></i>
        <img src={logo} alt="Logo" width={100} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          height: 25,
        }}
      >
        <input
          type="text"
          placeholder="Search a recipe"
          style={{
            height: 20,
            width: 250,
          }}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          style={{
            cursor: "pointer",
          }}
        ></i>
      </div>

      <div>
        <button
          style={{
            paddingBlock: 8,
            paddingInline: 16,
            border: "solid 1px white",
            borderRadius: 10,
          }}
        >
          <i
            className="fa-solid fa-basket-shopping"
            style={{ marginRight: 8 }}
          ></i>
          Cart
        </button>
        <button
          style={{
            paddingBlock: 8,
            paddingInline: 16,
            border: "solid 1px grey",
            borderRadius: 10,
            marginLeft: 8,
            color: "black",
            backgroundColor: "#FFFFFF",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
