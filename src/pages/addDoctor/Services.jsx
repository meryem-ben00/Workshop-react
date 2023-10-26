import React from "react";

export default function Services() {
    return ( <
        div >
        <
        div className = "flex justify-center items-start w-full gap-8 flex-grow max-w-screen-lg mx-auto " >
        <
        div className = "flex justify-items-start   w-[50%] h-full mb-1" >
        <
        div className = "flex flex-col w-[100%] " >
        <
        label className = "font-normal text-xs text-[#5F8D4E] pb-1" >

        Doctor type <
        /label> <
        select className = "w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid text-white border-white rounded outline-none px-4 py-1 mb-7" >
        <
        option value = ""
        disabled selected >
        Select doctor type <
        /option> <
        option > select < /option> <option> select </option >
        <
        /select> <
        label className = "font-normal text-xs text-[#5F8D4E] pb-1" >

        Your speciality <
        /label> <
        input placeholder = "Your first name"
        className = "w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid  border-white rounded outline-none px-4 py-1 mb-7" /
        >
        <
        /div> <
        /div> <
        div className = "flex justify-items-start   w-[50%] h-full mb-1" >
        <
        div className = "flex flex-col w-[100%] h-full " >
        <
        label className = "font-normal text-xs text-[#5F8D4E] pb-1" >

        Your gender <
        /label> <
        select className = "w-[100%] h-10 bg-[#1E2E5C] text-white border-[1px] border-solid text-white border-white rounded outline-none px-4 py-1 mb-7" >
        <
        option value = ""
        disabled selected >
        Select gender <
        /option> <
        option > select < /option> <option> select </option >
        <
        /select> <
        label className = "font-normal text-xs text-[#5F8D4E] pb-1" >
        Designation <
        /label> <
        input placeholder = "Your first name"
        className = "w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7" /
        >
        <
        /div> <
        /div> <
        /div> <
        /div>
    );
}