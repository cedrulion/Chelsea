import React, { useState } from 'react'


function NewBlog() {
  const [Title,setTitle] = useState('');
  const [Description,setDescription] = useState('');

  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(Title);
   fetch('http://localhost:3000/Blogs',{
      method: 'POST',
       headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          Title:Title,
          Description:Description,
          }),
       

     }
 
   )
  }
 
  return (
    <div  class=" py-4 px-2 bg-cyan-900 flex flex-end w-13 justify-center ">
    
      {/* <form action="" class="p-20" onSubmit={handlesubmit}>
      <input value={Title} onChange={(e)=> setTitle(e.target.value)} class=" border-1 hover:bg-white-200 color-white p-1" type="text" placeholder='Title' /><br />
      <input value={Description} onChange={(e)=> setDescription(e.target.value)} class="hover:bg-white-200 p-1" type="text" placeholder='Description' /><br />
      <button class="text-center items-center  bg-red-600">submit</button>
      </form>   */}
      
    <form action="" class="p-20" onSubmit={handlesubmit}>
      <input value={Title} onChange={(e)=> setTitle(e.target.value)} class=" border-1 hover:bg-white-200 color-white p-1" type="text" placeholder='Title' /> <br />
      <input value={Description} onChange={(e)=> setDescription(e.target.value)} class="hover:bg-white-200 p-1" type="text" placeholder='Description' /><br />
      <button class="text-center items-center  bg-red-600">submit</button>
      </form>
    </div>
  )
}

export default NewBlog
