
export default function Paymoney() {
    return (
        <div>
            <div class=" bg-gray-50 py-12 px-4 lg:px-8">
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div class="p-8">

                        <div class="text-center mb-8">
                            <h2 class="text-2xl font-bold text-gray-900">Checkout</h2>
                            <p class="mt-2 text-gray-600">Total: $58.98</p>
                        </div>

                        <div class="mb-6">
                            <div class="flex border-b">
                                <span class="py-2 px-4 font-medium text-blue-600 border-b-2 ">Credit Card</span>
                            </div>
                        </div>
                        
                        <form >
                            <div class="mb-6">
                                <label htmlFor="name" className='text-sm font-medium text-gray-700 mb-1'>Full Name </label>
                                <input id='name' type="text" name='name' required className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'/>
                            </div>
                            <div class="mb-6">
                                <label htmlFor="email" className='text-sm font-medium text-gray-700 mb-1'>Email </label>
                                <input id='email' type="email" name='email' required className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'/>
                            </div>

                            {/* البطاقة */}
                            <div class="mb-6 ">

                                <label class="block text-sm font-medium text-gray-700 mb-1">
                                    Card Details 
                                </label>

                                <div className="overflow-hidden w-full border border-gray-300 rounded-md flex items-center p-3 gap-2">
                                    {/* أيقونة البطاقة */}
                                    <span className="text-gray-400">
                                        <i className="fa-regular fa-credit-card"></i>
                                    </span>

                                    {/* رقم البطاقة */}
                                    <input type="number" placeholder="رقم البطاقة" maxLength="16"
                                        className="flex-1 placeholder:text-sm placeholder-gray-400 border-none outline-none" />
                                            
                                    {/* تاريخ الانتهاء شهر */}
                                    <input type="number" placeholder="شهر " maxLength="2"
                                        className="w-10 text-right placeholder:text-sm placeholder-gray-400 border-none outline-none"/>

                                    <span className="text-gray-400 ps-3">/</span>

                                    {/* تاريخ الانتهاء سنة */}
                                    <input type="number" placeholder="سنة " maxLength="2"
                                        className="w-10 text-right placeholder:text-sm placeholder-gray-400 border-none outline-none"/>

                                    {/* رقم التحقق CVC */}
                                    <input type="number" placeholder="CVC" maxLength="3"
                                        className="w-14 text-right placeholder:text-sm placeholder-gray-400 border-none outline-none"/>

                                </div>
                            </div>

                            <div class="mb-6">
                                <label htmlFor="address.line1" className='text-sm font-medium text-gray-700 mb-1'>Street Address </label>
                                <input id='address.line1' type="text" name='address.line1' required className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'/>
                            </div>

                            <div class="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label htmlFor="address.city" className='text-sm font-medium text-gray-700 mb-1'>City </label>
                                    <input id='address.city' type="text" name='address.city' required className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'/>
                                </div>
                                <div>
                                    <label htmlFor="address.postal_code" className='text-sm font-medium text-gray-700 mb-1'>ZIP Code </label>
                                    <input id='address.postal_code' type="text" name='address.postal_code' required className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'/>
                                </div>
                            </div>

                            <button type="submit" class="w-full py-3  rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500  cursor-pointer">Pay $58.98</button>
                            
                        </form>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

