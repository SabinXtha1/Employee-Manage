import React, { useState } from 'react'



const Login = ({handleLogin}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    
    const submitHandle=(e)=>{
          e.preventDefault()
        handleLogin(email,password)
          
          
    }
  return (
    <div className='flex items-center justify-center h-screen w-full nh  '  >
       
        <div className="border-2 border-red-600 p-5 rounded-md  ">
<form onSubmit={(e)=>{
    submitHandle(e)
    console.log('email is ',email,'\n','password is ',password)
    setemail('');setpassword('')
}
} className='flex flex-col items-center justify-center'>
    <input required className='border-2 boredr-red-600 rounded-full border-red-500 text-xl  outline-none bg-transparent placeholder:text-center m-2 p-2 px-4 ' type='email' placeholder='Enter Your Email '
    value={email} 
    onChange={(e)=>{
        setemail(e.target.value)
    }}
    />
    <input className='border-2 boredr-red-600 rounded-full border-red-500 text-xl  outline-none bg-transparent placeholder:text-center m-2 p-2 px-4' type='password' placeholder='Enter Your Password'
    value={password}
     onChange={(e)=>{
        setpassword(e.target.value)
      
        
    }}
    />
    <button className='bg-red-700 p-2 rounded-[35px] hover:bg-red-500 px-4'  >
        Log in
    </button>
</form>
        </div>

    </div>
  )
}

export default Login