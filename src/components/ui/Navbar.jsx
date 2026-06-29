"use client";

import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navlinks = [
        {
            label: "About Us",
            href: "/about-us"
        },
        {
            label: "Sustainability",
            href: "/sustainability"
        },
        {
            label: "Blog",
            href: "/blog"
        },
        {
            label: "Contact Us",
            href: "/contact-us"
        }
    ]
    return(
        <nav className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-6">
            {/*Desktop nav header */}
            <div className="flex justify-between">
                <div>
                    <Link href={"/"} >
                        <span className="font-semibold text-2xl">Furniora</span>
                    </Link>
                </div>
                <div className="lg:flex gap-6 hidden items-center">
                    {/* Product Dropdown */}
                    <div className="relative group cursor-pointer">
                        <span className="hover:text-gray-600 transition-colors">Products</span>
                        
                        {/* Dropdown Content */}
                        <div className="absolute top-full left-0 mt-2 hidden group-hover:flex bg-white text-black shadow-xl rounded-lg p-8 gap-10 z-50 min-w-[600px] border border-gray-100">
                            {/* Our Product Section */}
                            <div className="flex-1">
                                <h3 className="font-bold text-lg mb-4 text-gray-800">Our Product</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Product Cards Placeholders */}
                                    {[1, 2, 3, 4].map((item) => (
                                        <div key={item} className="bg-gray-50 p-4 rounded hover:bg-gray-100 transition-colors cursor-pointer group/card">
                                            <div className="w-full h-24 bg-gray-200 rounded mb-2 group-hover/card:bg-gray-300 transition-colors"></div>
                                            <p className="font-medium text-sm">Product {item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Shop By Room Section */}
                            <div className="w-48 border-l border-gray-100 pl-10">
                                <h3 className="font-bold text-lg mb-4 text-gray-800">Shop By Room</h3>
                                <ul className="flex flex-col gap-3">
                                    {['Living Room', 'Bedroom', 'Dining Room', 'Home Office', 'Outdoor'].map((room) => (
                                        <li key={room}>
                                            <Link href="#" className="text-gray-600 hover:text-black transition-colors block">
                                                {room}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {navlinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.href} className="hover:text-gray-600 transition-colors">
                                {link.label}
                            </Link>
                        )
                    })}
                </div>
                <div className="flex">
                    <div><SearchIcon  /></div>
                    <div className="flex-row-center">
                        <ShoppingCartOutlinedIcon />
                        <span>0</span>
                    </div>
                    <div className=" lg:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(true)}>
                        <MenuOutlinedIcon />
                    </div>
                </div>
            </div>
            {/* mobile nav tray */}
            <div className={`fixed inset-0 bg-white z-50 md:hidden overflow-y-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex justify-between items-center p-4">
                    <Link href={"/"} onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-semibold text-2xl">Furniora</span>
                    </Link>
                    <div className="cursor-pointer p-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <CloseOutlinedIcon />
                    </div>
                </div>
                <div className="flex flex-col p-6 gap-6 text-lg">
                    <div className="flex flex-col gap-4 border-b border-gray-100 pb-6">
                        <span className="font-bold text-gray-400 uppercase text-sm">Products</span>
                        <Link href="#" className="font-medium hover:text-gray-600 pl-4" onClick={() => setIsMobileMenuOpen(false)}>Our Product</Link>
                        <Link href="#" className="font-medium hover:text-gray-600 pl-4" onClick={() => setIsMobileMenuOpen(false)}>Shop By Room</Link>
                    </div>
                    {navlinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.href} className="font-medium hover:text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>
                                {link.label}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
