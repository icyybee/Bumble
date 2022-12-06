import {Link} from 'react-router-dom';
import { useState } from 'react';

import FormInput from '../../components/formInput/formInput';

import './login.styles.scss';
import Wlogo from '../../assets/bumble-white.png';

const defaultFormFields = {
    email: '',
    password: '',
}

const Login = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='login'>
            <div className='login__card'>
                <div className='login__header'>
                    <img src={Wlogo} alt='logo-login' />
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <FormInput
                        label='Email'
                        onChange={handleChange} 
                        value={email} 
                        name='email' 
                        type='email'  
                        placeholder='Email' 
                        id='email' 
                        required 
                    />

                    <FormInput 
                        label='Password'
                        onChange={handleChange} 
                        value={password} 
                        name='password' 
                        type='password'
                        placeholder='Password' 
                        id='password' 
                        required 
                    />
                    
                    <div className='form__group'>
                        <a href='#' className='login--forgot'>Forgot password?</a>
                        
                        <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
                            <button className='login--btn'>
                                Sign in
                            </button>
                        </Link>
                        
                        <span>or</span>
                        
                        <button type='button' className='signup--btn'>Google Sign in</button>
                        
                        <Link to='/register'>
                            <p className='signup'>Don't have an account? <span>Sign up!</span></p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;