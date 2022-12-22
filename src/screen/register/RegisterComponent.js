import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { fetchRegister } from '../../redux/slice/AuthSclice';
import Navbar from '../Navbar';


const RegisterComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    let schema = yup.object().shape({
        username: yup.string().required(),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
        email: yup.string().email().required(),
        password: yup.string()
            .required()
            .min(8, 'Password is too short - should be 8 chars minimum.'),
    });

    const formik = useFormik({
        initialValues: { "username": '', "phone": '', "email": '', "password": '' },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(fetchRegister(values)).then((action) => {
                if (action.payload) {
                    navigate('/')
                }
            })
        },
    })
    return (
        <Navbar>
        <div className='container d-flex justify-content-center' style={{ alignItems: "center", height: "100vh" }}>
            <div className='w-75'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group p-2">
                        <label htmlFor="username">Username</label>
                        <input onChange={formik.handleChange} name="username" type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="username" />
                        {formik.errors.username && formik.touched.username ? (
                            <div>{formik.errors.username}</div>) : null}
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="phone">Phone</label>
                        <input onChange={formik.handleChange} name="phone" type="text" className="form-control" id="phone" aria-describedby="emailHelp" placeholder="phone" />
                        {formik.errors.phone && formik.touched.phone ? (
                            <div>{formik.errors.phone}</div>) : null}
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="email">Email</label>
                        <input onChange={formik.handleChange} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email" />
                        {formik.errors.email && formik.touched.email ? (
                            <div>{formik.errors.email}</div>) : null}
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
            </div >
        </div >
        </Navbar>
    )
}

export default RegisterComponent