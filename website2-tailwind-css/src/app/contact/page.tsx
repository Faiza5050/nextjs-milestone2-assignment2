import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Contact = () => {
    return (
        <div className="bg-[#f7e6e6] text-[#181E4B] min-h-screen px-20">
            <h1 className="text-center text-4xl font-bold mt-20">Travel.</h1>
            <h2 className="text-center text-2xl mt-4">Book your trip in minute, get full <br /> Control for much longer.</h2>

            <div className="contact flex flex-wrap justify-center text-center gap-8 mt-8">
                <div className="icon1">
                    <a href="#" className="text-2xl">
                        <FaFacebook />
                    </a>        
                </div>

                <div className="icon1">
                    <a href="#" className="text-2xl">
                        <FaTwitter />
                    </a>        
                </div>

                <div className="icon1">
                    <a href="#" className="text-2xl">
                        <FaInstagram />
                    </a>
                </div>

                <div className="icon1">
                    <a href="#" className="text-2xl">
                        <IoLogoYoutube />
                    </a>
                </div>
            </div>

            <div className="main-company flex flex-wrap justify-evenly items-center mt-20">
                <div className="company text-center">
                    <h3 className="text-xl font-bold">Company</h3>
                    <ul className="mt-4">
                        <li><a href="#" className="text-lg">About</a></li>
                        <li><a href="#" className="text-lg">Careers</a></li>
                        <li><a href="#" className="text-lg">Mobile</a></li>
                    </ul>
                </div>
            
                <div className="cont text-center">
                    <h3 className="text-xl font-bold">Contact</h3>
                    <ul className="mt-4">
                        <li><a href="#" className="text-lg">Help/FAQ</a></li>
                        <li><a href="#" className="text-lg">Press</a></li>
                        <li><a href="#" className="text-lg">Affilates</a></li>
                    </ul>
                </div>

                <div className="more text-center">
                    <h3 className="text-xl font-bold">More</h3>
                    <ul className="mt-4">
                        <li><a href="#" className="text-lg">Airlinefees</a></li>
                        <li><a href="#" className="text-lg">Airline</a></li>
                        <li><a href="#" className="text-lg">Low fare tips</a></li>
                    </ul>
                </div>
            </div>

            <form>
                <div className="mail flex flex-col justify-center text-center items-center mt-12">
                    <input
                        type="email"
                        placeholder="Your e-mail"
                        className="input md:w-2/5 h-12 sm:w-full justify-center bg-slate-800 rounded-xl pl-5"
                    />
                    <button
                        type="submit"
                        className="bttn bg-[#F1A501] text-white font-bold text-lg h-12 w-48 justify-center rounded-lg mt-8">
                        Subscribe
                    </button>
                </div>      
            </form>
        </div>
    );
};

export default Contact;
