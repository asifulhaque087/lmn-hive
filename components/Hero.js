const Hero = () => {
  return (
    // <div className="grid place-items-center px-[10%] mt-[20%]">
    <div className="grid place-items-center px-[10%] mt-[150px]">
      <div className="flex flex-col items-start md:flex-row gap-8 md:items-center">
        {/* left */}
        <div className="relative z-0 order-last md:order-first w-full  max-w-[250px] md:mt-40">
          <img src="/hero1.jpg" className="w-full rounded-[30px]" alt="hero1" />

          <div className="hidden sm:block absolute z-[-1] right-[-100px]  bottom-[-55px]">
            <img src="/sphare.png" alt="star" />
          </div>
        </div>
        {/* middle */}

        <div className="relative flex flex-col gap-5 md:max-w-[330px]  bottom-24">
          <div className="mt-10 md:relative  md:left-[-50%] md:bottom-10   md:right-0">
            {/* <div className="text-[30px] sm:text-[48px] md:text-[88px] leading-[25px] sm:leading-[58px]  md:leading-[85px] text-[#0A142F] font-bold  bg-green-5000 min-w-fit"> */}

            <div className="mTitle text-[30px] leading-[27px] xxs:text-[45px] xxs:leading-[42px] xs:text-[60px] xs:leading-[57px] sm:text-[88px] sm:leading-[85px] min-w-fit font-bold">
              <h1 className="text-right">
                <span className="relative inline-block">
                  React
                  <div className="absolute scale-50  bottom-[0%] left-[-60%] xxs:scale-[.6] xxs:bottom-[15%] xxs:left-[-43%] xs:transform-none xs:bottom-[60%] xs:left-[-40%] sm:bottom-[65%] sm:left-[-25%] md:scale-75 md:bottom-[65%] md:left-[-20%]">
                    <img src="../line.png" alt="" />
                  </div>
                </span>

                {/* <div className="absolute right-[-250%]  top-[-10%]">
                  <img src="../chabuk.png" alt="" />
                </div> */}
              </h1>

              <h1 className="text-right">Conference</h1>
            </div>
          </div>

          <p className="text-sm  opacity-[0.8] w-full  max-w-[550px] md:max-w-full">
            Lorem uis diam turpis quam id fermetum.In quis diam turpis quam id
            fermentu me.In quis diam turpis quam id fermentum.
          </p>

          <div className="grid place-items-center">
            <button className="mt-3 bg-main-yellow  mx-auto px-12 py-3 rounded-full flex items-center font-medium">
              <span>Buy Tickets</span>
              <span className="ml-2">
                <img src="/buttonIcon.png" alt="button" />
              </span>
            </button>
          </div>

          {/* <div className="absolute  bottom-[140%] md:right-0">
              <h1 className="text-[48px] md:text-[88px] leading-[58px]  md:leading-[85px] text-[#0A142F] font-bold text-right">
                React
                <br />
                Conference
              </h1>
            </div> */}
        </div>
        {/* right */}

        <div className="relative w-full  max-w-[550px] md:mt-20">
          <img src="/hero2.jpg" className="w-full rounded-[50px]" alt="hero2" />

          <div className="absolute right-[-10px] md:left-0 bottom-[-55px]">
            <img src="/star.png" alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
