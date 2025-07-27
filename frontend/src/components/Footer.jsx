import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-900 p-6 text-center text-gray-400 rounded-t-lg mt-8">
        <p>&copy; {new Date().getFullYear()} IETE Students Chapter BIT Mesra. All rights reserved.</p>
        <p className="text-sm mt-2">Designed with ❤️ by the IETE Team</p>
      </footer>
  )
}

export default Footer