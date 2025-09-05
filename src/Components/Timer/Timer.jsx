import { useEffect , useState } from "react";
import TimerUnit from "../TimerUnit/TimerUnit";

function Timer({timerDays , timerHours , timerMinutes , timerSeconds})
{
    // States
    let [days , setDays] = useState(timerDays)
    let [hours , setHours] = useState(timerHours)
    let [minutes , setMinutes] = useState(timerMinutes)
    let [seconds , setSeconds] = useState(timerSeconds)
    
    // Count Down Function
    async function countDown()
    {
        if(days === 0 && hours === 0 && minutes === 0 && seconds === 0)
        {
            // Stop Timer
            return
        }

        await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve()
            },1000)
        })

        if(seconds > 0)
        {
            // Decrement Seconds By 1
            setSeconds(--seconds);
        }
        else if(minutes > 0)
        {
            // Decrement Minutes By 1
            setMinutes(--minutes);
            // Set Seconds To 59
            setSeconds(59)
        }
        else if(hours > 0)
        {
            // Decrement Hours By 1
            setHours(--hours)
            // Set Minutes To 59
            setMinutes(59)
            // Set Seconds To 59
            setSeconds(59)
        }
        else if(days > 0)
        {
            // Decrement Days By 1
            setDays(--days)
            // Set Hours To 23
            setHours(23)
            // Set Minutes To 59
            setMinutes(59)
            // Set Seconds To 59
            setSeconds(59)
        }
    }

    useEffect(()=>{
        (async()=>{
            await countDown();
        })();
    },[days,hours,minutes,seconds])

    // JSX
    return (
        <>
            <div className="flex items-center gap-x-1 my-3 font-['Dosis']">
                <TimerUnit unit={days}/> : <TimerUnit unit={hours}/> : <TimerUnit unit={minutes}/> : <TimerUnit unit={seconds}/>
            </div>
            
        </>
    )
}

export default Timer;
