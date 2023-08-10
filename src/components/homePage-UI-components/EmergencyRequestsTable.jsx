import React from "react";

export const EmergencyRequestsTable = function () {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        position: "absolute",
        top: "400px",
        left: "130px",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <ol style={{ listStyle: "none" }}>
        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <p></p>
              <p></p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div></div>
              <ol
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <li></li>
                <li></li>
              </ol>
            </div>
          </div>
          <table
            style={{
              overflowX: "hidden",
              overflowY: "scroll",
              height: "442px",
              width: "fit-content",
            }}
          >
            <thead>
              <tr
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  gap: "8vw",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                }}
              >
                <th>
                  <div>
                    <input type="checkbox" />
                    <span>Name</span>
                  </div>
                </th>
                <th
                  style={{
                    height: "fit-content",
                    width: "fit-content",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>Type</div>
                </th>
                <th
                  style={{
                    height: "fit-content",
                    width: "fit-content",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>Status</div>
                </th>
                <th
                  style={{
                    height: "fit-content",
                    width: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    translate: "-50px 0px",
                  }}
                >
                  <div>Run time</div>
                </th>
                <th
                  style={{
                    height: "fit-content",
                    width: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    translate: "-95px 0px",
                  }}
                >
                  <div>Finish date</div>
                </th>
              </tr>
            </thead>

            <tbody>
              <div
                style={{
                  overflowX: "hidden",
                  overflowY: "scroll",
                  height: "442px",
                  width: "48vw",
                }}
              >
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
                <tr
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    gap: "5.5vw",
                  }}
                >
                  <td>
                    <div>
                      <input type="checkbox" />
                      <span>Luyolo Pondo</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Distress Call</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Status</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>45 minutes</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span>Finish date</span>
                    </div>
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </li>
      </ol>
      <ol
        style={{
          listStyleType: "none",
        }}
      >
        <li>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <li>
              <CircleGraph_SVG />
            </li>
            <li style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ display: "flex", gap: "2.5vw" }}>
                <div
                  style={{
                    backgroundColor: "#7F0000",
                    height: "22px",
                    width: "22px",
                  }}
                ></div>
                <span>New</span>{" "}
              </p>
              <p style={{ display: "flex", gap: "2.5vw" }}>
                <div
                  style={{
                    backgroundColor: "#FBDD00",
                    height: "22px",
                    width: "22px",
                  }}
                ></div>
                <span>Unsubscribed</span>
              </p>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};
export const CircleGraph_SVG = function () {
  return (
    <svg
      width="187"
      height="183"
      viewBox="0 0 187 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="91.5" cy="91.5" r="91.5" fill="#FF1616" />
      <g filter="url(#filter0_i_0_1)">
        <path
          d="M92 92.0088L181.532 69.4097C185.429 84.1653 185.009 99.7292 180.322 114.253L177.5 123L92 92.0088Z"
          fill="#FBDD00"
        />
      </g>
      <g filter="url(#filter1_d_0_1)">
        <path
          d="M183 75.4222C89.3135 103.432 154.544 84.163 89.3135 103.432C89.3135 33.7324 89.3135 164.003 89.3135 103.432C89.3135 47.4126 89.3143 80.9567 89.3135 5.88069e-10C142.5 0 167.5 28 183 75.4222Z"
          fill="#7F0000"
        />
      </g>
      <circle cx="92" cy="92" r="28" fill="#D9D9D9" />
      <defs>
        <filter
          id="filter0_i_0_1"
          x="92"
          y="69.4097"
          width="98.1748"
          height="54.5903"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="6" dy="1" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <filter
          id="filter1_d_0_1"
          x="85.3135"
          y="0"
          width="101.687"
          height="128"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
