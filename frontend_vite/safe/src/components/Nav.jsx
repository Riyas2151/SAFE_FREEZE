import React from 'react'

function Nav() {
  return (
    <div className=" fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center" >
        <div className="logo">
             <img src="/logo.png" className="h-10 w-auto" alt="Logo" />                  
        </div>
        <div className="links flex gap-10">
          {["Home","Services","Our Works","About Us","contact Us"].map((item,index)=>(
          <a key={index} className={`text-lg font-light capitalize ${index === 4 && "ml-32"}`}>{item} </a>))}
          {/* to seprate contact us we use dynamic jsx we use classname in jsx brackets alow us to use js */}
        </div>
    </div>
  )
}

export default Nav