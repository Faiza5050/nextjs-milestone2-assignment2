import Image from "next/image";
import React from "react";

const Flight = () => {
    return (
        <div>
            <div className="main-cont">
                <h1 className="text-center mt-20 text-4xl font-bold">Book your next trip <br /> in 3 easy steps</h1>
                <div className="flight mt-36 flex flex-wrap justify-evenly text-center">
                    <div className="card11 bg-[#84a0d8] border-2 border-solid border-gray-300 rounded-2xl h-80 w-[300px] mb-2 hover:bg-[#DF6951] transition duration-1000">
                        <Image
                            src="/img14.jpg" alt="image"
                            width={100}
                            height={100}
                            className="mx-auto mt-8"
                        />
                        <div>
                            <h2 className="mt-6 text-2xl font-semibold">Choose Destination</h2>
                            <p className="mt-5">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>

                    <div className="card11 bg-[#84a0d8] border-2 border-solid border-gray-300 rounded-2xl h-80 w-[300px] mb-2 hover:bg-[#DF6951] transition duration-1000">
                        <Image
                            src="/img15.jpg" alt="image"
                            width={100}
                            height={100}
                            className="mx-auto mt-8"
                        />
                        <div>
                            <h2 className="mt-6 text-2xl font-semibold">Make Payment</h2>
                            <p className="mt-5">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>

                    <div className="card11 bg-[#84a0d8] border-2 border-solid border-gray-300 rounded-2xl h-80 w-[300px] mb-2 hover:bg-[#DF6951] transition duration-1000">
                        <Image
                            src="/img16.jpg" alt="image"
                            width={100}
                            height={100}
                            className="mx-auto mt-8"
                        />
                        <div>
                            <h2 className="mt-6 text-2xl font-semibold">Reach Airport <br /> on Selected Date</h2>
                            <p className="mt-5">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Flight;
