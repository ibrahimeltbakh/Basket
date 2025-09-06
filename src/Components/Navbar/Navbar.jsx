
import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
  let myPages = [
    { name: "Home", path: "" },
    { name: "About", path: "about" },
  ];

  return (
    <header className="flex justify-between">
    <div className='w-full'>
      <div className="bg-[#35AFA0] w-[100%] flex items-center justify-center h-10 text-white ">
        <p className='my-auto'>Due to current circumstances, there may be slight delays in order processing</p>
      </div>
      <div className="flex justify-center ">
        <div className="flex h-10 items-center justify-between">
          <Link className="mr-3" to='/about'>About Us</Link>
          <Link className="mr-3" to='/about'>Compare</Link>
          <Link className="mr-3" to='/about'>Wishlist</Link>
          <p className="mr-3">100% Secure delivery without contacting the courier</p>
          <hr className="mr-3" />
          <p className="mr-3">Need help? Call Us: + 0020 500</p>
        </div>
        <hr className="mr-3" />
        <div className="flex items-center justify-between w-[8%]">
          <p>English</p>
          <p>UCD</p>
        </div>
       
      </div>
       <hr />
    </div>  


    </header>
  );
}
