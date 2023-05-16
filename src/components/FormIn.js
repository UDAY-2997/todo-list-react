import React from 'react'

export const form = () => {
  return (
    <form>
      <input type='text' className='form-in' placeholder='What to do ?' />
      <button type='submit' className='in-btn'>Add task</button>
    </form>
  )
}
