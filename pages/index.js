import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../graphql/client";
import { useRouter } from "next/router";
import Hero from "../components/Hero";
import Conferences from "../components/Conferences";

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

      <Hero />

      {/* Table */}
      {/* <Conferences newD={newD} /> */}
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
