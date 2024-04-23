"use client"
import dynamic from 'next/dynamic'
import React from 'react'
import HOC from '../Layout/HOC'

// const HOC =dynamic(()=>import("../Layout/HOC"))



const DashBoard = () => {
  return (
    <div>DashBoard</div>
  )
}

export default HOC(DashBoard)