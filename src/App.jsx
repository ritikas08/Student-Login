import {useState} from 'react'
import './App.css'
import { useForm } from 'react-hook-form' 

function App(){
  const{
    register,
    handleSubmit,
    setError,
    formState:{errors, isSubmitting},
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve()
      }, d*1000);
    })
  }
  const onSubmit = async (data)=>{
    let r = await fetch("http://localhost:3000/",{method:"POST",
       headers:{"Content-Type":"application/json",},
      body:JSON.stringify(data)})
      let res = await r.text()
      console.log(data,res)
  }
  return(
    <>
    
    <div className='flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
      
      <div className='w-full max-w-sm sm:max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md'>
     {isSubmitting && <div className='text-center text-sm font-medium text-amber-900 animate-pulse'>
      Loading.....</div>}
    <h1 className='text-2xl mb-6 text-center font-bold text-amber-950 sm:text-3xl'>Student Login</h1>
    {/* form */}
<form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'> 
  <div className='space-y-4 rounded-md shadow-xs'>
    </div>

    {/*Username field */}

<div className='space-y-1.5'>
    <label htmlFor="username" className='block text-xs sm:text-sm font-semibold text-gray-700 pl-0.5'>
      Username
    </label>
 <input placeholder='Email' {...register("username",{required:{value:true, message:"This field is required"},minLength:{value:4, message:"Min length is 4"}})} type="text" 
  className='block w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-950 placeholder-gray-400 focus:border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-900/20 text-sm sm:text-base transition-all duration-200 shadow-xs'/> 
{errors.username && <div className='mt-1 text-xs text-red-600 font-medium pl-1 animate-fadeIn'>{errors.username.message}</div>}
</div>

{/* {Password field} */}

  <div className='space-y-1.5'>
    <label htmlFor="password" className='block text-xs sm:text-sm font-semibold text-gray-700 pl-0.5'>
      Password
    </label>
<input placeholder='Password' {...register("password",{required:{value:true, message:"This field is required"},minLength:{value:4, message:"Min length is 4"}})} type="text"
className='block w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-gray-950 placeholder-gray-400 focus:border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-900/20 text-sm sm:text-base transition-all duration-200 shadow-xs'/> 
{errors.password && <div className='mt-1 text-xs text-red-600 font-medium pl-1 animate-fadeIn'>{errors.password.message}</div>}
</div>

{/* {Submit button} */}
<div>
<input disabled ={isSubmitting} type='submit' value='Login' className='group relative flex w-full justify-center rounded-lg bg-amber-900 px-4 py-2 text-sm sm:text-base font-bold text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-900-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer shadow-md hover:shadow-amber-700-200 active:scale-[0.99] transition-all duration-150'/>
</div>

{/* Form Error Messages */}
{errors.myform && <div className='rounded-lg bg-red-50 p-3 text-xs sm:text-sm text-red-700 border border-red-200 font-medium'>{errors.myform.message}</div>}
{errors.blocked && <div className='rounded-lg bg-red-50 p-3 text-xs sm:text-sm text-red-700 border border-red-200 font-medium'>{errors.blocked.message}</div>}
</form>
</div>
    </div>
    
    </>
  )
}

export default App
