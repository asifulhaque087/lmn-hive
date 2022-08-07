const Conferences = ({newD}) => {
  return (
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
  );
};

export default Conferences;
