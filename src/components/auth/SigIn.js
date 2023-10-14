import React from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {Link} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                console.log(userCredential);
                toast.success('Logged in successfully');
                window.location.href = '/';
            })
            .catch((error) => {
                console.log(error);
                toast.error(`Error: ${error.message}`);
            });
    }

    return (
        <div className='containerLogIn'>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1> Log In to your account!</h1>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type="email" className='form-control' {...register('email', { required: true })} />
                    {errors.email && <p className='text-danger'>Email is required</p>}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input type="password" className='form-control' {...register('password', { required: true })} />
                    {errors.password && <p className='text-danger'>Password is required</p>}
                </div>
                <div>
                    <button style={{backgroundColor: 'darkslategrey', color: 'white'}} type="submit" className='btn btn-success'>Log in</button>
                </div>
                <div>
                    <Link to="/register">
                        <button style={{backgroundColor: 'darkslategrey', color: 'white'}} type="button" className='btn btn-success'>Don't have an account? Register!</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
