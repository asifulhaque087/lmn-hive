import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../graphql/client";

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
      {/* <div className="px-5">
        <h1 className="text-[48px] md:text-[100px] leading-[58px]  md:leading-[120px] text-[#0A142F] font-bold text-right">
          React
          <br />
          Conference
        </h1>
      </div> */}

      <div className="grid place-items-center px-[10%] mt-[20%]">
        {/* <div className="grid grid-cols-1 md:grid-cols-3"> */}
        <div className="flex flex-col items-start md:flex-row gap-8 md:items-center">
          {/* left */}
          <div className="order-last md:order-first">
            <div className="w-full  max-w-[327px]">
              <img
                src="/hero1.jpg"
                className="w-full rounded-[30px]"
                alt="hero1"
              />
            </div>
          </div>
          {/* middle */}

          <div className="relative md:mb-32">
            <p className="w-full  max-w-[550px] md:max-w-full">
              Lorem uis diam turpis quam id fermetum.In quis diam turpis quam id
              fermentu me.In quis diam turpis quam id fermentum.
            </p>
            <button>
              Buy Tickets <span>-</span>
            </button>

            <div className="px-5 absolute  bottom-full md:right-0">
              <h1 className="text-[48px] md:text-[100px] leading-[58px]  md:leading-[120px] text-[#0A142F] font-bold text-right">
                React
                <br />
                Conference
              </h1>
            </div>
          </div>
          {/* right */}

          <div>
            <div className="relative w-full  max-w-[550px]">
              <img
                src="/hero2.jpg"
                className="w-full rounded-[50px]"
                alt="hero2"
              />

              <div className="absolute right-[-10px] md:left-0 bottom-[-55px]">
                <img src="/star.png" alt="star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
