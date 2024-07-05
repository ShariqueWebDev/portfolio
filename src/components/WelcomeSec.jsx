"use client";
import Image from "next/image";
import React from "react";
import CommonComp from "./CommonComp";
import Skills from "./Skills";
import { skillObj } from "../../utils/staticData";
import MySlider from "./MySwiper";
import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Form, Input, message, Space } from "antd";
import Footer from "./Footer";

const WelcomeSec = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center max-md:flex-wrap">
        <CommonComp
          heading={"Welcome"}
          title={"I have Web Development Exprience"}
          candidate={"Sharique Shaikh"}
          parag={
            ", a Web Developer, I have been helping to create businesses website and E-commerce websites"
          }
          btn={"Contact Me"}
          className={"animBtn"}
        />

        <div className=" max-md:w-full my-14 p-2">
          <div className="flex justify-end max-md:justify-center border-black">
            <div className="relative border bg-[#1d4ed8] w-[300px] h-[300px]">
              <div className="absolute w-[0px] h-[200px] border-[2px] border-[#4089ff] top-10 right-[28px] z-20"></div>
              <div className="absolute w-[300px] h-[300px] border-[4px] border-[#4089ff] top-7 right-7"></div>
              <Image
                src="/main_image.png"
                width={300}
                height={400}
                alt="wide image"
                className="absolute left-0 z-10 bottom-0 hover:scale-110 transition-all duration-500 ease-in"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-md:items-center mt-[80px] mb-10 max-md:flex-col">
        <div className="numWidth flex flex-col max-md:items-center">
          <div className="numDeco">11+</div>
          <p className="numMsg">Satisfied Clients</p>
        </div>
        <div className="numWidth flex flex-col items-center border-x-2 max-md:border-x-0 max-md:border-y-2 max-md:mt-8 max-md:mb-8 max-md:pt-2 max-md:pb-2 ">
          <div className=" flex flex-col max-md:justify-center items-center">
            <div className="numDeco">20+</div>
            <p className="numMsg">Projects Completed</p>
          </div>
        </div>
        <div className="numWidth flex flex-col items-end max-md:items-center">
          <div className="flex flex-col max-md:justify-center items-center">
            <div className="numDeco">99+</div>
            <p className="numMsg">Reviews Given</p>
          </div>
        </div>
      </div>
      <hr className="mt-[80px]" />
      <div className="mt-[80px] max-sm:mt-[50px] flex items-center max-md:flex-wrap max-md:items-center">
        <CommonComp
          heading={"My Skills"}
          title={"Why Hire me For Your React Project?"}
          candidate={""}
          parag={
            "I am specialist in Javascript, Tailwind, nodejs and PostgresSql. My passion is to solve problems through effective design and strong logic building"
          }
          btn={"Hire Me"}
          className={"hireBtn"}
        />
        <div className="ml-[20px] pl-10 max-md:pl-0 max-md:mt-2">
          <div className="">
            {skillObj.map((item) => {
              return (
                <Skills
                  icon={item.icon}
                  title={item.title}
                  extract={item.extract}
                  className={
                    "hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300"
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex my-[80px] max-sm:mt-[50px] max-md:flex-col">
        <div className="max-w-[700px] w-full">
          <CommonComp
            heading={"Project"}
            title={"My Creative Works Latest Projects"}
            candidate={""}
            parag={
              "I am specialist in UI/UX and React Js. programming is chock-full of common tasks that most applications must solve. I can use React Js to save time and perform repetitive tasks"
            }
            btn={"Show More"}
            className={"showMore"}
          />
        </div>
        <div className=" shadowBox mx-3 border-gray-200 overflow-hidden max-w-[500px]">
          <MySlider />
        </div>
      </div>
      <hr />
      <div className="flex justify-center">
        <div className="max-md:mb-10 p-2  max-w-[600px] text-center ">
          <h3 className="text-[50px] font-semibold">
            {"Let's Discuss Your Project"}
          </h3>
          <h2 className="text-[35px] font-semibold">{""}</h2>
          <p className="mt-[10px] text-[18px] text-gray-500 text-center ">
            <span className="text-[#1d4ed8] font-semibold">
              {"Let's make something new"}
            </span>
            {
              ", different and more meaningful or thing more visual and eyes cattchys for users"
            }
          </p>
        </div>
      </div>
      <div className="flex my-[70px] justify-between flex-wrap max-md:justify-center items-center">
        <div className="max-w-[380px]  shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px] ">
          <div className="flex p-4 rounded-md mb-8 connectivity">
            <div className="mr-3 bg-[#1d4ed8] p-5 rounded-md">
              <MdCall size={40} />
            </div>
            <div className="ml-3">
              <div className="text-[25px] font-semibold ">Call Me</div>
              <a href="tel:0000000000" className="text-[17px] text-gray-500 ">
                +91 9123456789
              </a>
            </div>
          </div>
          <div className="flex p-4 rounded-md mb-8 connectivity">
            <div className="mr-3 bg-[#1d4ed8] p-5 rounded-md">
              <MdEmail size={40} />
            </div>
            <div className="ml-3">
              <div className="text-[25px] font-semibold ">Email</div>
              <a
                href="mailto:test@test.com"
                className="text-[17px] text-gray-500"
              >
                www.shariqueinfo@gmail.com
              </a>
            </div>
          </div>
          <div className="flex p-4 rounded-md mb-8 connectivity">
            <div className="mr-3 bg-[#1d4ed8] p-5 rounded-md">
              <FaLocationDot size={40} />
            </div>
            <div className="ml-3">
              <div className="text-[25px] font-semibold">Address</div>
              <div className="text-[17px] text-gray-500">Mumbai, India</div>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <Form>
            <Form.Item
              rules={[
                {
                  required: "true",
                  message: "Full name is required",
                },
              ]}
            >
              <Input className="text-[18px]" placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: "true",
                  message: "Email is required",
                },
              ]}
            >
              <Input className="text-[18px]" placeholder="Your Email" />
            </Form.Item>
            <Space direction="">
              <Form.Item
                rules={[
                  {
                    required: "true",
                    message: "Phone number is required",
                  },
                ]}
              >
                <Input className="text-[18px]" placeholder="Phone Number" />
              </Form.Item>
              <Form.Item>
                <Input className="text-[18px]" placeholder="Budget" />
              </Form.Item>
            </Space>
            <Form.Item>
              <Input.TextArea
                className="text-[18px]"
                rows={6}
                placeholder="Write your description"
              />
            </Form.Item>
            <Button
              htmlType="submit"
              size="large"
              className="bg-[#1d4de8] text-white font-semibold"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default WelcomeSec;
