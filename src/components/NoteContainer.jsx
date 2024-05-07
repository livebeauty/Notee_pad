import React, { useState } from 'react'
import NoteInput from './NoteInput'
import NoteColor from './NoteColor'
import Note from './Note';


const NoteContainer = () => {
  const [Container, setContainer] = useState([]);
  const [InputText, setInputText] = useState("");
  const [Color, setColor] = useState("#fff");
  const [inputBackgroundColor, setInputBackgroundColor] = useState('#ffffff');
  const handleInput = (e) => {
    setInputText(e.target.value)
  }

  const handleAddContainer = () =>{
    if (InputText.trim() !== "") {
      const newContainer = {
        id: new Date().getTime(),
        color:Color,
        notes: InputText,
        createdAt:new Date().toLocaleString(),
      }
      setContainer([...Container,newContainer]);
      setInputText("")
    }
  }

  const handleDeleteContainer = (id) => {
  setContainer(Container.filter((item) => item.id !== id))
  }
 
 

  const handleColor = (color) => {
    setColor(color)
    setInputBackgroundColor(color);
  }

  return (
    <div className=''>
      <h1 className='text-5xl font-semibold mb-5 text-center '>Note-Pad</h1>
      <NoteColor  handleColor={handleColor}/>
      <NoteInput Color={Color} InputText={InputText}  InputBackground={inputBackgroundColor}  handleInput={handleInput} handleAddContainer={handleAddContainer} Container={Container} handleDeleteContainer={handleDeleteContainer}/>
    </div>
  )
}

export default NoteContainer
