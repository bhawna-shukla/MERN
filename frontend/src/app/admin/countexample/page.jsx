'use client'
import React,{useState} from 'react'

const CountExample = () => {
    const [count,setCount] = useState(0)

    const  handleIncrement = () =>{
        setCount(count+1) 
    }
    const handleDecrement = () => {
        setCount(count-1)
    }

    const handleReset = ()=> {
        setCount(0)
    }
    //   state (hooks)
  


  return (
    <div className='flex flex-col justify-center items-center py-10'>
        <h1 className='font-bold text-5xl text-lime-500 underline decoration-solid'>Event Handling</h1>
        <h4 className='text-purple-700 text-3xl text-bold mt-5 mb-10 '>Number Of Counts : {count} </h4>
        <div className='flex gap-2'>
            <button onClick={handleIncrement} className='border p-2 bg-blue-500 text-white rounded-lg border-2 border-stone-500'>Increase</button>
            <button onClick={handleDecrement} className='border p-2 bg-green-500 text-white rounded-lg bordr-2 border-stone-500'>Decrease</button>
            <button onClick={handleReset} className='border p-2 bg-red-500 text-white rounded-lg border-2 border-stone-500' >Reset</button>
            
        </div>
    </div>
   
  )
}

export default CountExample


















// 'use client';
// import React, {useState} from 'react'

// const CounterExample = () => {

//     const [count, setCount] = useState(0)

//     const handleIncrement = () => {
//         setCount(count+1)
//     }

//     const handleDecrement = () => {
//         setCount(count-1)
//     }

//     const handleReset = () => {
//         setCount(0)
//     }


//   return (
//     <div className='flex flex-col justify-center items-center py-20'>
//       <h1 className='font-bold text-4xl'>Count Handling</h1>
//       <h4 className='mt-5 mb-10 font-bold text-2xl'>Number of Counts : {count}</h4>
//       <div className='flex gap-2'>
//         <button onClick={handleIncrement} className='border p-2 bg-violet-800 text-white rounded-lg'>Increment</button>
//         <button onClick={handleDecrement} className='border p-2 bg-violet-800 text-white rounded-lg'>Decrement</button>
//         <button onClick={handleReset} className='border p-2 bg-violet-800 text-white rounded-lg'>Reset</button>
//       </div>
//     </div>
//   )
// }

// export default CounterExample