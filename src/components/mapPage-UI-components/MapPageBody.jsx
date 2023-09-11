import React, { useState } from "react";
import {
  EmailIcon_SVG,
  LocationIcon_SVG,
  OfficeIcon_SVG,
} from "../contactsPage-UI-components/ContactsPageBody";


export const ToggleableSideNavbar = function (props) {
//                    variables                         //
  const [isOpen, setIsOpen] = props.isOpen;
  const [initialListOfContacts, listOfContacts, setListOfContacts] = props.listOfContacts;
  const [searchQueryText, setSearchQueryText] = props.searchQueryText;
  const [isclickedItem, setIsclickedItem] = props.isclickedItem;

//                     functions                        //
  const handleToggleContacts_IsOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  const handleSearch = function () {
    if (searchQueryText === "") {
      setListOfContacts(initialListOfContacts);
    } else {
      const filtered = [...listOfContacts].filter((item, index, arr) =>
        item.Fullname.toUpperCase().includes(searchQueryText.toUpperCase())
      );
      console.log(filtered);
      setListOfContacts(filtered);
    }
  }

  const displayClickedPeopleInfo = function (arrItem) {
    listOfContacts.indexOf(arrItem);
    setIsclickedItem({ ...arrItem });
    console.log(isclickedItem);
  }
  //             returned jsx             //
  return (
    <React.Fragment>
      <style>
        {`
          .ToggleableSideNavbar_OpenNavbar{
            background-color: white;
            translate: 0px 0px;
            position: absolute;
            top: 15vh;
            transitionDuration: 2000ms;
            height: 30vh;
          }
          .ToggleableSideNavbar_CloseNavbar{
            position: absolute;
            top: -1000vh;
            height:0px;
            width:0px;
            transition-duration:2000ms;
          }
        `}
      </style>
      <button style={{position:"absolute",top:"3vh",left:"2.5vw",width:"5vw",backgroundColor:"transparent",outline:"0px solid black",cursor:"pointer"}} onClick={() => handleToggleContacts_IsOpen()}></button>
      <div className={`${(isOpen === true)? "ToggleableSideNavbar_OpenNavbar" : "ToggleableSideNavbar_CloseNavbar" }`}
      >
        <input
          type="search"
          placeholder="🔍Search"
          onChange={(e) => setSearchQueryText(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
        <button onClick={() => handleToggleContacts_IsOpen()}>X</button>
        <ol
          style={{
            backgroundColor:"white",
            listStyleType: "none",
            display: "flex",
            width: "fit-content",
            height: "78vh",
            flexDirection: "column",
            gap: "2vh",
            overflowY: "scroll",
          }}
        >
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
    </React.Fragment>
  );
};

export const RenderMap = function(props){
  const [isOpen,setIsOpen] = props.isOpen;

  const handleToggleContacts_IsOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <div
      style={{ position: "relative", top: "15vh", left: "1.5vw", zIndex: -1 }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.844671363457!2d18.50846697571475!3d-33.89365402034654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c1101bde571%3A0x45f2ef24ee31e772!2sAbsa%20%7C%20Branch%20%7C%20Canal%20Walk!5e0!3m2!1sen!2sza!4v1693556360843!5m2!1sen!2sza"
        width="1020"
        height="590"
        style={{border:"1px solid black"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" />
    </div>
  );
};

export const MapPageFocusedContactInfo = function (props) {
  const [isclickedItem, setIsclickedItem] = props.isclickedItem;

  return (
    <React.Fragment>
      {isclickedItem.Fullname === "" ||
      isclickedItem === undefined ||
      isclickedItem === null ? (
        <div style={{ position: "absolute", top: "20vh", left: "80vw" }}>
          Loading...
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "12vh",
            left: "73vw",
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
                      width: "fit-content",
                      height: "fit-content",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <span>All Numbers</span>
                    <div
                      style={{
                        display: "flex",
                        width: "100px",
                        height: "fit-content",
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
      )}
    </React.Fragment>
  );
};
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
  const [isOpen, setIsOpen] = useState(true);
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
        isOpen={[isOpen, setIsOpen]}
        searchQueryText={[searchQueryText, setSearchQueryText]}
        isclickedItem={[isclickeditem, setIsclickeditem]}
        listOfContacts={[
          initialListOfContacts,
          listOfContacts,
          setListOfContacts,
        ]}
      />
      <RenderMap isOpen={[isOpen, setIsOpen]} />
      <MapPageFocusedContactInfo
        isclickedItem={[isclickeditem, setIsclickeditem]}
      />
    </div>
  );
};
