import { Route, Routes } from "react-router-dom";
import ROUTES from "./routerModel";
import Login from "../features/users/pages/Login";
import Signup from "../features/users/pages/Signup";
import Category from "../features/products/pages/Category";
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.signup} element={<Signup />} />
      <Route
        path={ROUTES.category}
        element={
          <Category title="Electrical products" filters={["1", "2", "3"]} />
        }
      />
    </Routes>
  );
};

export default Router;
