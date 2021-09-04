import React, {useState} from "react";
import LoginForm from "./components/LoginForm";
import {Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import { Details } from "@material-ui/icons";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Sesión iniciada");
      setUser({
        name: details.name,
        email: details.email
      });       
    }else{
      console.log("Los datos ingresados no coinciden");
      setError("Los datos ingresados no coinciden"); 
    }
  }

  const Logout = details => {
    setUser({name: "", email: ""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Bienvenido, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>  
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
