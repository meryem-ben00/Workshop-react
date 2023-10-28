import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import garcon from '../../images/garcon.png';
import fille from '../../images/fille.png';
import garcon1 from '../../images/garcon (1).png';
import fille2 from '../../images/fille (2).png';

function Administration() {
  return <div> 
  <div className="relative p-4 flex items-center justify-between"> 
    <div>
      <h1 className="absolute top-20 left-20 text-white text-xl">List of Users</h1>
      <h3 className="absolute top-28 left-20 text-white">345 available Users</h3>
    </div>
   
  </div>
  
<div class="mt-32 ml-20 mr-20">
  <table class="w-full text-sm text-left">
    <thead class="text-xs bg-gray-200 ">       
         <tr>
              <th scope="col" class="px-6 py-3 rounded-l-lg text-gray-400">
                  Name
              </th>
              <th scope="col" class="px-6 py-3 text-gray-400">
                  ID
              </th>
              <th scope="col" class="px-6 py-3  text-gray-400">
                  Email
              </th>
              <th scope="col" class="px-6 py-3  text-gray-400">
                  Phone number
              </th>
              <th scope="col" class="px-6 py-3  text-gray-400">
                  Date added
              </th>
              <th scope="col" class="px-6 py-3 rounded-r-lg text-gray-400">
                  STATUS
              </th>
          </tr>
      </thead>
      <tbody className="space-y-4">
          <tr class=" dark:bg-gray-800">
              <th scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              
              <div className="flex items-center">
                <img src={garcon} alt="User Avatar" className=" bg-white p-0 pt-1 rounded h-12 w-12 "/>
                <div className="ml-2">
                  <div className="text-white font-medium">Brooklyn Simmons</div>
                  <div className="text-gray-400 text-sm">User</div>
                </div>
              </div>
                  </th>
              <td class="px-6 py-4" className="text-white">
                  87364523
              </td>
              <td class="px-6 py-4" className="text-white">
                  brooklyns@mail.com
              </td>
              <td class="px-6 py-4" className="text-white">
              (603) 555-0123
              </td>
              <td class="px-6 py-4">
              <div className="ml-2">
                <div className="text-white font-medium">21/12/2022</div>
                <div className="text-gray-400 text-sm">10:40 PM</div>
              </div>
              </td>
              <td class="relative px-6 py-4">
                <div className="flex justify-between">
                <button className="bg-green-100 rounded-lg py-1 px-3 text-sm text-green-800"> Approved</button>
                <button className="absolute top-5 right-0 bg-white rounded-lg w-10 h-10 flex items-center justify-center"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
              </td>
          </tr>
          <tr class=" dark:bg-gray-800">
              <th scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              
              <div className="flex items-center">
                <img src={fille} alt="User Avatar" className=" bg-white p-0 pt-1 rounded h-12 w-12 "/>
                <div className="ml-2">
                  <div className="text-white font-medium">Kristin Watson</div>
                  <div className="text-gray-400 text-sm">User</div>
                </div>
              </div>
                  </th>
              <td class="px-6 py-4" className="text-white">
                  93874563
              </td>
              <td class="px-6 py-4" className="text-white">
                  kristinw@mail.com
              </td>
              <td class="px-6 py-4" className="text-white">
              (219) 555-0114
              </td>
              <td class="px-6 py-4">
              <div className="ml-2">
                <div className="text-white font-medium">22/12/2022</div>
                <div className="text-gray-400 text-sm">05:20 PM</div>
              </div>
              </td>
              <td class="relative px-6 py-4">
                <div className="flex justify-between">
                <button className="bg-red-200 rounded-lg py-1 px-3 text-sm text-red-500"> Declined</button>
                <button className="absolute top-5 right-0 bg-white rounded-lg w-10 h-10 flex items-center justify-center"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
              </td>
          </tr>
          <tr class=" dark:bg-gray-800">
              <th scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              
              <div className="flex items-center">
                <img src={garcon1} alt="User Avatar" className=" bg-white p-0 pt-1 rounded h-12 w-12 "/>
                <div className="ml-2">
                  <div className="text-white font-medium">Jacob Jones</div>
                  <div className="text-gray-400 text-sm">User</div>
                </div>
              </div>
                  </th>
              <td class="px-6 py-4" className="text-white">
                  23847569
              </td>
              <td class="px-6 py-4" className="text-white">
                  jacbj@mail.com
              </td>
              <td class="px-6 py-4" className="text-white">
              (319) 555-01115
              </td>
              <td class="px-6 py-4">
              <div className="ml-2">
                <div className="text-white font-medium">23/12/2022</div>
                <div className="text-gray-400 text-sm">12:40 PM</div>
              </div>
              </td>
              <td class="relative px-6 py-4">
                <div className="flex justify-between">
                <button className="bg-green-100 rounded-lg py-1 px-3 text-sm text-green-800"> Approved</button>
                <button className="absolute top-5 right-0 bg-white rounded-lg w-10 h-10 flex items-center justify-center"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
              </td>
          </tr>
          <tr class=" dark:bg-gray-800">
              <th scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              
              <div className="flex items-center">
                <img src={fille2} alt="User Avatar" className=" bg-white p-0 pt-1 rounded h-12 w-12 "/>
                <div className="ml-2">
                  <div className="text-white font-medium">Cody Fisher</div>
                  <div className="text-gray-400 text-sm">User</div>
                </div>
              </div>
                  </th>
              <td class="px-6 py-4" className="text-white">
                  39485632
              </td>
              <td class="px-6 py-4" className="text-white">
                  codyf@mail.com
              </td>
              <td class="px-6 py-4" className="text-white">
              (229) 555-0109
              </td>
              <td class="px-6 py-4">
              <div className="ml-2">
                <div className="text-white font-medium">24/12/2022</div>
                <div className="text-gray-400 text-sm">03:00 PM</div>
              </div>
              </td>
              <td class="relative px-6 py-4">
                <div className="flex justify-between">
                <button className="bg-green-100 rounded-lg py-1 px-3 text-sm text-green-800"> Approved</button>
                <button className="absolute top-5 right-0 bg-white rounded-lg w-10 h-10 flex items-center justify-center"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
              </td>
          </tr>
          <tr class=" dark:bg-gray-800">
              <th scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              
              <div className="flex items-center">
                <img src={garcon} alt="User Avatar" className=" bg-white p-0 pt-1 rounded h-12 w-12 "/>
                <div className="ml-2">
                  <div className="text-white font-medium">Brooklyn Simmons</div>
                  <div className="text-gray-400 text-sm">User</div>
                </div>
              </div>
                  </th>
              <td class="px-6 py-4" className="text-white">
                  87364523
              </td>
              <td class="px-6 py-4" className="text-white">
                  brooklyns@mail.com
              </td>
              <td class="px-6 py-4" className="text-white">
              (603) 555-0123
              </td>
              <td class="px-6 py-4">
              <div className="ml-2">
                <div className="text-white font-medium">21/12/2022</div>
                <div className="text-gray-400 text-sm">10:40 PM</div>
              </div>
              </td>
              <td class="relative px-6 py-4">
                <div className="flex justify-between">
                <button className="bg-green-100 rounded-lg py-1 px-3 text-sm text-green-800"> Approved</button>
                <button className="absolute top-5 right-0 bg-white rounded-lg w-10 h-10 flex items-center justify-center"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
              </td>
          </tr>
          <tr class=" dark:bg-gray-800">
              <th scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              
              <div className="flex items-center">
                <img src={fille} alt="User Avatar" className=" bg-white p-0 pt-1 rounded h-12 w-12 "/>
                <div className="ml-2">
                  <div className="text-white font-medium">Kristin Watson</div>
                  <div className="text-gray-400 text-sm">User</div>
                </div>
              </div>
                  </th>
              <td class="px-6 py-4" className="text-white">
                  93874563
              </td>
              <td class="px-6 py-4" className="text-white">
                  kristinw@mail.com
              </td>
              <td class="px-6 py-4" className="text-white">
              (219) 555-0114
              </td>
              <td class="px-6 py-4">
              <div className="ml-2">
                <div className="text-white font-medium">22/12/2022</div>
                <div className="text-gray-400 text-sm">05:20 PM</div>
              </div>
              </td>
              <td class="relative px-6 py-4">
                <div className="flex justify-between">
                <button className="bg-red-200 rounded-lg py-1 px-3 text-sm text-red-500"> Declined</button>
                <button className="absolute top-5 right-0 bg-white rounded-lg w-10 h-10 flex items-center justify-center"><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
              </td>
          </tr>

      </tbody>
     
  </table>

  <div className=" pt-24 mt-6 flex justify-center space-x-2">
          <button className="bg-white px-4 py-3 rounded-lg"><FontAwesomeIcon icon={faAngleDoubleLeft}/></button>
          <button className="bg-white  px-4 py-3 rounded-lg"><FontAwesomeIcon icon={faAngleLeft}/></button>
          <button className="bg-green-700 text-white px-5 py-3 rounded-lg font-bold">1</button>
          <button className="bg-white px-4 py-3 rounded-lg font-bold">2</button>
          <button className="bg-white px-4 py-3 rounded-lg font-bold">3</button>
          <button className="bg-white px-4 py-3 rounded-lg font-bold">...</button>
          <button className="bg-white px-4 py-3 rounded-lg font-bold">10</button>
          <button className="bg-white px-4 py-3 rounded-lg"><FontAwesomeIcon icon={faAngleRight}/></button>
          <button className="bg-white px-4 py-3 rounded-lg"><FontAwesomeIcon icon={faAngleDoubleRight}/></button>
  </div>
</div>


</div>;
}

export default Administration;
