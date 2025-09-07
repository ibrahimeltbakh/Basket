import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"

function AboutUs() {
  return (
    <div>
      <div className="relative">
        <div className="bg-neutral-900">
          <img src={about1} alt="photo" className=" w-full h-96 bg-center object-cover bg-cover opacity-50" />
        </div>
        <div className=" flex flex-col absolute top-0 max-w-[1200px] gap-[7px] pt-36 pl-12 pr-7 md:pt-[160px] pb-[268px] md:pl-[450px]">
          <h1 className="font-semibold text-5xl leading-[72px] tracking-[0%] text-center align-middle text-white">
            About for Bacola
          </h1>
          <p className="font-semibold text-[12px] leading-[14.4px] tracking-[4px] text-center align-middle uppercase text-white">
            We can do more for you
          </p>
        </div>
      </div>

      <div className="body md:pr-[145px] md:pl-[145px] pl-8 pr-8 flex flex-col relative pt-10 ">
        <p className=" left-[15px] font-normal text-[14px] leading-[24px] tracking-[0%] align-middle text-[#202435]">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
          consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
        <p className=" lg:pr-96 pt-10 pl-10  font-semibold text-[32px] leading-[38.4px] tracking-[0%] align-middle text-[#202435]">
          Quisque erat urna, congue et libero ineleifend euismod velit.
        </p>
        <p className="pt-10 md:pl-10 w-3/4 font-normal text-[14px] leading-[24px] tracking-[0%] align-middle text-[#202435]">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, 
          consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
        <div className="lg:flex">
          <div className=" pt-[40px] max-w-[592.5px] ">
            <img loading="lazy" src={about2} alt="photo" />
          </div>
          <div className=" max-w-[592.5px]  pt-[60px] pr-[15px] lg:pb-[216.56px] pb-10 pl-[15px] lg:pl-10">
            <p className=" pl-[40px] font-normal text-[16px] leading-[24px] tracking-[-0.1px] align-middle text-[#202435]">
              Rachel Leonard - Bacola CEO
            </p>
            <p className="pt-4  font-semibold text-[28px] leading-[33.6px] tracking-[0%] align-middle text-[#202435]">
              Duis convallis luctus pretium.<br />Pellentesque habitant morbi
            </p>
            <div className=" gap-[16px] pt-5 pl-[40px]">
              <p className="font-normal text-[14px]  tracking-[0%] align-middle text-[#202435] md:pr-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisseultrices gravida. Risus commodo viverra maecenas accumsan lacus velfacilisis.
              </p>
              <p className="md:pt-1 pt-3  font-normal  text-[14px] tracking-[-0.4px] align-middle text-[#202435] md:pr-12">
                In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla,
                eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis libero ante. Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem.
                Curabitur fermentum dolor eu lacus consectetur varius.
              </p>
            </div>
          </div>
        </div>
        <div className="left-[15px]">
          <p className="font-normal text-[14px] leading-[24px] tracking-[0%] align-middle text-[#202435]">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus.
            Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>
        <div className=" lg:bottom-35 lg:left-[200px] rounded-[7px] bg-[#FFFFFF] lg:absolute md:p-10 pt-5 ">
          <p className=" font-normal text-[14px] leading-[24px] tracking-[0%] align-middle text-[#202435] lg:pr-40 ">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec,consectetur quis enim.
            Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus indapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elitante, vel vulputate tortor blandit nec.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
