import React from 'react';

const Basic = () => {

    return ( <
        div >

        <
        div className = 'flex justify-center items-start w-full gap-8 flex-grow max-w-screen-lg mx-auto mt-28' >
        <
        div className = 'flex justify-items-start   w-[50%] h-full mb-1' >
        <
        div className = 'flex flex-col w-[100%] ' >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > User type < /label> <
        select className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid text-white border-white rounded outline-none px-4 py-1 mb-7' >
        <
        option value = ""
        disabled selected > Select an option < /option> <
        option > select < /option> <
        option > select < /option> <
        /select> <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > First name < /label> <
        input placeholder = 'Your first name'
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Last name < /label> <
        input placeholder = 'Your last name'
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Email adress < /label> <
        input placeholder = 'Your email adress'
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        /div> <
        /div> <
        div className = 'flex justify-items-start   w-[50%] h-full mb-1' >
        <
        div className = 'flex flex-col w-[100%] h-full ' >
        <
        label className = 'font-normal text-xs text-[#5F8D4E]  pb-1' > Your gender < /label> <
        select className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid text-white border-white rounded outline-none px-4 py-1 mb-7' >
        <
        option value = ""
        disabled selected > Select gender < /option> <
        option > select < /option> <
        option > select < /option> <
        /select> <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Designation < /label> <
        input placeholder = 'Your first name'
        className = 'w-[100%] h-10 bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >
        <
        label className = 'font-normal text-xs text-[#5F8D4E] pb-1' > Date of birth < /label> <
        input placeholder = 'Your last name'
        type = 'date'
        className = 'w-[100%] h-10 text-white  bg-[#1E2E5C] border-[1px] border-solid border-white rounded outline-none px-4 py-1 mb-7' / >

        <
        /div> <
        /div> <
        /div>

        <
        /div>
    )
};

export default Basic;