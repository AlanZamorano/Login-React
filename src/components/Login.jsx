import React, { useState } from 'react';

function Login({login, error}) {
    const [info, setInfo] = useState({user:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        login(info);
    }


  return (
    <form onSubmit={submitHandler}>
        <div className='form'>
            <h2>Login</h2>
        {(error != '') ? (<div className='error'>{error}</div>) : ""}
        <div className='form-group'>
            <label htmlFor='user'>Usuario</label>
            <input placeholder='Ingresa tu usuario' type="text" name='user' id='user' onChange={e => setInfo({...info, user: e.target.value})}  value={info.user} required/>
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Contraseña</label>
            <input placeholder='Ingresa tu contraseña' type="password" name='password' id='password' onChange={e => setInfo({...info, password: e.target.value})}  value={info.password} required/>
        </div>
        <input type="submit" value='Iniciar sesion'/>
        </div>
    </form>
  )
}

export default Login