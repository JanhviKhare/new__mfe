import React ,{useState} from 'react'
import DisplayOrder from './DisplayOrder';

export default function InputId(props) {
    const[idvalue,setIdValue]=useState('');
    const[submitValue,setSubmitValue]=useState(false);
    const[filteredOrder,setfilteredOrder]=useState('invalid id');

   

    const InputChangeHandler=(event)=>{
        setIdValue(event.target.value);
        console.log(idvalue);
        }

        const clickHandler=()=>{
            props.orders.forEach(order => {
                if( order.id=== idvalue){
    
                 setfilteredOrder(order.status);
                
                return filteredOrder;
                }
                else {
                    return filteredOrder;
                }
            });
            setSubmitValue(true);

        }
        
        
        
  return (
    <div>
        <h1>
            OrderId
        </h1>
      <input type="text" onChange={InputChangeHandler}></input>
      <button type='submit' onClick={clickHandler}>Track order</button>
      {submitValue&&<h1>{filteredOrder}</h1>}
      
    </div>
  )
}
