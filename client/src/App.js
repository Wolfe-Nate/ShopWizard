import Login from "./pages/Login";
import SignUp from "../src/pages/Signup";
import Header from "./components/Header";
import Inventory from "./pages/Inventory";
import Home from "../src/pages/Home";
import AddItem from "./pages/Additem";
import Admin from "./pages/Admin";

import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="rpgui-content h1">
        <Header />
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/AddItem" element={<AddItem />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Inventory" element={<Inventory />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
