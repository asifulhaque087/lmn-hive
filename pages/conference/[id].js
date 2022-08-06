import { gql } from "@apollo/client";
import client from "../../graphql/client";

const Conference = ({ conference }) => {
  console.log(conference);
  return (
    <div>
      <div className="flex mt-40 gap-10 px-[10%]">
        {/* left */}

        <div className="w-[450px]">
          <div className="mb-5 flex gap-5  p-2 border rounded items-center">
            <div className="bg-main-yellow/[.15] p-2 rounded">
              <img src="../cInfo.png" className="w-[20px] " alt="" />
            </div>
            <p className="text-sm font-bold">Organizer</p>
          </div>

          <div className="mb-5 flex gap-5 bg-main-yellow  p-2 border rounded items-center">
            <div className="bg-white p-2 rounded">
              <img src="../cInfo.png" className="w-[20px] " alt="" />
            </div>
            <p className="text-sm font-bold">Speakers</p>
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
        <div className="p-10 bg-[#FBFBFB] text-[#0A142F] rounded">
          {/* loop here */}
          {conference &&
            conference.conference &&
            conference.conference.speakers &&
            conference.conference.speakers.map((sp) => {
              return (
                <div
                  key={sp.id}
                  className="p-4 mb-5 flex  items-center bg-white"
                >
                  {/* left */}
                  <div>
                    <img
                      className="rounded-md w-[200px]"
                      src={sp.image.url}
                      alt={sp.image.title}
                    />
                  </div>
                  {/* right */}
                  <div className="px-5">
                    <div className="flex justify-between items-center text-sm font-bold mb-3 pr-3">
                      <span>
                        {sp.firstName} {sp.lastName}
                      </span>
                      <span className="font-normal opacity-[0.5]">
                        {sp.company}
                      </span>
                    </div>

                    <p className="text-sm  opacity-[0.8]">
                      Lorem ipsum dolor sit amet, conse ctetur adip iscing elit.
                      Et condi mentum lectus in vel pel lent esque arcu non
                      odio. Ut dis eu dolor ac tellus vitae ut.
                    </p>
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
