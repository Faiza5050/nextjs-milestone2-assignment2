import React from "react";
import Image from "next/image";

const Home = () => {
    return (
        <div className="main-container px-5 lg:px-32">
            
            <p className="text-[#DF6951] pt-20">Best Destinations around the world</p>
            <h1 className="text-4xl lg:text-5xl font-bold my-6">
                Travel, enjoy <br /> and live a new <br /> and full life
            </h1>
            <div className="pt-[50px] pl-5 w-full sm:w-[400px]">
                <p>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
                    Park gate sell they west hard for the.
                </p>
            </div>

            <section className="relative">
                <div className="w-full">
                    <Image
                        src="/traveller1.jpg"
                        alt="Traveller Image"
                        width={600}
                        height={750}
                        className="relative object-cover rounded-lg shadow-lg 
                            lg:left-96 lg:-mt-80 mb-20 sm:left-0 sm:top-[50%] md:left-0 md:top-[60%] 
                            w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto" 
                    />
                    
                    <Image
                        src="/plane.jpg"
                        alt="plane"
                        width={150}
                        height={100}
                        className="absolute -mt-[60%] -mb-80 left-[10%] sm:left-[50%] md:left-[55%] transform -translate-x-1/2"
                    />
                </div>
            </section>

            <div className="flex items-center gap-5 lg:-mt-64 sm:mt-40">
                <button className="bg-[#F1A501] text-white px-4 py-2 rounded-lg hover:bg-[#DF6951]">
                    Find out more
                </button>
                <Image
                    className="cursor-pointer"
                    src="/play.jpg"
                    alt="play button"
                    width={50}
                    height={50}
                />
                <h3 className="text-[#686D77] text-xl cursor-pointer">Play Demo</h3>
            </div>
        </div>
    );
};

export default Home;
