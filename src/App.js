import React from 'react';
import OrderItem from './components/OrderItem';
import InputId from './components/InputId';
import DisplayOrder from './components/DisplayOrder';

function App(props) {
  
    const orderList = [
      {
        id: 'a1',
        title: 'Laptop',
        amount: 64000,
        status:'shipped' ,
        date: new Date(2020, 7, 14),
      },
      { id: '02', title: 'Monitor', amount: 1799.49,status: 'downloded', date: new Date(2021, 2, 12) },
      {
        id: 'b9',
        title: 'CPU',
        amount: 1200.00,
        status:'Packed' ,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'c',
        title: 'Computer',
        amount: 45000,
        status: 'Downloded',
        date: new Date(2021, 5, 12),
      },
    ];
  
  return (
    <div>
      
      <InputId orders={orderList}></InputId>
      <DisplayOrder items={orderList}></DisplayOrder>
    </div>
    );
}

export default App;