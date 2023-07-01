const data = [
  {
    event: "",
    city: "",
    date: "",
    tickets: "",
  },
];

export function Show() {
  return (
    <>
      <h2>Concerts à venir</h2>
      <div id="show">
        <table>
          <tr>
            <th>Evènement</th>
            <th>Lieu</th>
            <th>Date</th>
            <th>Billetterie</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.event}</td>
                <td>{val.city}</td>
                <td>{val.date}</td>
                <td>
                  <a href={val.tickets} target="_blank" rel="noreferrer">
                    Billets
                  </a>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
