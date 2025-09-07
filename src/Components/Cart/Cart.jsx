
import imgCard from '../../assets/1.webp'
import { Link } from 'react-router-dom'

export default function Cart() {

    return (
        <>        
            <div className=' max-w-5xl mx-auto text-sm text-gray-500 p-4'>
                
                {/* product 1 */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-b">
                    <div className="flex items-center justify-center sm:justify-start gap-4 w-full sm:w-1/4">
                        <img className="w-24 h-w-24 md:w-16 md:h-16 object-cover rounded" src={imgCard} alt="imd" />
                    </div>
                    <div className="flex items-center justify-center gap-2 w-full sm:w-1/4 ">
                        <button className="w-8 h-8 border rounded-full text-gray-600 cursor-pointer" >−</button>
                        <span className="min-w-[32px] text-center text-sm text-gray-700">1</span>
                        <button className="w-8 h-8 border rounded-full text-gray-600 cursor-pointer" >+</button>
                    </div>
                    <div className='text-gray-800 font-semibold w-full sm:w-1/4 text-center sm:text-left'>
                        <p className="text-lg sm:text-2xl font-semibold text-gray-600">$8.99</p>
                    </div>
                    <div className="w-full sm:w-1/4 text-center sm:text-right">
                        <button className="text-red-500 text-sm hover:underline cursor-pointer" >Remove</button>
                    </div>
                </div>

                {/* buttons 2 */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
                    <div className='flex flex-col sm:flex-row gap-3 '>
                        <Link className=' px-4 py-2 rounded-md bg-[#35AFA0] text-white text-center '  to="/checkout">Checkout</Link>
                        <Link className=' px-4 py-2 rounded-md bg-[#35AFA0] text-white text-center ' to="/shop">Continue Shopping</Link>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 items-start sm:items-center'>
                        <p className="text-lg sm:text-2xl font-semibold">Total Price:</p>
                        <p className="text-lg sm:text-2xl font-semibold">$8.99</p>
                    </div>
                    
                </div>

            </div>
        </>
    )
}

