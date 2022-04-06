import React,{useState} from 'react'
import OrderItem from './OrderItem';


export default function DisplayOrder(props) {
  {/*}  const[filteredOrder,setfilteredOrder]=useState(props.orderId)
    const filteredId=props.items.filter(order => {
        return order.id=== filteredOrder;
    });
console.log(props.orderId);*/}

  return (
      <>
      {props.items.map(order=><OrderItem  key={order.id} title={order.title} amount={order.amount} date={order.date}/>)}
    
  {/*} <p> OrderStatus is:{filteredId}</p>*/}


      
      )
   
      </>
  )
}