import React from 'react'

function Nav() {
  return (
    <div className="w-full px-20 py-8 font-['Neue Montreal']" >
        <div className="logo">
             <img src="/3.png" className="h-10 w-auto" alt="Logo" />                  
        </div>
        <div className="links flex gap-4">
          {["Services","Our Works","About Us","Contact Us"].map((item,index)=>(
          <a key={index} className='text-md font-light'>{item} </a>))}
        </div>
    </div>
  )
}

export default Nav