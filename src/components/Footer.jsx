import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-between my-[50px] flex-wrap max-md:flex-col max-md:items-center'>
      <div className="text-[25px] font-semibold max-md:pb-3 ">@2024 All Rights Resevered</div>
      <div className="text-[25px] font-semibold max-md:pb-3">Designed By Sharique Shaikh</div>
      <div className="flex gap-4">
        <a className="" href='#'><img className='w-12' src="./instagram.svg" alt="" /></a>
        <a className="" href='#'><img className='w-12' src="./facebook.svg" alt="" /></a>
        <a className="" href='#'><img className='w-12' src="./twitter.svg" alt="" /></a>
      </div>
    </div>
  );
}

export default Footer;
