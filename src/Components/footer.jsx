

import imgCoupon from '../assets/imgFoter/coupon.png-BJE2xgG1.png'
import imgGoogle from '../assets/imgFoter/google-play.png-B3_We6uC.png'
import imgApple from '../assets/imgFoter/app-store.png-gtpdVhV4.png'
import imgPayment from '../assets/imgFoter/payments.jpg-DRRadomW.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="m-0 p-0  overflow-hidden">

        {/* Newsletter */}
        <div className="flex flex-col md:flex-row justify-around text-white bg-[#35AFA0]">
          <div className="md:w-5/12 p-4 md:p-6 px-5 self-center">
            <p className="m-0"><span className="underline">$20 discount</span> for your first order</p>
            <h3 className="text-xl font-bold">Join our newsletter and get...</h3>
            <p className="opacity-70">Join our email subscription now to get updates on promotions and coupons.</p>
            <div className="bg-white flex flex-col md:flex-row items-center rounded-md mt-3 px-2">
              <div className="flex items-center md:w-8/12 w-full my-2 ">
                <i className="fa-regular fa-envelope text-gray-500 me-2"></i>
                <input className="border-0 p-3 w-3/4 outline-black text-black"type="text"placeholder="Your email address"/>
              </div>
              <div className="md:w-4/12 w-full my-2 text-end p-0">
                <button
                  type="button"
                  className="w-full bg-[#35AFA0] text-white p-3 px-4 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-6/12 flex justify-center self-end">
            <img className="w-3/4" src={imgCoupon} alt="coupon" />
          </div>
        </div>

        {/* Icons row */}
        <div className="bg-[#e4e5ee99]">
          <div className="p-4 border-b border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-2">
              <div className="p-2 text-sm lg:text-center md:ps-5 ">
                <i className="fa-solid fa-spray-can-sparkles"></i>
                <span> Everyday fresh products</span>
              </div>
              <div className="p-2 text-sm">
                <i className="fa-solid fa-truck"></i>
                <span> Free delivery for order over $70</span>
              </div>
              <div className="p-2 text-sm lg:text-center md:ps-5">
                <i className="fa-solid fa-percent"></i>
                <span> Daily Mega Discounts</span>
              </div>
              <div className="p-2 text-sm">
                <i className="fa-solid fa-dollar-sign"></i>
                <span> Best price on the market</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="ps-9 bg-[#e4e5ee99]">
          <div className="container mx-auto">
            {/* hidden md:grid lg:flex md:grid-cols-3 md:gap-4 lg:gap-8 py-5 flex-wrap justify-center */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-0 sm:p-4 gap-4 py-5">
              {/* Column 1 */}
              <div className="min-w-fit">
                <ul className="list-none leading-8 text-gray-500 text-[13px]">
                  <p className="font-semibold text-gray-700 text-[15px] pb-2">Fruit & Vegetables</p>
                  <li><Link to="/Fresh">Fresh Vegetables</Link></li>
                  <li><Link to="/Herbs">Herbs & Seasonings</Link></li>
                  <li><Link to="/FreshFruits">Fresh Fruits</Link></li>
                  <li><Link to="/Cuts">Cuts & Sprouts</Link></li>
                  <li><Link to="/Exotic">Exotic Fruits & Veggies</Link></li>
                  <li><Link to="/Packaged">Packaged Produce</Link></li>
                  <li><Link to="/Party">Party Trays</Link></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="min-w-fit">
                <ul className="list-none leading-8 text-gray-500 text-[13px] ">
                  <p className="font-semibold text-gray-700 text-[15px] pb-2">Breakfast & Dairy</p>
                  <li><Link to="/Milk">Milk & Flavoured Milk</Link></li>
                  <li><Link to="/Butter">Butter and Margarine</Link></li>
                  <li><Link to="/Cheese">Cheese</Link></li>
                  <li><Link to="/EggsSubstitutes">Eggs Substitutes</Link></li>
                  <li><Link to="/Honey">Honey</Link></li>
                  <li><Link to="/Marmalades">Marmalades</Link></li>
                  <li><Link to="/SourCream">Sour Cream and Dips</Link></li>
                  <li><Link to="/Yogurt">Yogurt</Link></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="min-w-fit">
                <ul className="list-none leading-8 text-gray-500 text-[13px] ">
                  <p className="font-semibold text-gray-700 text-[15px] pb-2">Meat & Seafood</p>
                  <li><Link to="/Breakfast">Breakfast Sausage</Link></li>
                  <li><Link to="/Dinner">Dinner Sausage</Link></li>
                  <li><Link to="/Beef">Beef</Link></li>
                  <li><Link to="/Chicken">Chicken</Link></li>
                  <li><Link to="/Sliced">Sliced Deli Meat</Link></li>
                  <li><Link to="/Shrimp">Shrimp</Link></li>
                  <li><Link to="/Wild">Wild Caught Fillets</Link></li>
                  <li><Link to="/Crab">Crab and Shellfish</Link></li>
                  <li><Link to="/Farm">Farm Raised Fillets</Link></li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="min-w-fit">
                <ul className="list-none leading-8 text-gray-500 text-[13px]">
                  <p className="font-semibold text-gray-700 text-[15px] pb-2">Beverages</p>
                  <li><Link to="/Water">Water</Link></li>
                  <li><Link to="/Sparkling">Sparkling Water</Link></li>
                  <li><Link to="/Soda">Soda & Pop</Link></li>
                  <li><Link to="/Coffee">Coffee</Link></li>
                  <li><Link to="/TeaKombucha">Tea & Kombucha</Link></li>
                  <li><Link to="/Drink">Drink Boxes & Pouches</Link></li>
                  <li><Link to="/Craft">Craft Beer</Link></li>
                  <li><Link to="/Wine">Wine</Link></li>
                </ul>
              </div>

              {/* Column 5 */}
              <div className="min-w-fit">
                <ul className="list-none leading-8 text-gray-500 text-[13px]">
                  <p className="font-semibold text-gray-700 text-[15px] pb-2">Breads & Bakery</p>
                  <li><Link to="/Milk">Milk & Flavoured Milk</Link></li>
                  <li><Link to="/Butter">Butter and Margarine</Link></li>
                  <li><Link to="/Cheese">Cheese</Link></li>
                  <li><Link to="/Eggs">Eggs Substitutes</Link></li>
                  <li><Link to="/Honey">Honey</Link></li>
                  <li><Link to="/Marmalades">Marmalades</Link></li>
                  <li><Link to="/Sour">Sour Cream and Dips</Link></li>
                  <li><Link to="/Yogurt">Yogurt</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact + Apps */}
        <div className="my-4 md:mx-5">
          <div className="flex flex-col md:flex-row items-center justify-between py-2">

            {/* Phone */}
            <div className="flex items-center w-auto md:ms-3 pe-2">
              <i className="fa-solid fa-phone-volume text-2xl"></i>
              <div className="ms-3">
                <h4>8 800 555-55</h4>
                <p className="m-0">Working 8:00 - 22:00</p>
              </div>
            </div>

            {/* Apps + Social */}
            <div className=" md:pe-6 pe-0 flex flex-col sm:flex-row items-center justify-end flex-1">
              <div className="text-center sm:text-right my-3 ">
                <p className="font-bold m-0">Download App on Mobile :</p>
                <p className="m-0">15% discount on your first purchase</p>
              </div>
              <div className="text-center  flex-nowrap">
                <img className="inline-block mx-1" src={imgGoogle} alt="imgGoogle" />
                <img className="inline-block mx-1" src={imgApple} alt="imgApple" />
              </div>
              <div className=" flex justify-center pt-3 gap-3">
                {["facebook-f", "twitter", "instagram"].map((icon, i) => (
                  <div key={i} className="w-11 h-11 flex justify-center items-center rounded-full border border-gray-300 transition-all duration-300 hover:bg-[#233A95] group">
                    <i className={`fa-brands fa-${icon} text-[#233A95] text-xl group-hover:text-white`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="px-5 md:mx-6 my-4 flex flex-col lg:flex-row items-center text-center lg:text-left gap-3">
          <div className="order-1 lg:order-1 flex-1">
            <p>Copyright 2025 © All rights reserved by Blackrise Theme</p>
          </div>

          <div className="order-3 lg:order-2 flex-1 ">
            <Link to={'/Privacy'} className="me-2 no-underline text-black">Privacy Policy</Link>
            <Link to={'/Terms'} className="me-2 no-underline text-black">Terms and Conditions</Link>
            <Link to={'/Cookie'} className="no-underline text-black">Cookie</Link>
          </div>

          <div className="order-2 lg:order-3 mb-3 lg:mb-0">
            <img src={imgPayment} alt="imgPayment" className="mx-auto lg:mx-0" />
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer

