import "./App.css";
import AppHeader from "./components/AppHeader";
import Category from "./components/Category";
// import Login from "./components/Login";

function App() {
  return (
    <>
      <AppHeader />

      <Category title="Electrical products" filters={["1", "2", "3"]} />

      {/* <Register /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
