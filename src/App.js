import "./App.css";
import { Footer, Login, Navbar, Products } from "./components";
import { useState, useEffect } from "react";

function App() {
  const {token, setToken} = useState(localStorage.getItem('userToken') ?? null);

  useEffect(() => {
    function checkUserData() {
      const item = localStorage.getItem('userToken')
  
      if (item) {
        setToken(item)
      }
    }
  
    window.addEventListener('storage', checkUserData)
  
    return () => {
      window.removeEventListener('storage', checkUserData)
    }
  }, [])
  // useEffect(() => {
  //   setToken(localStorage.getItem('userToken') ?? token);
  // })

  return <div className="App">
    <Navbar />
    {token ? <Products /> : <Login token={token} setToken={setToken}/>}
    <Footer />
  </div>;
}

export default App;