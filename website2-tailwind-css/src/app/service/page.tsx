import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="px-20 bg-[#f7e6e6] min-h-screen text-[#181E4B]">
      <h1 className="text-center text-4xl font-bold mt-20">We Offer Best Services</h1>

      <div className="flex flex-wrap justify-evenly gap-6 mt-20">
        <div className="weather flex flex-col items-center gap-2">
          <Image src="/img6.jpg" alt="image" width={150} height={100} />
          <h3 className="text-lg font-bold">Calculated Weather</h3>
          <p className="text-center">Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>

        <div className="weather1 flex flex-col items-center gap-2">
          <Image src="/plane.jpg" alt="image" width={150} height={150} />
          <h3 className="text-lg font-bold">Best Flights</h3>
          <p className="text-center">Engrossed listening. Park gate sell they west hard for the.</p>
        </div>

        <div className="weather2 flex flex-col items-center gap-2">
          <Image src="/img7.jpg" alt="image" width={120} height={100} />
          <h3 className="text-lg font-bold">Local Events</h3>
          <p className="text-center">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
        </div>

        <div className="weather3 flex flex-col items-center gap-2">
          <Image src="/img8.jpg" alt="image" width={150} height={100} />
          <h3 className="text-lg font-bold">Customization</h3>
          <p className="text-center">We deliver outsourced aviation services for military customers</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
