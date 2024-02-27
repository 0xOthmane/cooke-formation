import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  title: yup.string().required(),
  imageUrl: yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Enter correct url!'
).required(),
});

const RecipePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = async (data: { title: string; imageUrl: string }) => {
    await fetch("https://restapi.fr/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
    reset();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2>Add your favorite recipe.</h2>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <br />
        <p>Recipe Title</p>
        <input {...register("title")} placeholder="Recipe title" required  style={{
          padding:8
        }}/>
        <p>{errors.title?.message}</p>
        <br />
        <p>Recipe Image Url</p>

        <input {...register("imageUrl")} placeholder="Recipe image" required  style={{
          padding:8
        }}/>
        <p>{errors.imageUrl?.message}</p>
        <br />

        <button type="submit" style={{
          padding:8
        }}>Submit</button>
      </form>
    </div>
  );
};

export default RecipePage;
