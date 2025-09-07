import { MdOutlineArrowRightAlt } from "react-icons/md";

function Promo({image})
{
    // JSX
    return (
        <>
            {/* Promo */}
            <div style={{backgroundImage:`url(${image})`}} className='bg-cover'>
                {/* Content */}
                <div className="container xl:max-w-6xl mx-auto py-20">
                    {/* Offer */}
                    <div className='uppercase mb-3'>
                        <span className="text-[#202435] text-[12px] font-medium tracking-[1px] mr-2">Exclusive Offer</span>
                        <span className='bg-linear-to-r from-[#00B85333] to-[#20375800] text-[#038E42] text-[14px] font-semibold inline-block px-2 py-1 rounded-[40px]'>-20% Off</span>
                    </div>
                    {/* Title */}
                    <h1 className="text-[#202435] text-[48px] font-bold tracking-[-0.7px] leading-[50px] max-w-[450px] mb-4">Specialist in the grocery store</h1>
                    <p className="text-[#202435] text-[16px]">Only this week. Don’t miss...</p>
                    {/* Price */}
                    <div className="my-4">
                        <span className="text-[#202435] text-[16px]">from </span>
                        <span className="text-[#D51243] text-[36px] font-semibold font-['Dosis']">$7.99</span>
                    </div>
                    {/* Link */}
                    <a href="#" className="bg-[#35AFA0] text-[#FFFFFF] text-[14px] font-medium rounded-[30px] px-5 py-2 flex items-center gap-x-[6px] w-fit">
                        Shop Now <MdOutlineArrowRightAlt className="text-[26px]"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Promo;