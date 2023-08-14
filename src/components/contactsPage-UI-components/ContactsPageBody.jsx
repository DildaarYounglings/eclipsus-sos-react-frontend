import React, { useRef, useState } from "react";

export const ContactsPageList = function (props) {
  const [isclicked, setIsclicked] = props.isclicked;
  const listOfContacts = props.listOfContacts;
  const displayClickedPeopleInfo = function (arrItem) {
    listOfContacts.current.indexOf(arrItem);
    setIsclicked(arrItem.Fullname);
    console.log(isclicked);
  };
  return (
    <div>
      <input type="search" placeholder="🔍Search" />
      <ol
        style={{
          listStyleType: "none",
          display: "flex",
          width: "fit-content",
          height: "78vh",
          flexDirection: "column",
          gap: "5vh",
          overflowY: "scroll",
        }}
      >
        {listOfContacts.current &&
          listOfContacts.current.map((item, index, arr) => (
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
                  isclicked === item.Fullname ? "lightgrey" : "white"
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
    <div
      style={{
        width: "630px",
        height: "742px",
        display: "flex",
        flexDirection: "column",
        gap: "5vw",
      }}
    >
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
                height: "58px",
                width: "308px",
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
                  translate: "-10px -10px",
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
                <span>d</span>
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
  const [isclicked, setIsclicked] = props.isclicked;
  if (isclicked === "" || isclicked === undefined || isclicked === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <form>
        <ol
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <li style={{ display: "block" }}>
            <ul
              style={{
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
                  let splitContents = isclicked.split(" ");
                  return `${splitContents[0].charAt(
                    0
                  )}${splitContents[1].charAt(0)}`;
                })()}
              </li>
              <li style={{ display: "block" }}>
                <span>{isclicked}</span>
                <span style={{ color: "black" }}>{"✏️"}</span>
                <br />
                <span style={{display:"flex"}}>
                  <div>+123456789</div><div>📄</div>
                </span>
                <br/>
                <div style={{ display: "flex",gap:"2vw"}}>
                  <input type="button" value={"📞"} />
                  <input type="button" value={"⏱️"} />
                  <input type="button" value={"🏢"} />
                </div>
              </li>
              <br />
            </ul>
            <ol
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <li style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                <span>All Numbers</span>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}><span>Home</span><br/><div style={{display:"flex"}}><span style={{marginRight:"2vw"}}>+123456789 </span><span>{"✏️"}</span><span>{"⋮"}</span></div><br/></div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}><span>Work</span><br/><div style={{display:"flex"}}><span style={{marginRight:"2vw"}}>+123456789 </span><span>{"✏️"}</span><span>{"⋮"}</span></div></div>
              </li>
            </ol>
          </li>
          <li style={{ display: "block" }}>
            <div>next</div>
          </li>
          <li style={{ display: "block" }}>
            <div>after next</div>
          </li>
        </ol>
      </form>
    </div>
  );
};
export const ContactsPageBody = function () {
  const listOfContacts = useRef([
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
  ]);
  const [isclicked, setIsclicked] = useState("");
  return (
    <div
      style={{
        position: "absolute",
        top: "150px",
        left: "130px",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "13.5vw",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <ContactsPageList
        isclicked={[isclicked, setIsclicked]}
        listOfContacts={listOfContacts}
      />
      <ContactsPageSMS />
      <ContactsPageFocusedContactInfo isclicked={[isclicked, setIsclicked]} />
    </div>
  );
};
