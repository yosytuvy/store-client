import "./App.css";
import Header from "./features/general/components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
     <Router/>
    </BrowserRouter>
    </>
  );
}

export default App;
