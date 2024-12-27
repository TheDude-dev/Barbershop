import Image from "next/image";
import React from "react";

const PopularServices : React.FC = () => {
    
      return(<section className="bg-popular px-10 py-10">
        <div className="text-white mb-8 text-7xl place-items-center font-medium">
          <div className="mt-10">
          <Image
                src="/images/scissorspopular.png"
                alt="service photo"
                width={200}
                height={50}
                />
          </div>
            <h4>Popular Services</h4>
        </div>
        <div className="text-white text-2xl place-items-center font-light">
            <h2> We consider your look our responsibility</h2>
        </div>
        <div className="mt-10 flex items-center justify-between">
        <div className="border-2 border-golden">
          <Image
                src="/images/haircut.png"
                alt="service photo"
                width={200}
                height={100}
                />
          </div>
          <div className="border-2 border-golden">
          <Image
                src="/images/haircut.png"
                alt="service photo"
                width={200}
                height={100}
                />
          </div >
          <div className="border-2 border-golden">
          <Image
                src="/images/haircut.png"
                alt="service photo"
                width={200}
                height={100}
                />
          </div>
          <div className="border-2 border-golden">
          <Image
                src="/images/haircut.png"
                alt="service photo"
                width={200}
                height={100}
                />
          </div>
        </div>
        
      </section>)
}


export default PopularServices