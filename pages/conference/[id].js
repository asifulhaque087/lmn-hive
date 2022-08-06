import { gql } from "@apollo/client";
import { useState } from "react";
import client from "../../graphql/client";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Menu from "../../components/Menu";

const Conference = ({ conference }) => {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "organizer",
    },
    {
      id: "2",
      name: "speakers",
    },
    {
      id: "3",
      name: "location",
    },
    {
      id: "4",
      name: "Schedule",
    },
    {
      id: "5",
      name: "Sponsors",
    },
  ]);

  const sensors = [useSensor(PointerSensor)];

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div>
      <div className="flex mt-40 gap-10 px-[10%]">
        {/* left */}
        <div className="w-full md:w-[450px]">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items.map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item) => {
                return <Menu {...item} key={item.id} conference={conference} />;
              })}
            </SortableContext>
          </DndContext>

          {/* <div className="mb-5 flex gap-5  p-2 border rounded items-center">
            <div className="bg-main-yellow/[.15] p-2 rounded">
              <img src="../cInfo.png" className="w-[20px] " alt="" />
            </div>
            <p className="text-sm font-bold">Organizer</p>
          </div> */}

          {/* {
            conference.conference
          } */}
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
