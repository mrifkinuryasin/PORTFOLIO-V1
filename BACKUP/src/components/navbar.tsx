import React from 'react'

type Props = {
  currentPage: string
  onNavigate: (page: string) => void
}

const Navbar = ({ currentPage, onNavigate }: Props) => {
  const menus = ['Dashboard', 'Sertifikat']

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-around py-3 border-t border-gray-700">
      {menus.map((menu) => (
        <button
          key={menu}
          className={`text-sm px-4 py-2 rounded-full transition ${
            currentPage === menu
              ? 'bg-blue-500 text-white'
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => onNavigate(menu)}
        >
          {menu}
        </button>
      ))}
    </div>
  )
}

export default Navbar
