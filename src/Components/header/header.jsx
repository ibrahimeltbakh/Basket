
import { Link } from "react-router";
import { GoChevronDown } from "react-icons/go";
import { LiaHandPaper } from "react-icons/lia";
export default function Header() {


  return (
    <header className="flex justify-between text-[15px] ">
      <div className='w-full'>
        <div className="bg-[#35AFA0] w-[100%] flex items-center justify-center h-10 text-white ">
          <p className='my-auto'>Due to current circumstances, there may be slight delays in order processing</p>
        </div>
        <div className="flex justify-center">
          <div className="flex w-[90%] h-10 items-center justify-between">
            <div className="flex w-[30%]">
              <Link className="mr-3" to='/about'>About Us</Link>
              <Link className="mr-3" to='/about'>Compare</Link>
              <Link className="mr-3" to='/about'>Wishlist</Link>
            </div>
            <div className="flex items-center ">
              <LiaHandPaper />
              <p className="mr-3">100% Secure delivery without contacting the courier</p>
              <hr className="mr-3" />
              <p className="mr-3">Need help? Call Us: <span className="text-[#35AFA0]"> + 0020 500</span></p>

              <hr className="mr-3" />
              <div className="flex items-center justify-between w-[10%]">
                <div className="flex items-center ">
                  <p>English</p>
                  <GoChevronDown className="text-black text-sm ml-1" />
                </div>
                <div className="flex items-center">
                  <p>UCD</p>
                  <GoChevronDown className="text-black text-sm ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>


    </header>
  );
}
