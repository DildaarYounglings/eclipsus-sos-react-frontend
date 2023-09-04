import {
  BellIcon_SVG,
  DeclinePhoneCallBtn_SVG,
  LuthoProfilePic_SVG,
} from "../homePage-UI-components/UserProfileNavbar";

export const ContactsPageProfileNavbar = function () {
  return(
  <div className="UserProfileNavbar">
    <ul className="UserProfileNavba_ul">
      <li className="li_1">
        <span className="li_1_span">Contacts</span>{" "}
        <input
          className="li_1_searchInput"
          type="search"
          placeholder="🔍 Search"
        />
      </li>
      <li className="li_2">
        <div>
          <ul className="li_2_ul">
            <li className="li_2_ul_li_1">
              <p style={{ color: "white" }}>
                Simthembile Kleinbooi<br/>
                <span style={{ color: "grey", translate: "0px -25px" }}>+12 345 6789</span>
              </p>
            </li>
            <li className="li_2_ul_li_2">
              <button>
                <DeclinePhoneCallBtn_SVG />
              </button>
            </li>
          </ul>
        </div>
      </li>
      <li style={{translate: "0px -5px"}}>
        <ul style={{ listStyle: "none", display: "flex", gap: "5rem" }}>
          <li>
            <BellIcon_SVG />
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
  )
};
