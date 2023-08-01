import React from "react";

export const DeclinePhoneCallBtn_SVG = function () {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="#FF0000" />
        <path
          d="M15.9676 10.3834L15.839 11.0305C15.7187 11.6365 15.1292 12.0433 14.4611 11.9815L13.1307 11.858C12.5509 11.8043 12.0569 11.4087 11.9101 10.8808L11.4993 9.41122C10.8923 9.17222 10.2228 9.06302 9.49098 9.08361C8.78682 9.09815 8.09286 9.24817 7.45016 9.52479L7.19604 10.9007C7.09985 11.4224 6.65139 11.8112 6.08399 11.8661L4.76136 11.9934C4.10167 12.0571 3.46927 11.6539 3.28144 11.0511L3.08061 10.404C2.88043 9.76004 3.05916 9.08236 3.54922 8.62496C4.70676 7.5454 6.63644 7.00376 9.33824 7.00001C12.0446 6.99689 14.0341 7.53542 15.308 8.61497C15.8435 9.06926 16.0944 9.74195 15.9676 10.3834Z"
          fill="white"
        />
      </svg>
    </>
  );
};

export const UserProfileNavbar = function () {
  return (
    <div style={{ position: "absolute", top: "0px", left: "160px" }}>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30rem",
          listStyle: "none",
        }}
      >
        <li style={{ display: "flex", flexDirection: "row", gap: "5rem" }}>
          <span style={{ fontSize: "19px" }}>Dashboard</span>{" "}
          <input
            style={{ width: "309px", height: "39px", borderRadius: "50px" }}
            type="search"
            placeholder="🔍 Search"
          />
        </li>
        <li style={{ position:"relative",top:"-10px",backgroundColor:"#13163F",borderRadius:"8px",height:"5rem",width:"fit-content",}}>
          <div>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",gap:"2rem",
                listStyle: "none",
              }}
            >
              <li style={{ display: "flex", flexDirection: "column",}}>
                <p style={{color:"white"}}>Simthembile Kleinbooi</p>
                <p style={{color:"grey",translate:"0px -25px"}}>+12 345 6789</p>
              </li>
              <li style={{translate:"-10px 10px"}}>
                <button style={{ backgroundColor: "#FF0000",borderRadius:"500%",width:"fit-content",height:"fit-content"}}>
                  <DeclinePhoneCallBtn_SVG />
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};
