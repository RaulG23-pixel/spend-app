import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function Home() {
  const [isLogged, setIsLogged] = useState(false);
  let token = localStorage.getItem("access_token");
  useEffect(() => {
    if (token) {
      setIsLogged(true);
    }
  }, [token, setIsLogged]);
  if (isLogged) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
