import Image from "next/image";
import React from "react";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const Contacts : React.FC = () => {
    
      return(<section className="bg-popular px-20 py-20">
        <div className="text-white mb-6 text-7xl place-items-center font-medium">
          <div className="mt-10">
          <Image
                src="/images/scissorspopular.png"
                alt="service photo"
                width={200}
                height={50}
                />
          </div>
            <h1>Contacts</h1>
        </div>
        <div className="text-white text-1xl place-items-center font-light">
            <h2> Every client leaves happy with a fresh haircut</h2>
        </div>
        <div className="mt-10 px-10 py-10 flex items-center justify-between">
            <div className="flex flex-row items-center space-x-4 text-white ">
              <div className="space-y-10">
                <p className="text-golden">
                  We're ready to serve real men, who value service 
                  <br/>
                  and tradition. We never miss
                </p>
                <div className="flex flex-row space-x-2 items-center">
                <MdEmail className="text-golden"/>
                <a href="mailto:bonheurbalekoua@gmail.com">bonheurbalekoua@gmail.com</a>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                <MdOutlineLocationOn className="text-golden"/>
                <a>Mikhukla Makaya</a>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                <MdLocalPhone className="text-golden"/>
                <a href="tel:+79099834935">+79099834935</a>
                </div>
              </div>
           <Image
                src="/images/bigscissorsrotated.png"
                alt="service photo"
                width={400}
                height={100}
                />
                <form>
                  
                </form>
          </div>  
      </div>
      </section>)
}


export default Contacts