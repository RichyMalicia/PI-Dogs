import React from 'react'

function Loading({setLoading}) {
    setTimeout(()=>{
        setLoading(false)
    },2000)
  return (
    <div>
      <h3>Loading...</h3>
      </div>
  )
}

export default Loading