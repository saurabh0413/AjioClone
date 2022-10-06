import React from 'react'
import { useParams } from 'react-router-dom'

const Singlepage = () => {
    const seeit = useParams()
    console.log("params",seeit)
  return (
    <div>Singlepage</div>
  )
}

export default Singlepage