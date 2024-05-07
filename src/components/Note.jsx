import React from 'react'

const Note = ({Container,handleDeleteContainer}) => {




  return (
    <div className='grid gap-5 grid-cols-4 mt-5 '>
      {Container.slice(0).reverse().map((notes) => (
        <div
         key={notes.id}
         className='border border-gray-300 rounded-lg px-6 py-3 w-[20vw] h-[20vw] flex flex-col'
         style={{ backgroundColor: notes.color }}>
          <p className="mb-2 text-xl font-semibold w-full h-2/3 text-white">{notes.notes}</p>
          <button
            onClick={() => handleDeleteContainer(notes.id)}
            className="px-2 py-5 text-xl font-semibold bg-white  text-black rounded-md hover:bg-black hover:text-white transition-all">
            Delete
          </button>
          <p className="text-sm font-semibold mb-2 flex flex-row-reverse text-white mt-2">{notes.createdAt}</p>
          
        </div>
        
      ))
      
      }
    </div>
  )
}

export default Note
