import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setText, lowerCase, upperCase } from '../redux/textConverter/textSlice'

const TextConverter = () => {
  const text = useSelector((state) => state.textConversion.value)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setText(e.target.value))
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
      />
      <button onClick={() => dispatch(lowerCase())}>Lowercase</button>
      <button onClick={() => dispatch(upperCase())}>Uppercase</button>
      <div>Converted Text: {text}</div>
    </div>
  )
}

export default TextConverter