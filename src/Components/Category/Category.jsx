function Category({image , title , itemsCount})
{
    // JSX
    return (
        <>
            {/* Category */}
            <div className="group flex first:flex-col justify-around items-center border border-[#E4E5EE] p-6 first:row-span-2 max-sm:first:col-span-full">
                {/* Category Image */}
                <div>
                    <img src={image} className='size-[80px] group-first:size-[120px]'/>
                </div>
                {/* Category Description */}
                <div className='group-first:flex group-first:flex-col group-first:items-center'>
                    {/* Category Title */}
                    <h1 className='w-[100px] min-md:w-[66px] group-first:w-auto font-semibold text-[14px] leading-4'>{title}</h1>
                    {/* Category Items Count */}
                    <span className='font-light text-[12px] mt-1.5'>{itemsCount} Items</span>
                </div>
            </div>
        </>
    )
}

export default Category;