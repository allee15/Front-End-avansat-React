import React from 'react';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {Link} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css';
import ReusableButton from "../reusablaComponents/ReusableButton";


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
                    <ReusableButton size="sm" variant="green" type="submit">Log in</ReusableButton>
                </div>
                <div>
                    <Link to="/register">
                        <ReusableButton size="sm" variant="green" type="button">Don't have an account? Register!</ReusableButton>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
