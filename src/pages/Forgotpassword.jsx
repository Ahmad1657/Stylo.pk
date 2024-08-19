import axios from 'axios';
import React, {useState} from 'react'

const Forgotpassword = () => {
  const button=useState(null);
  const value=useState(true);
    const [formData, setFormData] = useState({
        email: '',
        code:'',
    })
    const { email, code } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/api/admin/user")
        console.log(response)
    }
    if(){
        return(
        <div className='d-flex justify-content-center flex-column align-items-center'>
        <label>Verification Code:</label>
        <input type='number' name='code'  value={code} onChange={onChange}/>
        <button className='btn my-2' style={{ backgroundColor: '#e6007e', color: '#ffffff' }} type='submit'>
                    Verify
        </button>
    </div>)
    }
  return (
    <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <label>Email:</label>
                <input type='email' name='email'  value={email} onChange={onChange}/>

                <button className='btn my-2' style={{ backgroundColor: '#e6007e', color: '#ffffff' }} type='submit' onClick={value}>
                    Send Email
                </button>
            </div>
        </form>
  )
}

export default Forgotpassword;
