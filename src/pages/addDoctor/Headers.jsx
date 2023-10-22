import React from 'react'

export default function Headers({ step }) {
    const stepTitles = {
        1: 'Basic Information',
        2: 'Enter details',
        3: 'Select services',
        4: 'Review and submit',
    };
    return ( <
        div className = 'absolute top-32 z-10 ' >
        <
        ul className = "flex justify-center items-center w-full gap-8 mb-[50px] max-w-screen-lg mx-auto p-4" >
        <
        li className = { `border-b-2 border-solid w-[250.21px] text-sm font-semibold  ${step === 1 ? 'border-[#5F8D4E] text-[#5F8D4E]' : ''}` } >
        <
        span className = { `text-xl font-semibold leading-10 ${step === 1 ? 'text-[#5F8D4E]' : ''}` } > 1 < /span> Basic Information <
        /li> <
        li className = { `border-b-2 border-solid w-[250.21px] text-sm font-semibold ${step === 2 ? 'border-[#5F8D4E] text-[#5F8D4E]' : ''}` } >
        <
        span className = { `text-xl font-semibold leading-10  ${step === 2 ? 'text-[#5F8D4E]' : ''}` } > 2 < /span> Enter details <
        /li> <
        li className = { `border-b-2 border-solid w-[250.21px] text-sm font-semibold ${step === 3 ? 'border-[#5F8D4E] text-[#5F8D4E]' : ''}` } >
        <
        span className = { `text-xl font-semibold leading-10 ${step === 3 ? 'text-[#5F8D4E]' : ''}` } > 3 < /span> Select services <
        /li> <
        li className = { `border-b-2 border-solid w-[250.21px] text-sm font-semibold ${step === 4 ? 'border-[#5F8D4E] text-[#5F8D4E]' : ''}` } >
        <
        span className = { `text-xl font-semibold leading-10 ${step === 4 ? 'text-[#5F8D4E]' : ''}` } > 4 < /span> Review and submit <
        /li> <
        /ul> <
        div className = "max-w-screen-lg mx-auto p-4 w-full " >
        <
        h3 className = "font-medium text-base" > { stepTitles[step] } < /h3> <
        /div> <
        /div>
    );
}