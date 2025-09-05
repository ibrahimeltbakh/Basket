function Discount({image , title , desc})
{
    return (
        <>
            {/* Discount */}
            <div style={{backgroundImage: `url(${image})`}} className='bg-cover px-10 py-11 rounded-[7px]'>
                {/* Promotion */}
                <p className="text-[#FF6048] text-[14px] font-semibold uppercase mb-2">Weekend Discount 40%</p>
                {/* Product Title */}
                <h1 className="text-[#3E445A] text-[24px] font-semibold mb-1 tracking-[-0.8px]">{title}</h1>
                {/* Description */}
                <p className="text-[#3E445A] text-[12px]">{desc}</p>
                {/* Shop Link */}
                <a href="#" className="bg-[#233A95] text-[#FFFFFF] text-[12px] font-medium rounded-[30px] inline-block px-5 py-2 mt-6">Shop Now</a>
            </div>
        </>
    )
}

export default Discount;