import { Rating } from '@mui/material';

function Product({image , title , quantity , rate , price , discountPrice , discount})
{
    // JSX
    return (
        <>
            {/* Product */}
            <div className="grid border border-[#EDEEF5] p-5">
                {/* Product Image & Discount */}
                <div className="relative mb-4">
                    {/* Product Image */}
                    <img src={image}/>
                    {/* Product Discount */}
                    <span className={`w-[45px] h-[25px] ${discount > 0 ? 'bg-[#35AFA0]' : 'bg-[#D51243]'} text-white text-[12px] text-center leading-[25px] font-semibold rounded-[4px] absolute top-0 font-['Dosis']`}>{discount}%</span>
                </div>
                {/* Product Title */}
                <h3 className='mb-2 text-[14px]'>{title}</h3>
                {/* Product Quantity */}
                <p className="text-[#00B853] text-[11px] font-semibold uppercase">{quantity} in stock</p>
                {/* Product Review */}
                <div className="flex max-sm:flex-col max-sm:items-start items-center gap-x-2 my-3">
                    <Rating value={rate} readOnly size='small'/>
                    <span className="text-[#71778E] text-[13px] font-semibold">1 Review</span>
                </div>
                {/* Product Price */}
                <div>
                    {/* Old Price */}
                    <span className="text-[#C2C2D3] text-[15px] font-semibold line-through mr-2 font-['Dosis']">${price}</span>
                    {/* New Price */}
                    <span className="text-[#D51243] text-[18px] font-semibold font-['Dosis']">${discountPrice}</span>
                </div>
            </div>
        </>
    )
}

export default Product;