import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { BiMessageMinus } from "react-icons/bi";
import { toast } from "react-hot-toast";
import CssLoder from "../CssLoder/CssLoder";
const HomeContacat = () => {

  const [loading, setLoading] = useState(false)

  const form = useRef();



  const HandelMessage = (e) => {

    e.preventDefault();

    setLoading(true)

    const text = e.target;
    const name = text.name.value;
    const email = text.email.value;
    const messageText = text.message.value;

    const message = {
      email,
      name,
      messageText
    }
    console.log(message)

    fetch(`${process.env.REACT_APP_LOCALHOST}message`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        emailjs
          .sendForm(
            "service_59c51av",
            "template_1ytvp64",
            form.current,
            "1vXZljCTPFLkGyAgS"
          )
          .then(
            (result) => {
              console.log(result.text);
              toast.success(
                "successfully submit your massage | our team will get your touch soon"
              );
              text.reset();
              setLoading(false)
            },
            (error) => {
              console.log(error.text);
            }
          );
      });



  }



  const data = [
    {
      logo: "https://i.ibb.co/YRnTHR6/11.png",
      name: "MY HOME",
      address: "petro bangla, feni,Dhaka,Bangladesh"
    },
    {
      logo: "https://parspng.com/wp-content/uploads/2022/03/telephonepng.parspng.com-2-600x643.png",
      name: "PHONE NUMBER",
      address: "+88 018 7989 8851(Toll Free)"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/561/561188.png",
      name: "EMAIL",
      address: "abdulquayum133@gmail.com"
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      name: "lINKEDIN",
      address: "https://www.linkedin.com/in/md-abdul-quayum/"
    }
  ]


  return (
    <div className=" h-full md:h-[800px] lg:w-9/12 w-11/12 mx-auto bg-[#e9b806] rounded-3xl flex flex-col md:flex-row ">


      <div className=" flex-1 
          pb:0 pb-5">
        <div className=" py-6 ">
          <BiMessageMinus className="text-5xl text-white w-full text-center" />
        </div>
        <div className="pb-5">
          <p className="text-center text-2xl text-black font-semibold">
            Please Provide Your <br /> Variable Feedback
          </p>
        </div>
        <div className="w-48 h-48 bg-blue-900 rounded-full mx-auto flex items-center justify-center text-white text-2xl border-4 border-white">
          <p className="text-center font-bold">
            LEAVE YOUR  MESSAGE
          </p>
        </div>

        {
          data?.map(da => <div className=" pt-5 w-full rounded-sm  text-center">
            <img className="w-5 mx-auto" src={da?.logo} alt="" />
            <h1 className="text-black font-semibold text-sm">{da?.name}</h1>
            <a className="text-sm pr-5 text-black" href={da?.address}>{da?.address}</a>
          </div>)
        }
      </div>

      <form onSubmit={HandelMessage} ref={form} className="bg-blue-900 w-full lg:w-[800px] h-[800px] text-center pt-36">
        <h1 className="text-3xl font-medium text-white">Contact Us</h1>
        <div className="py-5">
          <input name="email" className="border-b outline-none text-white p-2 sm:w-96 bg-blue-900 " placeholder="Enter Your Name " type="text" required />
        </div>
        <div className="py-5">
          <input name="name" className="border-b outline-none text-white p-2 w-48 sm:w-96 bg-blue-900" placeholder="Enter Your Name" type="text" required />
        </div>
        <div>
          <textarea name="message" placeholder="Leave Your Massage" className="border-b outline-none text-white p-2 w-48 sm:w-96 bg-blue-900" cols="10" rows="5" required></textarea>
        </div>
        <div className="py-5">
          {
            loading ? <div className="border outline-none cursor-pointer p-2 w-48 sm:w-96 bg-blue-900 text-white mx-auto"  >
              <CssLoder />
            </div> : <input className="border outline-none cursor-pointer p-2 w-48 sm:w-96 bg-blue-900 text-white" type="submit" />
          }
        </div>
      </form>

    </div>
  );
};

export default HomeContacat;
