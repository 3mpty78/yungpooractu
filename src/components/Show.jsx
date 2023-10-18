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
                              {data.map((value, key) => {
                                    return (
                                          <tr key={key}>
                                                <td>{value.event}</td>
                                                <td>{value.city}</td>
                                                <td>{value.date}</td>
                                                <td>
                                                      {/* <a
                                                            href={value.tickets}
                                                            target="_blank"
                                                            rel="noreferrer">
                                                            Billets
                                                      </a> */}
                                                </td>
                                          </tr>
                                    );
                              })}
                        </table>
                  </div>
            </>
      );
}
