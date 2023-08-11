import React, { useState } from "react";

export const ContactsPageList = function () {
  const [listOfContacts, set_ListOfContacts] = useState([
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
  return (
    <div>
      <input type="search" placeholder="🔍Search" />
      <ol>
        {listOfContacts.map((item, index, arr) => (
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
    <div style={{ width: "630px", height: "742px",display:"flex",flexDirection:"column",gap:"5vw"}}>

      <div style={{overflowY:"scroll",overflowX:"hidden",width:"fit-content",paddingRight:"7vw"}}>
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
export const ContactsPageFocusedContactInfo = function () {
  return <div>Display current highlighted Contacts info</div>;
};
export const ContactsPageBody = function () {
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
      <ContactsPageList />
      <ContactsPageSMS />
      <ContactsPageFocusedContactInfo />
    </div>
  );
};
