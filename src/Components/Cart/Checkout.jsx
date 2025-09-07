

import imgTest from '../../assets/1.webp'
import imgCam from '../../assets/cam.png'
import { Link } from 'react-router-dom'

export default function Checkout() {
    return (
        <>
            <section>
                {/* form contact */}
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* form */}
                    <div className=' w-full p-5'>

                        <div class="w-full border-r border-[#DEDEDE] pr-6">
                            <h2 class="font-semibold text-xl pb-2 text-black">Contact</h2>
                            <form >
                                <div class="my-4">
                                    <input class="shadow border-[#DEDEDE] border-[1px] rounded w-full p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0]" id="email" placeholder="Email or mobile phone number" required type="email"/>
                                </div>
                                <div class="my-4">
                                    <input className='h-4 w-4 me-2 cursor-pointer' id='emailCheck' type="checkbox" />
                                    <label className='text-sm cursor-pointer' htmlFor="emailCheck">Email me with news and offers</label>
                                </div>
                                <div class="mt-14">
                                    <h2 class="font-semibold text-xl pb-2">Delivery</h2>
                                </div>
                                <div class="w-full flex flex-col md:flex-row gap-4">
                                    <input class="shadow border-[#DEDEDE] border-[1px] rounded w-full p-4 text-gray-700  focus:outline-none focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0]" id="firstName" placeholder="First Name (Optional)" type="text"/>
                                    <input class="shadow border-[#DEDEDE] border-[1px] rounded w-full p-4 text-gray-700  focus:outline-none focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0]" id="lastName" placeholder="Last Name" type="text"/>
                                </div>
                                
                                <div class="my-4">
                                    <input class="shadow border-[#DEDEDE] border-[1px] rounded w-full p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0]" id="address" placeholder="Address" type="text"/>
                                </div>
                                <div class="my-4">
                                    <input class="shadow border-[#DEDEDE] border-[1px] rounded w-full p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0]" id="apartment" placeholder="Apartment, suite, etc. (Optional)" type="text"/>
                                </div>

                                <div class="w-full flex flex-col md:flex-row gap-4">
                                    <input class="shadow border-[#DEDEDE] border-[1px] rounded w-full p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0]" id="postalCode" placeholder="Postal Code (Optional)" type="text"/>
                                    <input class="shadow border-[#DEDEDE] border-[1px] rounded w-full p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1773B0] focus:border-[#1773B0]" id="city" placeholder="City" type="text"/>
                                </div>

                                <div class="my-4">
                                    <input className='h-4 w-4 me-2 cursor-pointer' id='saveForm' type="checkbox" />
                                    <label className='text-sm cursor-pointer' htmlFor="saveForm">Save this information for next time</label>
                                </div>

                                <div class="my-7">
                                    <h2 class="font-semibold text-xl pb-2">Shipping method</h2>
                                    <div class="flex justify-between items-center my-2 p-4 border-[3px] border-[#1773B0] rounded">
                                        <span>Standard</span>
                                        <span>free</span>
                                    </div>
                                </div>
                                
                                <div class="my-7 ">
                                    <div>
                                        <h2 class="font-semibold text-xl pb-2">Payment</h2>
                                        <p class=" text-sm text-[#707070]">All transactions are secure and encrypted.</p>
                                    </div>
                                    <div class="my-4 p-4 bg-[#F5F5F5] flex justify-center items-center flex-col text-center rounded">
                                        <div class="mb-2">
                                            <img src={imgCam} alt="Payment Icon" class="w-20 h-20"/>                                                                                       
                                        </div>
                                        <p class=" text-sm text-[#707070]">This store can’t accept payments right now.</p>
                                    </div>
                                </div>

                                <div class="my-7">
                                    {/* <button onclick='/Paymoney' class="w-full block text-center bg-[#F5F5F5] text-gray-700 text-sm font-bold py-4 rounded cursor-pointer border border-[#DEDEDE] hover:bg-[#e0e0e0] transition duration-200">Pay Now</button> */}
                                    <Link to='/Paymoney' class="w-full block text-center bg-[#F5F5F5] text-gray-700 text-sm font-bold py-4 rounded cursor-pointer border border-[#DEDEDE] hover:bg-[#e0e0e0] transition duration-200">Pay Now</Link>
                                </div>

                            </form>
                        </div>

                    </div>

                    {/* cart items */}
                    <div className='p-5 '>
                        
                        <div className='p-2 my-1 max-w-[800px]  flex justify-between items-center'>
                            <div className='flex items-center gap-4'>
                                <div className='h-16 w-16 border border-[#DEDEDE] rounded shadow-[2px_4px_4px_0_rgba(0,0,0,0.50)] relative'>
                                    <img className='object-cover w-full h-full' src={imgTest} alt="img"/>
                                    <span className="bg-[#4B4B4B] text-white flex justify-center items-center h-7 w-7 rounded-full absolute top-[-10px] right-[-10px]">9</span>
                                </div>
                                <p className="font-semibold ">Red Lipstick</p>
                            </div>

                            <div className=' w-fit'>
                                <span className="font-medium">$8.99</span>
                            </div>
                        </div>

                        
                        <div className='p-2 max-w-[800px] '>
                            <div className="flex justify-between items-center pt-4 ">
                                <p className="font-medium">Subtotal : 
                                    <span className=""> 1 </span>items
                                </p>
                                <span className=" font-semibold">$8.99</span>
                            </div>

                            <div className="flex justify-between items-center pt-4 ">
                                <span className="font-medium">Shipping :</span>
                                <span className="font-medium">FREE</span>
                            </div>

                            <div className="flex justify-between items-center py-7 ">
                                <span className="text-2xl font-bold">Total </span>
                                <span className=" font-semibold">
                                    <span className="text-gray-500">USD </span> $8.99
                                </span>
                            </div>

                            <p className=" text-[#707070] pb-4">Including $2.46 in taxes</p>
                        
                        </div>

                    </div>
                    
                </div>
            </section>
        </>
    )
}


