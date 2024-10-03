import React from 'react'
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "About Me",
    description: "About Me - Manas Khandelwal",
};
function page() {
  return (
    <div className='container'>About Me</div>
  )
}

export default page