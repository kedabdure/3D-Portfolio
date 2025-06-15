'use client'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-lg mt-4">Loading...</p>
    </div>
  )
}

export default Loading
