import React from 'react'
import style from './Loading.module.css'

function Loading({setLoading}) {
    setTimeout(()=>{
        setLoading(false)
    },2000)
  return (
    <div>
      <span  className={style.loader} >Loading...</span>
      </div>
  )
}

export default Loading