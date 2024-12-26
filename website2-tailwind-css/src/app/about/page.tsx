import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div className="travel px-8 lg:px-32 py-20 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-12">What People Say <br /> About Us.</h1>

            <div className="img mb-8">
                <Image 
                    src="/img5.jpg" alt="image"
                    width={150}
                    height={150}
                    className="mx-auto"
                />
            </div>

            <div className="para px-5 lg:px-20">
                <p className="text-lg sm:text-xl mb-2">“On the Windows talking painted pasture yet its </p> 
                <p className="text-lg sm:text-xl mb-2">express parties use. Sure last upon he same as</p>
                <p className="text-lg sm:text-xl">knew next. Of believed or diverted no.”</p>
            </div>
            
            <div className="card mt-16 flex flex-wrap justify-center gap-8">
                <div>
                    <Image
                        src="/img9.jpg" alt="logo"
                        width={100}
                        height={70}
                        className="mx-auto"
                    />
                </div>
                <div>
                    <Image
                        src="/img10.jpg" alt="logo"
                        width={100}
                        height={70}
                        className="mx-auto mt-5"
                    />
                </div>
                <div>
                    <Image
                        src="/img11.jpg" alt="logo"
                        width={100}
                        height={70}
                        className="mx-auto"
                    />
                </div>
                <div className="card1">
                    <Image
                        src="/img12.jpg" alt="logo"
                        width={100}
                        height={30}
                        className="mx-auto mt-10"
                    />
                </div>
                <div className="card1">
                    <Image
                        src="/img13.jpg" alt="logo"
                        width={100}
                        height={30}
                        className="mx-auto mt-8"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;
