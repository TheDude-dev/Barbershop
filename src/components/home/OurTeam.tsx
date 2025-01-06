import Image from "next/image";
import React from "react";

const OurTeam : React.FC = () => {
    
      return(<section className="px-20 py-20">
        <div className="text-white mb-6 text-7xl place-items-center font-medium">
          <div className="mt-10">
          <Image
                src="/images/scissorspopular.png"
                alt="service photo"
                width={150}
                height={40}
                />
          </div>
            <h1>Our Team</h1>
        </div>
        <div className="text-white text-1xl place-items-center font-light">
            <h2> Every client leaves happy with a fresh haircut</h2>
        </div>
        <div className="mt-10 px-20 py-20 flex items-center justify-between">
            <div className="flex flex-col items-center space-y-4 text-white ">
        <div className="bg-popular border-2 border-golden">
          <Image
                src="/images/topbarber.png"
                alt="service photo"
                width={300}
                height={600}
                />
                <div className="border-t-2 border-golden mb-4 flex flex-col items-center justify-between">
                    <h2>Timur</h2>
                    <h2>Top Barber</h2>
                </div>
          </div>
          </div> 
          <div className="flex flex-col items-center space-y-4 text-white ">
        <div className="bg-popular border-2 border-golden">
          <Image
                src="/images/topbarber.png"
                alt="service photo"
                width={300}
                height={600}
                />
                <div className="border-t-2 border-golden mb-4 flex flex-col items-center justify-between">
                    <h2>Timur</h2>
                    <h2>Top Barber</h2>
                </div>
          </div>
          </div> 
          <div className="flex flex-col items-center space-y-4 text-white ">
        <div className="bg-popular border-2 border-golden">
          <Image
                src="/images/topbarber.png"
                alt="service photo"
                width={300}
                height={600}
                />
                <div className="border-t-2 border-golden mb-4 flex flex-col items-center justify-between">
                    <h2>Timur</h2>
                    <h2>Top Barber</h2>
                </div>
          </div>
          </div> 
      </div>
      </section>)
}


export default OurTeam