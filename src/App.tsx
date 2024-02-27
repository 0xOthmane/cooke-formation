import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add-recipe" element={<RecipePage />} />
      </Route>
    </Routes>
  );
}

export default App;
