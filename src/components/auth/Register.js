import React from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast, ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import ReusableButton from "../reusablaComponents/ReusableButton";

const Register = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords don't match!");
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
                console.log(userCredential);
                toast.success('Account created successfully!');
                window.location.href = '/';
            } catch (error) {
                console.log(error);
                toast.error(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className='containerRegister'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='mb-3'>Create account</h1>
                <div className='mb-3'>
                    <label className='form-label'>First Name</label>
                    <input type="text" className='form-control' {...register('firstName', { required: true })} />
                    {errors.firstName && <p className='text-danger'>First name is required</p>}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Last Name</label>
                    <input type="text" className='form-control' {...register('lastName', { required: true })} />
                    {errors.lastName && <p className='text-danger'>Last name is required</p>}
                </div>
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
                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input type="password" className='form-control' {...register('confirmPassword', { required: true })} />
                    {errors.confirmPassword && <p className='text-danger'>Confirm password is required</p>}
                </div>
                <ReusableButton size="sm" variant="green" type="submit">Register</ReusableButton>

            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;
