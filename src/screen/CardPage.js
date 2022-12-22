import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CardPage = () => {
    const product = useSelector((state) => state.product)
    console.log(product, "product")
    return (
        <div className='container'>
            <div className='row'>
                {product.productCart.map((item) => {
                    return (
                        <Card style={{ width: '18rem' }} className="p-1 m-2">
                        <Card.Img variant="top" src={item.thumbnail} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    )
                })

                }
            </div>
        </div>
    );
}


export default CardPage