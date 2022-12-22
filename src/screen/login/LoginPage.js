import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Navbar from '../Navbar';

export const LoginPage = () => {
    const navigate = useNavigate()
    let schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string()
            .required()
            .min(8, 'Password is too short - should be 8 chars minimum.'),
    });
    
    const formik = useFormik({
        initialValues: { "username": '', "password": '' },
        validationSchema: schema,
        onSubmit: values => {
            axios.post(`http://localhost:3005/codebin/login`, values).then((res) =>
                 {localStorage.setItem("authToken", res.data.token)
                 navigate('/product')}
             )
        },
    })
    return (
        <Navbar>
            <div className='container d-flex justify-content-center' style={{ alignItems: "center", height: "80vh" }}>
                <div className='w-75'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group p-2">
                        <label htmlFor="username">Username</label>
                        <input onChange={formik.handleChange} name="username" type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="username" />
                        {formik.errors.username && formik.touched.username ? (
                            <div>{formik.errors.username}</div>) : null}
                    </div>
                   
                    <div className="form-group p-2">
                        <label htmlFor="password">Password</label>
                        <input onChange={formik.handleChange} name="password" type="password" className="form-control" id="password" placeholder="Password" />
                        {formik.errors.password && formik.touched.password ? (
                            <div>{formik.errors.password}</div>) : null}
                    </div>

                    <div className="form-group p-2 float-left">
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </Navbar>

    )
}
