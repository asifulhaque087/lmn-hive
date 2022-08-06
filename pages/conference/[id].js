import { gql } from "@apollo/client";
import { useState } from "react";
import client from "../../graphql/client";

const Conference = ({ conference }) => {
  return (
    <div>
      <div className="flex mt-40 gap-10 px-[10%]">
        {/* left */}
        <div className="w-full md:w-[450px]">
          {/* items */}

          <div className="mb-5 flex gap-5  p-2 border rounded items-center">
            <div className="bg-main-yellow/[.15] p-2 rounded">
              <img src="../cInfo.png" className="w-[20px] " alt="" />
            </div>
            <p className="text-sm font-bold">Organizer</p>
          </div>

          {/* {
            conference.conference
          } */}

          <div className="">
            <div className="mb-5 flex gap-5 bg-main-yellow  p-2 border rounded items-center">
              <div className="bg-white p-2 rounded">
                <img src="../cInfo.png" className="w-[20px] " alt="" />
              </div>
              <p className="text-sm font-bold">Speakers</p>
            </div>

            <div className="md:hidden p-10 bg-[#FBFBFB] text-[#0A142F] rounded">
              {/* loop here */}
              {conference &&
                conference.conference &&
                conference.conference.speakers &&
                conference.conference.speakers.map((sp, i) => {
                  return (
                    <div
                      key={i}
                      className="p-4 mb-5 flex    items-center bg-white"
                    >
                      {/* left */}
                      <div className="w-[50%] sm:w-[20%]">
                        <img
                          className="rounded-md w-full"
                          src={sp.image.url}
                          alt={sp.image.title}
                        />
                      </div>
                      {/* right */}
                      <div className="px-5 w-[50%] sm:w-[80%]">
                        <div className="flex flex-col sm:flex-row justify-between md:items-center text-sm font-bold mb-3 pr-3">
                          <span>
                            {sp.firstName} {sp.lastName}
                          </span>
                          <span className="font-normal opacity-[0.5]">
                            {sp.company}
                          </span>
                        </div>

                        <p className="text-sm  opacity-[0.8]">
                          {sp.aboutShort}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mb-5 flex gap-5  p-2 border rounded items-center">
            <div className="bg-main-yellow/[.15] p-2 rounded">
              <img src="../cInfo.png" className="w-[20px] " alt="" />
            </div>
            <p className="text-sm font-bold">Location</p>
          </div>

          <div className="mb-5 flex gap-5  p-2 border rounded items-center">
            <div className="bg-main-yellow/[.15] p-2 rounded">
              <img src="../cInfo.png" className="w-[20px] " alt="" />
            </div>
            <p className="text-sm font-bold">Schedule</p>
          </div>

          <div className="mb-5 flex gap-5  p-2 border rounded items-center">
            <div className="bg-main-yellow/[.15] p-2 rounded">
              <img src="../cInfo.png" className="w-[20px] " alt="" />
            </div>
            <p className="text-sm font-bold">Sponsor</p>
          </div>
        </div>

        {/* right */}
        <div className="hidden w-full md:block p-10 bg-[#FBFBFB] text-[#0A142F] rounded">
          {/* loop here */}
          {conference &&
            conference.conference &&
            conference.conference.speakers &&
            conference.conference.speakers.map((sp, i) => {
              return (
                <div key={i} className="p-4 mb-5 flex  items-center bg-white">
                  {/* left */}
                  <div className="w-[20%]">
                    <img
                      className="rounded-md w-full"
                      src={sp.image.url}
                      alt={sp.image.title}
                    />
                  </div>
                  {/* right */}
                  <div className="px-5 w-[80%]">
                    <div className="flex justify-between items-center text-sm font-bold mb-3 pr-3">
                      <span>
                        {sp.firstName} {sp.lastName}
                      </span>
                      <span className="font-normal opacity-[0.5]">
                        {sp.company}
                      </span>
                    </div>

                    <p className="text-sm  opacity-[0.8]">{sp.aboutShort}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Conference;

export async function getServerSideProps(context) {
  const { id } = context.params;

  const { data } = await client.query({
    query: gql`
      query Conference {
        conference(id: "${id}") {
          id
          name
          speakers{
            firstName
            lastName
            company
            image{
              title
              url
            }
            aboutShort
          }
        }
      }
    `,
    variables: { id },
  });

  return {
    props: {
      conference: data,
    },
  };
}
