import React, { useEffect, useState } from 'react';
import { Container, Form, Image, Table } from 'react-bootstrap';
import "./Cart.css";

const Cart = () => {
    const [cartItem , setCartItem] = useState([] as CartItemType[])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setCartItem(json))
    },[])

     type CartItemType = {
        id: number;
        category: string;
        description: string;
        image: string;
        price: number;
        title: string;
      }
    return (
        <Container className='mt-5'>
            <div>
            <h4>Your Cart Items</h4>
            <Table hover responsive>
                <thead >
                    <tr  style={{backgroundColor:"rgb(232 236 236)", textAlign:"center",  fontSize:"20px"}}>
                    <th>image</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                    </tr>
                </thead>
              {
                cartItem.slice(0,3).map((cart)=>( 
                    
                     <tbody key={cart.id}>
                        <tr style={{textAlign:"center", fontSize:"20px"}}>
                             <td> <Image style={{width:"100px", height:"100px"}} src={cart.image}/> </td>
                             <td style={{margin :"auto 0"}}>{cart.title}</td>
                             <td>{cart.price}</td>
                             <td>
                            <div className="cart-plus-minus"><button className="dec-qtybutton">-</button>
                             <Form.Control className="cart-plus-minus-box" type="text" value="1"/>
                                 <button className="inc-qtybutton">+</button></div>
                             </td>
                            <td><button style={{backgroundColor:"white", border:'none'}}>X</button></td>
                            </tr>
                </tbody>
                            ))
                        }
                    
                    
            </Table>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                <button className="cart-button" style={{marginRight:"auto"}}>Continue Shopping</button>
                <button  className="cart-button" style={{marginLeft:"auto"}}>Procced to Check Out</button>
            </div>
            </div>
        </Container>
    );
};

export default Cart;