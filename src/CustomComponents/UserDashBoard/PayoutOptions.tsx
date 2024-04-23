"use client"
import dynamic from 'next/dynamic'
import React from 'react'
import HOC from '../Layout/HOC'
// const HOC =dynamic(()=>import("../Layout/HOC"))



const PayoutOptions = () => {
  return (
    <div>PayoutOptions</div>
  )
}

export default HOC(PayoutOptions)