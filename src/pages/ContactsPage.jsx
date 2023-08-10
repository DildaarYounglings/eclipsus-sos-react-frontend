import React from 'react';
import { ContactsPageProfileNavbar } from '../components/contactsPage-UI-components/ContactsPageProfileNavbar';
import { ContactsPageBody } from '../components/contactsPage-UI-components/ContactsPageBody';

export const ContactsPage = function() {
  return (
    <div>
      <ContactsPageProfileNavbar/>
      <ContactsPageBody/>
    </div>
  )
}