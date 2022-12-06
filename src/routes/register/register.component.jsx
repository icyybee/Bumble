import { useState } from 'react';

import FormInput from '../../components/formInput/formInput';
import '../login/login.styles.scss';
import Wlogo from '../../assets/bumble-white.png';
import { Link } from 'react-router-dom';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Register = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

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
        <div className='register login'>
            <div className='login__card'>
                <div className='login__header'>
                    <img src={Wlogo} alt='logo-login' />
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <FormInput
                        label='Username'
                        onChange={handleChange} 
                        value={displayName} 
                        name='displayName' 
                        type='text'  
                        placeholder='Username' 
                        id='username' 
                        required 
                    />
                    
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
                    
                    <FormInput 
                        label='Confirm password'
                        onChange={handleChange} 
                        value={confirmPassword} 
                        name='confirmPassword' 
                        type='password'
                        placeholder='Confirm password' 
                        id='password' 
                        required 
                    />
                    
                    <div className='form__group'>
                        <Link to='/login' style={{textDecoration:'none', color:'inherit'}}>
                            <button type='submit' className='signup--btn'>Sign up</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;