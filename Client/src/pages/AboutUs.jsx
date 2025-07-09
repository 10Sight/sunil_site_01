import React from "react";

const AboutUs = () => {
  return (
    <div className="relative bg-white">
      {/* Top Black Banner */}
      <div className="bg-black text-center p-8 pb-28 mb-24">
        <h1 className="text-white text-5xl font-bold mb-4">The Story of Jaibros...</h1>
        <p className="text-white text-lg">Our ethos and values.</p>
      </div>

      {/* White Floating Content Box */}
      <div className="absolute top-[160px] w-full flex justify-center px-4">
        <div className="bg-white shadow-md rounded-md p-6 max-w-5xl w-full text-gray-800">
          <p className="mb-4">
            Jaibros was established in 2008, and since then, it has become a leading supplier of quality CNC machine tools and consumables.
            Our founding pillars of perfection, reliability, and customer satisfaction have motivated our growth and ensured our esteemed place in the market.
          </p>

          <p className="font-semibold mt-4 mb-2">Legacy of Quality</p>
          <p className="mb-4">
            The products that we buy are sourced from the most trusted manufacturers in the industry, expertized in their work and diligent regarding quality.
            So rigorous is the selection process that every single product we use is tested for strength on the highest industrial standard.
            From cutting-edge CNC machines to precision tools and accessories, our fine comprehensive range caters to diverse customer needs.
          </p>

          <p className="font-semibold mt-4 mb-2">Customer-centric Approach:</p>
          <p>
            At Jaibros, our customers hold the top ranking in our priority list.
            In addition to that, our team of experts strives for optimum and superior service and support.
            We make an honest effort to understand your specific requirements and provide solutions to optimize machining operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
