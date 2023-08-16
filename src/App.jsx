import React, { useState } from "react";
import "./App.scss";
import { HomePage } from "./pages/HomePage";
import { MainSideNavbar } from "./components/homePage-UI-components/MainSideNavbar";
import { ContactsPage } from "./pages/ContactsPage";
import { Arrays } from "./react_array_management_practice/Arrays";

export const UI_context = React.createContext();
function App() {
  const [testMode, setTestMode] = useState(false);
  const [UI, set_UI] = useState("/Dashboard");
  return (
    <React.Fragment>
      {testMode === true ? (
        <Arrays />
      ) : (
        <div>
          <MainSideNavbar UI_state={[UI, set_UI]} />
          {UI === "/Dashboard" ? (
            <>
              <HomePage />
            </>
          ) : UI === "/Contacts" ? (
            <>
              <ContactsPage />
            </>
          ) : (
            "Nothing to see here"
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
