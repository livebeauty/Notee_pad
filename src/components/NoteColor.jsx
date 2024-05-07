import React from 'react'

const NoteColor = ({handleColor}) => {
  return (
    <div className="my-5 flex items-center justify-center">
    <span className="text-2xl font-semibold">Select Color:</span>
    <button
      onClick={() => handleColor("#FF0000")}
      style={{ backgroundColor: "#FF0000" }}
      className="w-6 h-6 px-10 py-5 border border-gray-400 ml-2 mr-2"
    />
    <button
      onClick={() => handleColor("#ff7f0e")}
      style={{ backgroundColor: "#ff7f0e" }}
      className="w-6 h-6 px-10 py-5  border border-gray-400 mr-2"
    />
    <button
      onClick={() => handleColor("#2ca02c")}
      style={{ backgroundColor: "#2ca02c" }}
      className="w-6 h-6 px-10 py-5 border border-gray-400 mr-2"
    />
    <button
      onClick={() => handleColor("#00BFFF")}
      style={{ backgroundColor: "#00BFFF" }}
      className="w-6 h-6 px-10 py-5 border border-gray-400 mr-2"
    />

<button
      onClick={() => handleColor("#ee55f4")}
      style={{ backgroundColor: "#ee55f4" }}
      className="w-6 h-6 px-10 py-5 border border-gray-400 mr-2"
    />
  </div>
  )
}

export default NoteColor
