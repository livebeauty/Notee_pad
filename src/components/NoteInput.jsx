import React from 'react'
import Note from './Note'

const NoteInput = ({InputText,InputBackground,handleInput,handleAddContainer,Container,handleDeleteContainer}) => {
  return (
    <div className='px-10 '>
      <div className='border border-gray-300 rounded-lg px-4 py-4 w-[20vw] h-[20vw] flex flex-col'
       style={{backgroundColor:InputBackground}}>
         <textarea
         
          type='text'
          value={InputText}
          onChange={handleInput}
          placeholder='Enter your note here ...'
          className='w-full h-2/3 text-xl font-semibold border resize-none border-gray-300 rounded-md bg-slate-100 outline-none mb-4 capitalize'
          />
          <button
           onClick={handleAddContainer}
          className='px-4 py-4 bg-slate-400 transition-all rounded-lg text-white font-semibold  hover:bg-slate-600'
          >
            Add Notes
          </button>


       </div>

       <Note Container={Container} handleDeleteContainer={handleDeleteContainer}/> 
    </div>
  )
}

export default NoteInput
