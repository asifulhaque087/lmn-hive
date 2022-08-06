import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../graphql/client";
import { useRouter } from "next/router";

const dateToday = (datt) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date(datt);
  // var dayName = days[d.getDay()];
  // return dayName;
  return d.getDay();
};

export default function Home({ conferences }) {
  // console.log("fist list ", conferences);
  const router = useRouter();

  let newD = {};

  for (let con of conferences.conferences) {
    if (
      con &&
      con.schedules[0] &&
      con.schedules[0].intervals[0] &&
      con.schedules[0].intervals[0] &&
      con.schedules[0].intervals[0].begin
    ) {
      newD[con.schedules[0].intervals[0].begin] = [{}, {}, {}, {}, {}, {}, {}];
      newD[con.schedules[0].intervals[0].begin][dateToday(con.startDate)] = con;
    }
  }


  return (
    <>
      <div className="l-g"></div>
      <div className="r-g"></div>

      <div className="grid place-items-center px-[10%] mt-[20%]">
        <div className="flex flex-col items-start md:flex-row gap-8 md:items-center">
          {/* left */}
          <div className="order-last md:order-first w-full  max-w-[250px] md:mt-40">
            <img
              src="/hero1.jpg"
              className="w-full rounded-[30px]"
              alt="hero1"
            />
          </div>
          {/* middle */}

          <div className="relative flex flex-col gap-5 md:max-w-[330px]  bottom-24">
            <div className="mt-10 md:relative  md:left-[-50%] md:bottom-10   md:right-0">
              <div className=" text-[30px] sm:text-[48px] md:text-[88px] leading-[25px] sm:leading-[58px]  md:leading-[85px] text-[#0A142F] font-bold text-right sm:text-center">
                <h1 className="xs:text-right sm:text-center">
                  <span className="sm:hidden md:inline invisible">slkdfs</span>
                  React
                  <span className="xs:hidden sm:hidden md:inline invisible">slkdfs</span>
                </h1>
                <h1 className="text-left xs:text-right sm:text-center">Conference</h1>
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
      {/* Table */}
      <table>
        <tbody>
          <tr>
            <th>Time</th>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>

          {Object.entries(newD).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                {value.map((con, i) => {
                  let isCon = Object.keys(con).length;
                  return (
                    <td key={i} className="text-[10px] px-3 font-bold">
                      {isCon ? (
                        <>
                          <p>{con.startDate}</p>
                          <div
                            onClick={() => router.push(`/conference/${con.id}`)}
                            className={`mt-2 cursor-pointer  border ${
                              i % 2 != 0
                                ? "bg-dark-blue/[.03] border-dark-blue text-dark-blue"
                                : "bg-main-yellow/[.1] border-main-yellow text-dark-yellow"
                            } rounded p-2 `}
                          >
                            {con.name}
                            <p className=" text-[9px] font-normal">
                              {con.schedules[0].intervals[0].begin} -{" "}
                              {con.schedules[0].intervals[0].end}
                            </p>
                          </div>
                        </>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Conferences {
        conferences {
          name
          id
          startDate
          endDate
          schedules {
            day
            intervals {
              begin
              end
            }
          }
        }
      }
    `,
  });

  // var sortedObjs = _.sortBy( data.conferences, 'intervals' );

  return {
    props: {
      conferences: data,
    },
  };
}
