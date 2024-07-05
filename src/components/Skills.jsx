import React from 'react';

const Skills = ({icon, title, extract, className}) => {
  return (
    <div className={className} >
      <div className="text-[#1d4ed8]">{icon}</div>
      <div className="text-[25px] font-semibold ">{title}</div>
      <div className="text-gray-500 mb-[30px] ">{extract}</div>
    </div>
  );
}

export default Skills;
