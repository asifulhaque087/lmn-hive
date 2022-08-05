import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../graphql/client";

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
      console.log(newD[con.schedules[0].intervals[0].begin]);
    }
  }
  // console.log(newD);

  // conferences.conferences.sort((a, b) =>
  //   a.schedules.intervals.begin > b.schedules.intervals.begin
  //     ? 1
  //     : b.schedules.intervals.begin > a.schedules.intervals.begin
  //     ? -1
  //     : 0
  // );

  // let srtedArr = [...conferences.conferences].sort(
  //   (a, b) =>
  //     a.schedules.intervals &&
  //     b.schedules.intervals &&
  //     a.schedules.intervals > b.schedules.intervals
  //       ? 1
  //       : b.schedules.intervals > a.schedules.intervals
  //       ? -1
  //       : 0

  // a.schedules.intervals.begin[0] > b.schedules.intervals.begin[0]
  //   ? 1
  //   : b.schedules.intervals.begin[0] > a.schedules.intervals.begin[0]
  //   ? -1
  //   : 0
  // );

  // console.log("srted list ", srtedArr);

  // console.log("sorted list ", conferences.conferences);

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

          <div className="relative md:mb-5">
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

            <div className="absolute  bottom-[140%] md:right-0">
              <h1 className="text-[48px] md:text-[88px] leading-[58px]  md:leading-[85px] text-[#0A142F] font-bold text-right">
                React
                <br />
                Conference
              </h1>
            </div>
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
            {/* "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday", */}

            {/* <th className="invisible">Mon</th> */}
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
              <tr>
                <td>{key}</td>
                {value.map((con) => (
                  <td>{con.name}</td>
                ))}
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
