import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await actions.login(email, password);
        if (store.isAuthenticated) {
            navigate('/private');
        }
    };


    return (
        <div className='container'>
            <form className='d-flex justify-content-center mt-4 row' onSubmit={handleLogin}>
                <div className='col-md-6'>
                    <h2 className='text-center'>Login</h2>
                    <div class="col-md-12 mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div id="emailHelp" class="form-text">No compartiremos tu email con nadie mas.</div>
                    </div>
                    <div class="col-md-12 mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" class="col-md-12 btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

//export default Login