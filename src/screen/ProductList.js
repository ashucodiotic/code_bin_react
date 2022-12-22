import React from 'react'

export const ProductList = ({productItem,onSetId,onSetCard}) => {
    // let {title ,id,description,image,price}=productItem
    // console.log(title)   
  return (
    <React.Fragment key={productItem.id}>
   { <tr key={productItem.id} >
      <td scope="col">{productItem.id}</td>
      <td scope="col"><img height={60} src={productItem.tdumbnail} onClick={()=>onSetId(productItem.id)} /></td>
      <td scope="col">{productItem.title}</td>
      <td scope="col">{productItem.description}</td>
      <td scope="col">{productItem.price}</td>
      <td scope="col"><button className='text-success btn btn-sm border border-1 rounded p-1' onClick={()=>onSetCard(productItem)}>Add to Cart</button></td>
      <td scope="col"><button className='text-success btn btn-sm border border-1 rounded p-3' onClick={()=>onSetId(productItem.id)}>view</button></td>
      
    </tr>
  }
  </React.Fragment>

  )
}
