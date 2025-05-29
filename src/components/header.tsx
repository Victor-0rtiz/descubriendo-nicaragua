import React from 'react'

export default function Header() {
    return (
        <header className=" bg-[#145068]">
            <nav className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between py-4 md:py-5 relative">
                <a href="#">
                    <img src="logo.png" alt="logo" className='w-40'/>
                </a>


                <div className="md:hidden">
                    <button id="menu-toggle" className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>


                <ul id="menu"
                    className="hidden absolute top-full left-0 w-full bg-white md:static md:flex md:space-x-10 md:items-center text-gray-600 text-sm font-medium md:w-auto md:bg-transparent md:mt-0 mt-4 shadow md:shadow-none z-10 px-6 py-4 md:py-0">
                    <li><a href="#" className="block text-white py-2 hover:text-gray-200 transition">Turismo</a></li>
                    <li><a href="#" className="block text-white py-2 hover:text-gray-200 transition">Gastronomia</a></li>
                    <li><a href="#" className="block text-white py-2 hover:text-gray-200 transition">Cultura</a></li>
                    <li><a href="#" className="block text-white py-2 hover:text-gray-200 transition">Tradiciones</a></li>

                </ul>


            </nav>
        </header>
    )
}
