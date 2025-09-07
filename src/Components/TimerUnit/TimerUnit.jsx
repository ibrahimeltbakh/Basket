function TimerUnit({unit})
{
    // JSX
    return (
        <>
            <div className="size-[48px] bg-[#ED174A] text-white text-[20px] font-semibold text-center leading-[48px] rounded-[7px]">
                {unit < 10 ? `0${unit}`: unit}
            </div>
        </>
    )
}

export default TimerUnit;