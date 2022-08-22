import React, { useState } from 'react'
import './App.css';
import Login from './components/Login';

function App() {
  //datos de usuario
  const login_user = {
  user:"usuarioG16",
  password: "passw0rd"
  }

const [user, setUser] = useState({user:'', password:''})
const [error, setError] = useState("");

//validacion de inicio de sesion
const login = info => {
  if(info.user == login_user.user && info.password == login_user.password){
    console.log('Inicio sesion')
    setUser({
      user: info.user,
      password: info.password
    });
  }
  else{
    setError("Usuario y/o contraseña incorrecta")
  }
}
 //cerrar sesion
const Salir = () =>{
  setUser({user:"", password:""})
}

//fecha y hora de inicio de sesion
const fecha_actual = new Date().toLocaleDateString();
const hora_actual = new Date().toLocaleTimeString();

  return (
    <div className="App">
      {(user.user != '') ? (
        <div className='start'>
          <h2>Bienvenido</h2>
          <p>Inicio de sesion a las: {hora_actual}</p>
          <p>El dia: {fecha_actual}</p>
          <button onClick={Salir}>Salir</button>
        </div>
      ):(
        <Login login={login} error={error}/>
      )}
    </div>
  )
}

export default App
