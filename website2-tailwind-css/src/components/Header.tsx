"use client";

import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="bg-[#d3bebe] text-[#212832] p-5 flex justify-between items-center">
            <h1 className="text-4xl font-bold text-black">Travel.com</h1>
            
            <button 
                className="md:hidden text-2xl text-black" 
                onClick={handleHamburgerClick}
            >
                ☰
            </button>
            
            <nav className={`md:flex gap-10 ${menuOpen ? "absolute top-16 left-0 w-full bg-[#d3bebe] p-5 flex flex-col z-50" : "hidden md:flex-row"} md:items-center`}>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
                    <Link href="/" onClick={handleLinkClick} className="font-bold text-[#212832] hover:underline">Home</Link>
                    <Link href="/about" onClick={handleLinkClick} className="font-bold text-[#212832] hover:underline">About</Link>
                    <Link href="/flight" onClick={handleLinkClick} className="font-bold text-[#212832] hover:underline">Flights</Link>
                    <Link href="/service" onClick={handleLinkClick} className="font-bold text-[#212832] hover:underline">Services</Link>
                    <Link href="/contact" onClick={handleLinkClick} className="font-bold text-[#212832] hover:underline">Contact</Link>
                    <Link href="/cart" onClick={handleLinkClick} className="text-[#212832]">
                        <FaShoppingCart />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
