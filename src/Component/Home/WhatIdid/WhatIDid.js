import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loding from '../../SharableContent/Loding';




const WhatIDid = () => {


    const Datas = [
        {
            "name": "MERN STACK PROJECT",
            "details": "This is a Reusable Product selling & buying category-type dynamic project,Seller product add, delete, update, buy, image upload , payment system,dashbord add",
            "liveSite": "https://assaignment-tharteen-62f7b.web.app/",
            "clientSideCode": "https://github.com/abdulquayumhp/product-reselling-client-side-code",
            "serverSideCode": "https://github.com/abdulquayumhp/product-reselleing-server-side",
            "time": "5 days",
            "bgColor": "bg-[#e9b806]",
            "weidth": "md:w-[420px]",
            "textColor": "bg-black",
            "detailsText": "text-black"
        },
        {
            "name": "FURE Javascript PROJECT",
            "details": "This is pure javascript project, here a user can count & practice swimming, This website has multiple features, tailwind css framework,user can do multiple things",
            "liveSite": "https://swimming-pool-practice.netlify.app/",
            "clientSideCode": "https://github.com/abdulquayumhp/ut-swiming-school",
            "serverSideCode": "",
            "time": "2 days",
            "bgColor": "bg-[#6f42f5]",
            "weidth": "md:w-[420px]",
            "textColor": "text-white",
            "detailsText": "text-gray-300",
            "ancorTage": "text-white"

        },
        {
            "name": "MERN STACK PROJECT",
            "details": "Add Special Cooking Dish, User can give a review, delete a review, update the review and read another user's reviews, Authentication system, JWT for user security",
            "liveSite": "https://chic-manatee-b3030a.netlify.app/",
            "clientSideCode": "https://github.com/abdulquayumhp/foodcoma-master-cooking-website",
            "serverSideCode": "https://github.com/abdulquayumhp/foodcoma-master-cooking-website-server-side-code",
            "time": "4 days",
            "bgColor": "bg-[#e9b806]",
            "weidth": "md:w-[420px]",
            "textColor": "text-black",
            "detailsText": "text-black",
        },
        {
            "name": "React, Redux PROJECT",
            "details": "Users Buy Courses, Users can Download Pdf Files, JWT for user security, Tailwind css framework use, user can do anything",
            "liveSite": "https://curese-buying-website.web.app/",
            "serverSideCode": "https://github.com/abdulquayumhp/online-buying-course-website-server-side-code",
            "time": "5 days",
            "bgColor": "bg-[#f0f2f5]",
            "weidth": "md:w-[420px]",
            "btnColor": "bg-[#6f42f5]",
            "ancorTage": "text-white"


        },
        {
            "name": "Daylight News (Large scale Team Project)",
            "details": "This is an International news reading type website, here a reader can read various categories of worldwide news like politics, sports, health, games, business, opinion, food, etc",

            "liveSite": "https://daylight-news-withteam.web.app/",
            "clientSideCode": "https://github.com/JilluRahmanJibon/DayLight-News",
            "serverSideCode": "https://github.com/JilluRahmanJibon/DayLight-News-Server",


            "time": "2 months",
            "bgColor": "bg-[#f0f2f5]",
            "weidth": "md:w-[860px]",
            "btnColor": "bg-[#6f42f5]",
            "logo": "https://mbacg.com/wp-content/uploads/Icon-Charitable-Organizations.png",
            "ancorTage": "text-white"

        },
    ]
    // const { data: Datas, isLoading } = useQuery({
    //     queryKey: ["WorkExperience"],
    //     queryFn: async () => {
    //         const res = await fetch(`${process.env.REACT_APP_LOCALHOST}whatIDid`);
    //         const data = await res.json();
    //         return data;
    //     },
    // });
    // // console.log(WorkExperience);
    // if (isLoading) {
    //     return <Loding />;
    // }



    return (


        <div className='h-full lg:w-9/12 w-11/12 mx-auto rounded-3xl bg-[#ecdfe1] pt-10'>

            <div>
                <h1 className="text-center text-sm md:text-3xl font-semibold text-blue-800 py-3">
                    <span className="text-black">What I Did </span>Recent Time
                </h1>
            </div>
            <div className='flex flex-wrap gap-5 p-2 justify-center'>
                {
                    Datas?.map(data => <div className={` `}  >
                        <div className={`${data?.weidth} ${data?.bgColor} ${data?.textColor} pt-20 p-3 h-[400px] `}>
                            <div className='flex items-center'>
                                <div>
                                    {
                                        data?.logo ? <img className='w-[300px]' src={data?.logo} alt="" /> : ""
                                    }
                                </div>
                                <div>
                                    <p className='font-bold pb-10'>{data?.name}</p>
                                    <p className={`${data?.detailsText} pb-10`}>{data?.details}</p>

                                    <div className='flex gap-5'>
                                        <a className={`border py-2 px-5 font-semibold ${data?.btnColor} ${data?.ancorTage} text-sm`} href={data?.liveSite}>Live Link</a>
                                        <a className={`border py-2 px-5 font-semibold ${data?.btnColor} ${data?.ancorTage} text-sm`} href={data?.serverSideCode}>Server Code</a>
                                        <a className={`border py-2 px-5 font-semibold ${data?.btnColor} ${data?.ancorTage} text-sm`} href={data?.clientSideCode}>Client Code</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>)



                }
            </div>
        </div>


    );
};

export default WhatIDid;