import React from 'react';

const CommonComp = ({heading, title, candidate, parag, btn, className}) => {
  return (
    <div>
       <div className="max-md:mb-10 p-2">
          <h3 className="text-[50px] font-semibold">{heading}</h3>
          <h2 className="text-[35px] font-semibold">
            {title}
          </h2>
          <p className="mt-[10px] text-[18px] text-gray-500">
            I'm{" "}
            <span className="text-[#1d4ed8] font-semibold">{candidate}</span>
            {parag}
          </p>
          <button className={`${className} relative bg-[#1d4ed8] py-[5px] px-2 mt-4 rounded-lg  text-white text-[16px]`}>
            {btn}
          </button>
        </div>
    </div>
  );
}

export default CommonComp;
