import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { useGetAllProductQuery } from '../redux/service/productService'
import { setProduct, setId, setCartData, fetchProduct } from '../redux/slice/ProductSlice'
import Navbar from './Navbar'
import { ProductList } from './ProductList'

const ProductListWrapper = () => {
  const navigate=useNavigate()

  const product = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  },[])

  useEffect(() => {
   let token=localStorage.getItem('authToken')
   if(!token)
   {
    navigate('/')
   }
  },[])

  const onClickIdHandler = (productId) => {
    dispatch(setId(productId))
    navigate(`/list/${productId}`)
  }
  const onClickCardHandler = (productCart) => {
    let data = product.productCart.find((ele) => ele.id == productCart.id)
    if (!data) {
      let cartData = [...product.productCart, productCart]
      dispatch(setCartData(cartData))
    }


  }


  return (
    <Navbar>
    <React.Fragment>
      <div className=' mt-1 font-bold text-center d-flex justify-content-around'>
        <h1>ProductList</h1>
        <button className='text-secondary rounded btn btn-sm border border-outline-success border-1' onClick={() => navigate(`/cart`)} >View Cart ({product?.productCart?.length})</button>
      </div>
      <div className='container-fluid'>
        <table className="table">
          <thead>
            <th>id</th>
            <th>image</th>
            <th>title</th>
            <th>desciption</th>
            <th>price</th>
            <th>Action</th>
          </thead>
          <tbody>
            {
              product.productList.length ? product.productList.map((item) =>
                <ProductList productItem={item} onSetId={onClickIdHandler} onSetCard={onClickCardHandler} />
              )
                : "loading .."
            }

          </tbody>
        </table>
      </div>
    </React.Fragment>
    </Navbar>
  )
}

export default ProductListWrapper