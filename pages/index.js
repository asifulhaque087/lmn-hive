import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="l-g"></div>
      <div className="r-g"></div>
      {/* navigation section */}
      <div className="flex items-center">
        {/* left */}
        <div>
          <h1 className="text-[20px] font-normal">
            Rea<span className="text-main-yellow">c</span>t
          </h1>
        </div>
        <div className="ml-auto">
          <Image
            className="rounded-[20px]"
            src="/hamburger.png"
            alt="me"
            width={24}
            height={24}
          />
        </div>
        {/* right */}
      </div>
      {/* hero section */}
      <div className="px-5">
        <h1 className="text-[48px] text-[#0A142F] font-bold text-right leading-[58px]">
          React
          <br />
          Conference
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {/* left */}

        <div className="order-last md:order-first">
          <div>
            <Image
              className="rounded-[20px]"
              src="/hero1.jpg"
              alt="me"
              width={157}
              height={200}
            />
          </div>
        </div>
        {/* middle */}

        <div>
          <p>
            Lorem uis diam turpis quam id fermetum.In quis diam turpis quam id
            fermentu me.In quis diam turpis quam id fermentum.
          </p>
          <button>
            Buy Tickets <span>-</span>
          </button>
        </div>
        {/* right */}

        <div>
          <div>
            <Image
              className="rounded-[35px]"
              src="/hero2.jpg"
              alt="me"
              width={327}
              height={333}
            />
          </div>
        </div>
      </div>
    </>
  );
}
