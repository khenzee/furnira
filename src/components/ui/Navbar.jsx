"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';
import { useCart } from "@/context/CartContext";

function Navbar() {
    const { cartCount, setIsCartOpen } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navlinks = [
        {
            label: "Products",
            href: "/product"
        },
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
        <nav className="w-full ">
            {/*Desktop nav header */}
            <div className={`${styles.navbg} flex justify-between items-center w-full mx-auto px-4 md:px-8 lg:px-16 py-6`}>
                <div>
                    <Link href={"/"} >
                        <span className="font-semibold text-2xl">Furniora</span>
                    </Link>
                </div>
                <div className="lg:flex gap-6 hidden items-center">
                    {navlinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.href} className="hover:text-gray-600 transition-colors">
                                {link.label}
                            </Link>
                        )
                    })}
                </div>
                <div className="flex items-center gap-4 lg:gap-6">
                    <div className="cursor-pointer hover:text-gray-600 transition-colors"><SearchIcon  /></div>
                    <div 
                        className="flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors"
                        onClick={() => setIsCartOpen(true)}
                    >
                        <ShoppingCartOutlinedIcon />
                        <span className="text-sm font-medium">{cartCount}</span>
                    </div>
                    <div className="lg:hidden cursor-pointer hover:text-gray-600 transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
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
