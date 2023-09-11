import React, {useState } from "react";

export const ContactsPageList = function (props) {
  const [initialListOfContacts,listOfContacts, setListOfContacts] = props.listOfContacts;
  const [searchQueryText, setSearchQueryText] = props.searchQueryText;
  const [isclickedItem, setIsclickedItem] = props.isclickedItem;
  const handleSearch = function () {
    if (searchQueryText === "") {
      setListOfContacts(initialListOfContacts);
    } else {
      const filtered = [...listOfContacts].filter(
        (item, index, arr) =>
          item.Fullname.toUpperCase().includes(searchQueryText.toUpperCase())
      );
      console.log(filtered);
      setListOfContacts(filtered);
    }
  };
  const displayClickedPeopleInfo = function (arrItem) {
    listOfContacts.indexOf(arrItem);
    setIsclickedItem({ ...arrItem });
    console.log(isclickedItem);
  };

  return (
    <div className="ContactsPageList">
      <input
        type="search"
        placeholder="🔍Search"
        onChange={(e) => setSearchQueryText(e.target.value)}
      />
      <button onClick={() => handleSearch()}>Search | refresh</button>
      <ol>
        {listOfContacts &&
          listOfContacts.map((item, index, arr) => (
            <li
              onClick={(e) => displayClickedPeopleInfo(item)}
              key={index}
              style={{
                cursor: "pointer",
                height: "58px",
                width: "308px",
                display: "flex",
                gap: "2rem",
                backgroundColor: `${
                  isclickedItem.Fullname === item.Fullname
                    ? "lightgrey"
                    : "white"
                }`,
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "1.8rem",
                  backgroundColor: "#FE4747",
                  color: "white",
                  borderRadius: "50%",
                }}
              >
                {(() => {
                  let splitItem = item.Fullname.split(" ");
                  let contents =
                    splitItem[0].charAt(0).toUpperCase() +
                    splitItem[1].charAt(0).toUpperCase();
                  return contents;
                })()}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  translate: "0px -5px",
                }}
              >
                <span>{item.Fullname}</span>
                <span>{item.ContactNum}</span>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};
export const ContactsPageSMS = function () {
  const [messagesArray, set_messagesArray] = useState([
    {
      sender: "Simthembile Kleinbooi",
      messageText:
        "Simthembile, Requested for virtual escort between  to 17:30 form 31st lower long to Mabhida street",
      isSent: true,
      isRead: true,
      isCalling: false,
      isCallOnGoing: false,
    },
    {
      sender: "Lutho Majama",
      messageText:
        "Simthembile we have seen your request for a virtual escort. We will keep an eye of you until you reach point B of your journey via our live location tracker.",
      isSent: true,
      isRead: true,
      isCalling: false,
      isCallOnGoing: false,
    },
    {
      sender: "Simthembile Kleinbooi",
      messageText:
        "Simthembile, Requested for virtual escort between  to 17:30 form 31st lower long to Mabhida street",
      isSent: true,
      isRead: true,
      isCalling: false,
      isCallOnGoing: false,
    },
  ]);
  return (
    <div className="ContactsPageSMS">
      <div
        style={{
          overflowY: "scroll",
          overflowX: "hidden",
          width: "fit-content",
          paddingRight: "7vw",
        }}
      >
        <ol
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: "5vw",
          }}
        >
          {messagesArray.map((item, index, arr) => (
            <li
              key={index}
              style={{
                borderRadius: "20px",
                backgroundColor: "rgb(247, 247, 247)",
                height: "fit-content",
                width: "fit-content",
                display: "flex",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "1.8rem",
                  backgroundColor: "#FE4747",
                  color: "white",
                  borderRadius: "50%",
                }}
              >
                {(() => {
                  let splitItem = item.sender.split(" ");
                  let contents =
                    splitItem[0].charAt(0).toUpperCase() +
                    splitItem[1].charAt(0).toUpperCase();
                  return contents;
                })()}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  translate: "-20px 0px",
                }}
              >
                <span
                  style={{
                    height: "fit-content",
                    width: "347px",
                    paddingBottom: "10px",
                  }}
                >
                  {item.messageText}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <ol style={{ listStyleType: "none" }}>
          <li>
            <input type="text" />
            <input type="button" value="Send Text" />
          </li>
        </ol>
      </div>
    </div>
  );
};


export const ContactsPageFocusedContactInfo = function (props) {
  const [isclickedItem] = props.isclickedItem;
  return (
  <>
    {
      (isclickedItem.Fullname === "" ||
      isclickedItem === undefined ||
      isclickedItem === null)? (<div>Loading...</div> ) : (
        <div id="ContactsPageFocusedContactInfo" style={{backgroundColor: "rgb(247, 247, 247)", height: "fit-content",width: "340px",translate: "0px -75px",}}>
      <form>
        <ol
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <li
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
              alignItems: "flex-start",
              gap: "2vh",
            }}
          >
            <ul
              id="ContactOptions"
              style={{
                translate: "-20px 0px",
                padding: "1rem",
                backgroundColor: "white",
                listStyleType: "none",
                display: "flex",
                flexDirection: "row",
                gap: "2vh",
              }}
            >
              <li
                style={{
                  display: "block",
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  height: "3vh",
                  width: "1.5vw",
                }}
              >
                {(() => {
                  let splitContents = isclickedItem.Fullname.split(" ");
                  return `${splitContents[0].charAt(
                    0
                  )}${splitContents[1].charAt(0)}`;
                })()}
              </li>
              <li style={{ display: "block" }}>
                <span>{isclickedItem.Fullname}</span>
                <span style={{ color: "black" }}>{"✏️"}</span>
                <br />
                <span style={{ display: "flex" }}>
                  <div>{isclickedItem.ContactNum}</div>
                  <div>📄</div>
                </span>
                <br />
                <div style={{ display: "flex", gap: "2vw" }}>
                  <input type="button" value={"📞"} />
                  <input type="button" value={"⏱️"} />
                  <input type="button" value={"🏢"} />
                </div>
              </li>
              <br />
            </ul>
            <ol
              id="ContactsPhoneNumbers"
              style={{
                backgroundColor: "white",
                listStyleType: "none",
                display: "flex",
                flexDirection: "row",
                height: "190px",
                width: "200px",
                padding: "1vh",
              }}
            >
              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span>All Numbers</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span>Home</span>
                  <br />
                  <div style={{ display: "flex" }}>
                    <span style={{ marginRight: "2vw" }}>
                      {isclickedItem.ContactNum}
                    </span>
                    <span>{"✏️"}</span>
                    <span style={{ padding: "0vh 1vw" }}>{"⋮"}</span>
                  </div>
                  <br />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span>Work</span>
                  <br />
                  <div style={{ display: "flex" }}>
                    <span style={{ marginRight: "2vw" }}>
                      {isclickedItem.ContactNum}
                    </span>
                    <span>{"✏️"}</span>
                    <span style={{ padding: "0vh 1vw" }}>{"⋮"}</span>
                  </div>
                </div>
              </li>
            </ol>
            <ul
              id="AboutThisContact"
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: "1vw",
                translate: "-25px 0px",
              }}
            >
              <li>
                <span>About this Contact</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>
                      {<EmailIcon_SVG />}
                      {" Email:"}
                    </span>
                    <span>{isclickedItem.Fullname + "@gmail.com"}</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>
                      {<LocationIcon_SVG />}
                      {" City:"}
                    </span>
                    <span>Western Cape ,Cape Town</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>
                      {<OfficeIcon_SVG />}
                      {" office:"}
                    </span>
                    <span>{isclickedItem.Fullname + "@gmail.com"}</span>
                  </div>
                </div>
              </li>
            </ul>
            <ul
              id="Notes"
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: "1vw",
                translate: "-25px 0px",
              }}
            >
              <li>
                <span>Email: {isclickedItem.Fullname + "@gmail.com"}</span>
              </li>
              <li>
                <span>City: Western Cape ,Cape Town</span>
              </li>
            </ul>
          </li>
        </ol>
      </form>
    </div>
      )
    }
  </>
  );
};

export const LocationIcon_SVG = () => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.49906 2.90625C4.79743 2.90625 5.08357 3.02478 5.29455 3.23575C5.50553 3.44673 5.62406 3.73288 5.62406 4.03125C5.62406 4.32962 5.50553 4.61577 5.29455 4.82675C5.08357 5.03772 4.79743 5.15625 4.49906 5.15625C4.20069 5.15625 3.91454 5.03772 3.70356 4.82675C3.49258 4.61577 3.37406 4.32962 3.37406 4.03125C3.37406 3.73288 3.49258 3.44673 3.70356 3.23575C3.91454 3.02478 4.20069 2.90625 4.49906 2.90625ZM5.15531 4.03125C5.15531 3.8572 5.08617 3.69028 4.9631 3.56721C4.84003 3.44414 4.67311 3.375 4.49906 3.375C4.32501 3.375 4.15809 3.44414 4.03502 3.56721C3.91195 3.69028 3.84281 3.8572 3.84281 4.03125C3.84281 4.2053 3.91195 4.37222 4.03502 4.49529C4.15809 4.61836 4.32501 4.6875 4.49906 4.6875C4.67311 4.6875 4.84003 4.61836 4.9631 4.49529C5.08617 4.37222 5.15531 4.2053 5.15531 4.03125ZM2.0625 6L3.954 8.00812C4.02412 8.08258 4.10872 8.14191 4.20262 8.18247C4.29652 8.22302 4.39772 8.24394 4.5 8.24394C4.60227 8.24394 4.70347 8.22302 4.79737 8.18247C4.89127 8.14191 4.97587 8.08258 5.046 8.00812L6.9375 6H6.93037L6.93356 5.99625L6.9375 5.99156C7.42299 5.41738 7.68879 4.68943 7.6875 3.9375C7.6875 2.17706 6.26043 0.75 4.5 0.75C2.73956 0.75 1.3125 2.17706 1.3125 3.9375C1.3112 4.68943 1.577 5.41738 2.0625 5.99156L2.06643 5.99625L2.06962 6H2.0625ZM2.42681 5.69644C2.00904 5.2057 1.78012 4.58198 1.78125 3.9375C1.78125 2.436 2.9985 1.21875 4.5 1.21875C6.0015 1.21875 7.21875 2.436 7.21875 3.9375C7.21992 4.58199 6.99099 5.20573 6.57318 5.69644L6.51543 5.7645L4.70475 7.68656C4.67845 7.71448 4.64672 7.73673 4.61151 7.75194C4.5763 7.76715 4.53835 7.77499 4.5 7.77499C4.46164 7.77499 4.42369 7.76715 4.38848 7.75194C4.35327 7.73673 4.32154 7.71448 4.29525 7.68656L2.48456 5.7645L2.42681 5.69644Z"
        fill="#808080"
      />
    </svg>
  );
};

export const OfficeIcon_SVG = () => {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2.78679C7.89764 2.78679 7.79498 2.80764 7.70849 2.85978C7.22222 3.1541 7.22222 3.55537 7.22222 3.82943V3.82943C7.22222 3.91169 7.15554 3.97838 7.07327 3.97838H5.82222M3.33333 4.87207H8M5.66667 4.87207V8M4.26667 7.85105C3.95556 7.85105 3.72222 7.4042 3.72222 7.4042C3.72222 7.4042 3.72222 7.4042 3.72222 7.4042C3.48889 6.95736 3.48889 6.65946 3.48889 6.21261V6.21261C3.48889 5.96583 3.28883 5.76577 3.04204 5.76577H1.06581C1.02947 5.76577 1 5.7363 1 5.69995V5.69995C1 5.6942 1.00075 5.68848 1.00224 5.68293L1.59796 3.45855C1.64941 3.26637 1.76618 3.09605 1.92987 2.97443C2.09356 2.85281 2.29485 2.78679 2.50204 2.78679V2.78679C2.72616 2.78679 2.9317 2.91134 3.03544 3.11L3.31684 3.64891C3.36853 3.74795 3.44802 3.83124 3.54638 3.88944C3.64475 3.94763 3.7581 3.97843 3.87373 3.97838H5.2M2.32222 1.52073C2.32222 1.82925 2.66393 2.08665 2.78112 2.16585C2.80639 2.18293 2.83611 2.191 2.86662 2.191V2.191C2.89719 2.191 2.92697 2.1829 2.95227 2.16574C3.0693 2.08643 3.40987 1.82912 3.40987 1.52073C3.40987 1.45234 3.3958 1.38463 3.36847 1.32145C3.34114 1.25827 3.30108 1.20087 3.25059 1.15252C3.20009 1.10416 3.14014 1.06581 3.07416 1.03964C3.00818 1.01347 2.93746 1 2.86604 1C2.79463 1 2.72391 1.01347 2.65793 1.03964C2.59195 1.06581 2.532 1.10416 2.4815 1.15252C2.43101 1.20087 2.39095 1.25827 2.36362 1.32145C2.33629 1.38463 2.32222 1.45234 2.32222 1.52073Z"
        stroke="#808080"
        strokeWidth="0.5"
      />
    </svg>
  );
};
export const EmailIcon_SVG = () => {
  return (
    <svg
      width="9"
      height="8"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_953_42)">
        <path
          d="M8.15625 7.42843H0.84375C0.376875 7.42843 0 7.04557 0 6.57129V1.42843C0 0.954146 0.376875 0.571289 0.84375 0.571289H8.15625C8.62313 0.571289 9 0.954146 9 1.42843V6.57129C9 7.04557 8.62313 7.42843 8.15625 7.42843ZM0.84375 1.14272C0.68625 1.14272 0.5625 1.26843 0.5625 1.42843V6.57129C0.5625 6.73129 0.68625 6.857 0.84375 6.857H8.15625C8.31375 6.857 8.4375 6.73129 8.4375 6.57129V1.42843C8.4375 1.26843 8.31375 1.14272 8.15625 1.14272H0.84375Z"
          fill="#808080"
        />
        <path
          d="M4.49993 5.11979C4.10618 5.11979 3.74618 4.95979 3.47618 4.66836L0.523051 1.47979C0.416176 1.3655 0.421801 1.18265 0.534301 1.07407C0.646801 0.965503 0.826801 0.971217 0.933676 1.0855L3.8868 4.27407C4.20743 4.62265 4.79243 4.62265 5.11305 4.27407L8.06618 1.09122C8.17305 0.976932 8.35305 0.971217 8.46555 1.07979C8.57805 1.18836 8.58368 1.37122 8.4768 1.4855L5.52368 4.67407C5.25368 4.9655 4.89368 5.1255 4.49993 5.1255V5.11979Z"
          fill="#808080"
        />
      </g>
      <defs>
        <clipPath id="clip0_953_42">
          <rect width="9" height="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const ContactsPageBody = function () {
  const initialListOfContacts = [
    { Fullname: "Simthembile Kleinbooi", ContactNum: "+123456789" },
    { Fullname: "Luyolo Phondo", ContactNum: "+123456789" },
    { Fullname: "Sibusiso Khubalo", ContactNum: "+123456789" },
    { Fullname: "Samuel Matte", ContactNum: "+123456789" },
    { Fullname: "James Sander", ContactNum: "+123456789" },
    { Fullname: "Harry Perez", ContactNum: "+123456789" },
    { Fullname: "Adam David", ContactNum: "+123456789" },
    { Fullname: "Taha Hawkings", ContactNum: "+123456789" },
    { Fullname: "Tilly Chandler", ContactNum: "+123456789" },
    { Fullname: "Kesley Walker", ContactNum: "+123456789" },
  ];
  const [listOfContacts, setListOfContacts] = useState(initialListOfContacts);
  const [searchQueryText, setSearchQueryText] = useState("");
  const [isclickeditem, setIsclickeditem] = useState({
    Fullname: "",
    ContactNum: "",
  });
  return (
    <div
      style={{
        position: "absolute",
        top: "150px",
        left: "130px",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "2vw",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <ContactsPageList
        searchQueryText={[searchQueryText, setSearchQueryText]}
        isclickedItem={[isclickeditem, setIsclickeditem]}
        listOfContacts={[initialListOfContacts,listOfContacts, setListOfContacts]}
      />
      <ContactsPageSMS />
      <ContactsPageFocusedContactInfo
        isclickedItem={[isclickeditem, setIsclickeditem]}
      />
    </div>
  );
};
