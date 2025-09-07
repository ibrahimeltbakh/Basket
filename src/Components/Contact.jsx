import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";




function Contact() {
  return (
    <IconContext.Provider value={{ color: "#00bba7", size: "25px" }}>
      <div>
        <div className=' lg:px-[150px] sm:max-w-[90%] md:max-w-[100%]  m-auto '>
          <div className='max-lg:px-[20px]'>
            <h1 className='font-[400] md:text-[40px] leading-[48px] text-center text-[30px]'>Get In Touch</h1>
            <p className='mb-[30px] text-center m-auto md:mb-[60px]  max-w-[95%] md:max-w-[60%] lg:max-w-[50%] max-sm:text-[12px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ut maxime corrupti dolores ex rerum iste ipsam soluta quis dolorum doloribus
            </p>
          </div>

          <div className='my-[30px] flex md:flex-row flex-wrap gap-[28px] lg:max-w-[80%] md:max-w-[90%] m-auto'>
            <div className='rounded-[8px] w-full md:flex-[30%] py-[25px] flex items-center justify-center flex-col  gap-[10px] bg-[#eee] max-w-[85%]  m-auto '>
              <span><FaLocationDot /></span>
              <p className='text-center'>102 Street 2714 Donovan</p>
              <p className='text-center'>Lorem ipsum dolar site amet discont</p>
            </div>
            <div className='rounded-[8px] w-full md:flex-[30%] py-[25px] flex items-center justify-center flex-col  gap-[10px] bg-[#eee] max-w-[85%]  m-auto '>
              <span><MdPhoneInTalk /></span>
              <p className='text-center'>102 Street 2714 Donovan</p>
              <p className='text-center'>Lorem ipsum dolar site amet discont</p>
            </div>
            <div className='rounded-[8px] w-full md:flex-[30%] py-[25px] flex items-center justify-center flex-col  gap-[10px] bg-[#eee] max-w-[85%]  m-auto '>
              <span><FaRegEnvelope /></span>
              <p className='text-center'>102 Street 2714 Donovan</p>
              <p className='text-center'>Lorem ipsum dolar site amet discont</p>
            </div>
          </div>

          <div className='shadow-[0_0_20px_0_rgba(0,0,0,0.1)] md:p-[50px] rounded-2xl my-[50px]  md:max-w-[90%] lg:max-w-[80%] max-w-[85%] m-auto'>
            <div className='max-lg:px-[20px]'>
              <h1 className='font-[400] md:text-[40px]   leading-[48px] text-center text-[30px]'>Send Us</h1>
              <p className='mb-[30px]   text-center m-auto md:mb-[60px]  max-w-[95%] md:max-w-[60%] lg:max-w-[50%] max-sm:text-[12px]'>
                Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact ffices.
              </p>
            </div>

            <div className=' px-[30px] md:px-0 pb-[50px] md:flex md:gap-x-[20px] gap-y-[20px] justify-between m-auto flex-wrap'>
              <div className='flex flex-col w-full '>
                <label id='Name' className='block max-md:mb-[5px] mb-[7px]'>Name</label>
                <input type="text" id='Name' className='rounded-[5px] max-md:mb-[15px] bg-[#F3F4F7] w-full p-[8px] border-none outline-none  md:full' />
              </div>
              <div className='flex flex-col w-full '>
                <label id='Email' className='block max-md:mb-[5px] mb-[7px]'>Email*</label>
                <input type="email" id='email' className='rounded-[5px] max-md:mb-[15px] bg-[#F3F4F7] w-full p-[8px] border-none outline-none  md:full' />
              </div>
              <div className='flex flex-col w-full '>
                <label id='Phone number' className='block max-md:mb-[5px] mb-[7px]'>Phone number</label>
                <input type="number" id='Phone number' className='rounded-[5px] max-md:mb-[15px] bg-[#F3F4F7] w-full p-[8px] border-none outline-none  md:full' />
              </div>
              <div className='flex flex-col w-full '>
                <label className='block max-md:mb-[5px] mb-[7px]'>Your message</label>
                <textarea rows="4" className=' resize-none scrollbar-none overflow-y-auto rounded-[5px] max-md:mb-[15px] bg-[#F3F4F7] w-full p-[8px] border-none outline-none  md:full'></textarea>
              </div>
              <button className='cursor-pointer px-[15px] md:px-[25px] py-[5px] mt-5 text-white bg-[#35AFA0] rounded-[5px]'>Send Message</button>
            </div>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Contact
