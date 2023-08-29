import React, { useState } from "react";
import { ContactsPageFocusedContactInfo, EmailIcon_SVG, LocationIcon_SVG, OfficeIcon_SVG } from "../contactsPage-UI-components/ContactsPageBody";

export const ToggleableSideNavbar = function (props) {
  const [isOpen, setIsOpen] = useState(true);
  const [initialListOfContacts, listOfContacts, setListOfContacts] = props.listOfContacts;
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
    <React.Fragment>
      <style>
        {`
          .ToggleableSideNavbar_OpenNavbar{
            height:40vh;
            width:fit-content;
            transition-duration:1000ms;
          }
          .ToggleableSideNavbar_CloseNavbar{
            height:max-content;
            width:0px;
            transition-duration:1000ms;
          }
        `}
      </style>
      <div style={{translate: "0px 0px",position:"absolute",top:"15vh",transitionDuration:"1000ms",height:"30vh"}}>
        <input
          type="search"
          placeholder="🔍Search"
          onChange={(e) => setSearchQueryText(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
        <ol
          style={{
            listStyleType: "none",
            display: "flex",
            width: "fit-content",
            height: "78vh",
            flexDirection: "column",
            gap: "2vh",
            overflowY: "scroll",
          }}>
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
                  backgroundColor: `${isclickedItem.Fullname === item.Fullname
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
    </React.Fragment>
  );
};

export const RenderMap = function () {
  return <div style={{position:"relative",top:"25vh",left:"25vw",zIndex: -1 }}>MapRenderer</div>;
};

export const MapPageFocusedContactInfo = function(props){
  const [isclickedItem] = props.isclickedItem;
  if (
    isclickedItem.Fullname === "" ||
    isclickedItem === undefined ||
    isclickedItem === null
  ) {
    return <div style={{position:"absolute",left:"70vw"}}>Loading...</div>;
  }
  return (
    <div
      style={{
        position:"absolute",top:"12vh",left:"73vw",
        backgroundColor: "lightgrey",
        height: "fit-content",
        width: "fit-content",
      }}
    >
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
              gap: "5vh",
            }}
          >
            <ul
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
              <li style={{display: "block" }}>
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
              style={{
                translate: "-10px 0px",
                backgroundColor: "white",
                listStyleType: "none",
                display: "flex",
                flexDirection: "row",
                height: "fit-content",
                width: "200px",
                padding: "2vh 1vw",
              }}
            >
              <li
                style={{
                  display: "flex",
                  width:"fit-content",
                  height:"fit-content",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span>All Numbers</span>
                <div
                  style={{
                    display: "flex",
                    width:"100px",
                    height:"fit-content",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}>
                  <span>Home</span>
                  <br />
                  <div style={{display: "flex" }}>
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
              style={{
                translate: "-25px 0px",
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: "1vw",
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
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: "1rem",
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
  );
}
export const MapPageBody = function () {
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
        top: "0px",
        left: "130px",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <ToggleableSideNavbar
        searchQueryText={[searchQueryText, setSearchQueryText]}
        isclickedItem={[isclickeditem, setIsclickeditem]}
        listOfContacts={[
          initialListOfContacts,
          listOfContacts,
          setListOfContacts,
        ]}
      />
      <RenderMap />
      <MapPageFocusedContactInfo isclickedItem={[isclickeditem, setIsclickeditem]} />
      
    </div>
  );
};
