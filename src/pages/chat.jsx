import React from 'react';
import profil from '../images/chat_profil.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faVideo, faInfoCircle, faPaperclip, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';


function Chat() {
    return <div className='relative flex flex-col sm:flex-row'>
        <h1 className="absolute mt-10 ml-16 text-white text-4xl z-10 font-bold">Chat </h1>
        <div style={{ width: 'calc(33.33% - 5rem)' }} className="bg-white rounded-2xl shadow-lg p-4 mt-16 ml-60 z-20 pb-16">
            <p className='text-xl ml-3'>Chat</p>
            <div className="flex flex-col sm:flex-row items-center mb-4 mt-4">
                <div className="relative flex-grow mb-4 sm:mb-0 sm:mr-5">
                    <input className="border-none rounded-xl p-4 pl-12 text-sm flex-grow shadow-[0_1px_6px] shadow-violet-100 w-full sm:max-w-xs hover:shadow-violet-200 focus:shadow-violet-200 focus:border-none focus:outline-none" placeholder="Search" />
                    <svg className="absolute left-3 top-3 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <button className="p-3 text-black rounded-md ml-0 font-bold">CHAT <FontAwesomeIcon icon={faPlus}  className='ml-4'/></button>
            </div>
                
                
                <div className="flex text-sm items-center justify-between border-none shadow-[0_1px_10px] shadow-violet-400 p-3 rounded-lg mb-7">
                    <div className="flex items-center">
                        <div className="relative inline-block w-14 h-15">
                            <img className=" rounded-full" src={profil} alt="Profile" />
                            <span className="absolute bottom-0 right-0 block h-5 w-5 rounded-full bg-blue-500 border-4 border-white"></span>
                        </div>   
                        <div className='ml-4'>
                            <h2 className="text-lg font-bold mb-2">Doctor</h2>
                            <p className='text-gray-400'>chat</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-9 mr-0 ml-20">
                        <p>00:31:00</p>
                    </div>
                    <div className='fles items-center'>
                    <div className="p-4">
                        <FontAwesomeIcon icon={faPlay} className="text-gray-600 w-5 h-5 mr-5" />
                    </div>
                    </div>
                </div>
                
                <div className="flex items-center text-sm justify-between border-none  p-3 rounded-lg mb-4">
                    <div className="flex items-center">
                        <img className="h-15 w-14 rounded-full mr-4" src={profil} alt="Profile" />
                        <div>
                            <h2 className="text-lg  font-bold mb-2">Doctor</h2>
                            <p className='text-gray-400'>chat</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-9 mr-0 ml-20">
                        <p>00:31:00</p>
                    </div>
                    <div className='fles items-center'>
                    <div className="p-4">
                        <FontAwesomeIcon icon={faPlay} className="text-gray-600 w-5 h-5 mr-5" />
                    </div>
                    </div>
                </div>

                <div className="flex items-center text-sm justify-between border-none  p-3 rounded-lg mb-4">
                    <div className="flex items-center">
                        <img className="h-15 w-14 rounded-full mr-4" src={profil} alt="Profile" />
                        <div>
                            <h2 className="text-lg font-bold mb-2">Patient</h2>
                            <p className='text-gray-400'>chat</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-9 mr-0 ml-20">
                        <p>00:31:00</p>
                    </div>
                    <div className='fles items-center'>
                    <div className="p-4">
                        <FontAwesomeIcon icon={faPlay} className="text-gray-600 w-5 h-5 mr-5" />
                    </div>
                    </div>
                </div>

                <div className="flex items-center text-sm justify-between border-none  p-3 rounded-lg mb-4">
                    <div className="flex items-center">
                        <img className="h-15 w-14 rounded-full mr-4" src={profil} alt="Profile" />
                        <div>
                            <h2 className="text-lg font-bold mb-2">Doctor</h2>
                            <p className='text-gray-400'>chat</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-9 mr-0 ml-20">
                        <p>00:31:00</p>
                    </div>
                    <div className='fles items-center'>
                    <div className="p-4">
                        <FontAwesomeIcon icon={faPlay} className="text-gray-600 w-5 h-5 mr-5" />
                    </div>
                    </div>
                </div>

                <div className="flex items-center text-sm justify-between border-none  p-3 rounded-lg mb-4">
                    <div className="flex items-center">
                        <img className="h-15 w-14 rounded-full mr-4" src={profil} alt="Profile" />
                        <div>
                            <h2 className="text-lg font-bold mb-2">Doctor</h2>
                            <p className='text-gray-400'>chat</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-9 mr-0 ml-20">
                        <p>00:31:00</p>
                    </div>
                    <div className='fles items-center'>
                    <div className="p-4">
                        <FontAwesomeIcon icon={faPlay} className="text-gray-600 w-5 h-5 mr-5" />
                    </div>
                    </div>
                </div>

                <div className="flex items-center justify-between border-none  p-3 rounded-lg mb-4">
                    <div className="flex items-center">
                        <img className="h-15 w-14 rounded-full mr-4" src={profil} alt="Profile" />
                        <div>
                            <h2 className="text-lg font-bold mb-2">Patient</h2>
                            <p className='text-gray-400'>chat</p>
                        </div>
                    </div>
                    <div className="flex text-sm items-center mt-9 mr-0 ml-20">
                        <p>00:31:00</p>
                    </div>
                    <div className='flex items-center'>
                    <div className="p-4">
                        <FontAwesomeIcon icon={faPlay} className="text-gray-600 w-5 h-5 mr-5" />
                    </div>
                    </div>
                </div>
                
            </div>

            <div className='bg-white w-2/3 ml-4 mt-16 mb-0 mr-20 rounded-xl'>
                <div className='flex items-center border-b h-28'>
                    <div className=" ml-12 flex items-center ">
                        <div className="relative inline-block mr-4">
                            <img className="h-15 w-14 rounded-full mr-4" src={profil} alt="Profile" />
                        </div>                   
                         <div>
                            <h2 className="text-lg font-bold mb-1">Doctor</h2>
                            <p className='text-black'>#CU6798H</p>
                        </div>
                    </div>
                    <div className="absolute flex right-28 ">
                        <FontAwesomeIcon icon={faPhone} className="text-black w-6 h-6 mr-20" />
                        <FontAwesomeIcon icon={faVideo} className="text-black w-6 h-6 mr-20" />
                        <FontAwesomeIcon icon={faInfoCircle} className="text-black w-6 h-6" />
                    </div>
                </div>
                <div className='flex'>
                    <div className=' mt-10 ml-10 text-2xl text-white p-4 w-10 h-10 bg-green-700 rounded-full flex items-center justify-center mr-4'>
                        S
                    </div>                
                    <div>
                        <div className='border border-blue-900 p-3 text-sm rounded-2xl max-w-lg  mt-7 ml-5'>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </div>
                        <p className="mt-2 ml-6 text-sm text-gray-600">8:00 PM</p>
                    </div>
                </div>

                <div className='absolute flex right-20'>               
                    <div>
                        <div className='border border-green-700 p-3 bg-green-700 text-white rounded-2xl max-w-lg text-sm mt-7 ml-5'>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </div>
                        <p className="absolute right-24 mt-2 text-sm text-gray-600">8:00 PM</p>
                    </div>
                    <img className=" w-12 h-12  rounded-full mr-6 mt-10 ml-6" src={profil} alt="Profile" />

                </div>

                <div className='flex mt-28'>
                    <div className='text-2xl mt-10 ml-10 text-white p-4 w-10 h-10 bg-green-700 rounded-full flex items-center justify-center mr-4'>
                        S
                    </div>                
                    <div>
                        <div className='border border-blue-900 p-3 text-sm  rounded-2xl max-w-lg  mt-7 ml-5'>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </div>
                        <p className="mt-2 ml-6 text-sm text-gray-600">8:00 PM</p>
                    </div>
                </div>

                <div className='absolute flex right-20 '>               
                    <div>
                        <div className='border border-indigo-400 text-sm p-3 bg-indigo-400 text-white rounded-2xl max-w-lg  mt-7 ml-5'>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </div>
                        <p className="absolute right-24 mt-2 text-sm text-gray-600">8:00 PM</p>
                    </div>
                    <img className=" w-12 h-12  rounded-full mr-6 mt-10 ml-6" src={profil} alt="Profile" />

                </div>
                <div className='flex items-center mt-44 ml-7'>
                    <FontAwesomeIcon icon={faEllipsisH} className="text-3xl text-gray-400 mr-4 "/>
                    <div className='text-2xl text-white p-4 w-10 h-10 bg-green-700 rounded-full flex items-center justify-center mr-4'>
                            S
                    </div>
                </div>
                <div className="relative ml-3 mt-5 mr-3">
                    <input 
                        type="text" 
                        placeholder='Digite a mensagem' 
                        className='w-full p-5 pl-10 pr-[calc(3rem + 40px)] border border-black rounded-xl' 
                    />
                    <div className="bg-black text-white px-3 py-2 rounded-xl absolute text-2xl text-black-500 right-32 bottom-2">
                        <FontAwesomeIcon icon={faPaperPlane} className="rotate-45" />
                    </div>
                    <FontAwesomeIcon icon={faPaperclip} style={{ transform: "rotate(314deg)" }} className="absolute text-2xl text-black-500 right-20 bottom-6" />
                    <FontAwesomeIcon icon={faCheck} className="absolute text-2xl text-black-500 right-7 bottom-6" />
                </div>


            </div>



    </div>;
}

export default Chat;
