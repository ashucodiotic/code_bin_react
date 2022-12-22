import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductId } from '../redux/slice/ProductSlice'
import Navbar from './Navbar'

export const ViewProduct = () => {
    const { id } = useParams()
    const product = useSelector((state) => state.product)
    const { singleData } = product
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductId(id))
    }, [id])

   
    return (
        <Navbar>
        <React.Fragment>
            <div className='container mt-4'>
                <div className=' row '>
                    <div className='col-12 d-flex justify-content-between p-2 '>
                        <h5>brand</h5>  {singleData.brand}</div>
                    <div className='col-12 d-flex justify-content-between p-2'>
                        <h5>category</h5> {singleData.category}</div>
                    <div className='col-12 d-flex justify-content-between p-2'>
                        <h5>title</h5>{singleData.title}</div>
                    <div className='col-12 d-flex justify-content-between p-2'>
                        <h5>description</h5>{singleData.description}</div>
                    <div className='col-12 d-flex justify-content-between p-2'>
                        <h5>discountPercentage</h5>{singleData.discountPercentage}</div>
                    <div className='col-12 d-flex justify-content-between p-2'>
                        <h5>price</h5>{singleData.price}</div>
                    <div className='col-12 d-flex justify-content-between p-2'>
                        <h5>rating</h5>{singleData.rating}</div>
                    <div className='col-12 d-flex justify-content-between p-2'>
                        <h5>stock</h5>{singleData.stock}</div>
                    <div className='col-12'>
                        <h5>thumbnail</h5>
                        <img src={singleData.thumbnail} />
                    </div>
                </div>



            </div>
        </React.Fragment>
        </Navbar>
    )
}
