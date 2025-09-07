function Article({image , category , title , date})
{
    // JSX
    return (
        <>
            {/* Article */}
            <div>
                {/* Article Image */}
                <img src={image} className='rounded-[7px]'/>
                {/* Article Category */}
                <p className='text-[#9B9BB4] text-[13px] font-semibold uppercase mt-3'>{category}</p>
                {/* Article Title */}
                <h1 className='text-[#202435] text-[20px] font-semibold leading-[24px] my-2'>{title}</h1>
                {/* Article Date */}
                <p className='text-[#71778E] text-[14px] font-medium]'>{date}</p>
            </div>
        </>
    )
}

export default Article;