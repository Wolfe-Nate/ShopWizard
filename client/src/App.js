
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div className="rpgui-content h1">
      <Header></Header>

      <Home></Home>
      <Login></Login>

      <Footer></Footer>
    </div>
  );
}

export default App;
