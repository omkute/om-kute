import React from "react";
import Image from "next/image";
import design from "../../public/design.png";

function Cards() {
  return (
    <div>
      {/* Cards */}
      <div className="pb-9">
        <div className="text-center shadow-xl rounded-xl py-4">
          <Image alt="img" src={design} height="100pxss" width="100px" />
          <h3 className="my-10 font-medium p-t8">Beautyful designs</h3>
          <p className="py-2 sm: px-4">
            Creating Eligant designs suited for your needs following core desing
            theory
          </p>
          <h4 className="py-4 text-cyan-600 sm: px-4">
            Programming
          </h4>
          <p className="py-1 text-gray-800">Html</p>
          <p className="py-1 text-gray-800">CSS</p>
          <p className="py-1 text-gray-800">Javascript</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
