import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');

  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await actions.signup(email, password, name, lastname, phone);
    navigate('/login');
};


  return (
    <div>
      <form class="container d-flex justify-content-center row g-3" onSubmit={handleSignup}>
        <div className='col-md-6'>
          <h2 className='text-center mt-3'>Crear Cuenta</h2>
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Email</label>
            <input 
              type="email" 
              class="form-control" 
              id="inputEmail4" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div class="col-12">
            <label for="inputName" class="form-label">Nombre</label>
            <input 
              type="text" 
              class="form-control" 
              id="inputName" 
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div class="col-12">
            <label for="inputLastname" class="form-label">Apellido</label>
            <input 
              type="text" 
              class="form-control" 
              id="inputLastname" 
              placeholder="Apellido" 
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div class="col-md-12">
            <label for="inputPhone" class="form-label">Telefono</label>
            <input 
              type="text" 
              class="form-control" 
              id="inputPhone" 
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div class="col-md-12">
            <label for="inputPassword4" class="form-label">Password</label>
            <input 
              type="password" 
              class="form-control" 
              id="inputPassword4" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" class="col-md-12 btn btn-primary mt-5">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

//export default Signup