import "./App.css";
import { Footer, Login, Navbar, Products } from "./components";
import { useState, useEffect } from "react";

function App() {
  const {token, setToken} = useState(localStorage.getItem('userToken') ?? null);

  return <div className="App">
    <Navbar />
    {token ? <Products /> : <Login token={token} setToken={setToken}/>}
    <Footer />
  </div>;
}

export default App;
