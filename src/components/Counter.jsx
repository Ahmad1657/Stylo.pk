import React,{useState} from 'react'
import { CiHospital1 } from 'react-icons/ci'
import { toast } from 'react-toastify'

const Counter = () => {
    
    const [counter,setcounter]=useState(1)
    const [show,setshow]=useState(true)
    const Updatevalue =()=>{
        setshow(!show);
    }
    const minus =()=> {
        if(counter > 1){
            setcounter(counter-1);
         }
        else{
            toast.warning("You cannot buy less than 1")
        }
    }
    const add=()=> {
        if(counter < 3){
            setcounter(counter+1);
             }
        else{
             toast.warning("You cannot buy more than 3")
        }
        
    }
  return (
   
    <div style={{fontSize:'30px', marginTop:'20px', textAlign:'center'}}>

        {counter === 3 ?<h1>Hello your acc is full</h1>:null}

        {counter <= 2 ?<h1>Hello do you want more?</h1>:null}

    <button className='minus ov' onClick={minus} >-</button>
      {counter}
      <button className='add ov' onClick={add}>+</button>

      {show?<h1>hello</h1>:<h1>Bye</h1>}
    <button onClick={Updatevalue}>Want to Make a Change?</button>
</div>
   
  )
}

export default Counter;
