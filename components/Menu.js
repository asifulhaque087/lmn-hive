import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Menu = ({ id, name, conference }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
    isDragging,
  } = useSortable({ id: id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  //   return (
  //     <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
  //       {name}
  //     </div>
  //   );

  if (name == "speakers") {
    return (
      <div
        ref={setNodeRef}
        // {...attributes}
        {...listeners}
        style={style}
        // draggable="true"
        className=""
      >
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
                <div key={i} className="p-4 mb-5 flex    items-center bg-white">
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

                    <p className="text-sm  opacity-[0.8]">{sp.aboutShort}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      //   {...attributes}
      {...listeners}
      style={style}
      // draggable="true"
      className="mb-5 flex gap-5  p-2 border rounded items-center"
    >
      <div className="bg-main-yellow/[.15] p-2 rounded">
        <img src="../cInfo.png" className="w-[20px] " alt="" />
      </div>
      <p className="text-sm font-bold">{name}</p>
    </div>
  );
};

export default Menu;
