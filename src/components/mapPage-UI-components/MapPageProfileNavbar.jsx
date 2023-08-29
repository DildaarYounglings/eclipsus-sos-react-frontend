import React from 'react'

export const MapPageProfileNavbar = () => {
    return (
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "130px",
            width: "fit-content",
            height: "6rem",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20rem",
              listStyle: "none",
              translate:"-20px 0px"
            }}
          >
            <li style={{ display: "flex", flexDirection: "row", gap: "5rem" }}>
              <span style={{ fontSize: "19px" }}>Contacts</span>{" "}
              <input
                style={{ width: "309px", height: "39px", borderRadius: "50px" }}
                type="search"
                placeholder="🔍 Search"
              />
            </li>
            <li
              style={{
                position: "relative",
                top: "-10px",
                backgroundColor: "#13163F",
                borderRadius: "8px",
                height: "5rem",
                width: "fit-content",
                display: "flex",
              }}
            >
              <div>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2rem",
                    listStyle: "none",
                  }}
                >
                  <li style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "white" }}>Simthembile Kleinbooi</p>
                    <p style={{ color: "grey", translate: "0px -25px" }}>
                      +12 345 6789
                    </p>
                  </li>
                  <li style={{ translate: "-10px 10px" }}>
                    <button
                      style={{
                        backgroundColor: "#FF0000",
                        borderRadius: "500%",
                        width: "fit-content",
                        height: "fit-content",
                      }}
                    >
                      <DeclinePhoneCallBtn_SVG />
                    </button>
                  </li>
                </ul>
              </div>
            </li>
            <li style={{ translate: "0px -5px" }}>
              <ul style={{ listStyle: "none", display: "flex", gap: "6rem" }}>
                <li>
                  <BellIcon_SVG/>
                </li>
                <li style={{ translate: "0px -5px" }}>
                  <span
                    style={{
                      position: "relative",
                      top: "-10px",
                      paddingRight: "2rem",
                    }}
                  >
                    Lutho
                  </span>
                  <LuthoProfilePic_SVG />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      );
}
