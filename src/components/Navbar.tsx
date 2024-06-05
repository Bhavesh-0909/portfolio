import Image from 'next/image'
import React from 'react'
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <div>
        <div>
            <Image src="../../public/next.svg" alt="logo" width={100} height={100} />
        </div>
        <div></div>
        <div>
            <MdDarkMode/>
        </div>
    </div>
  )
}

export default Navbar