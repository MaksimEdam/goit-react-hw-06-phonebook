/* import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
); не работает*/

export const getContacts = state => state.contacts;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const contact = getContacts(state.contacts);
  const filter = state.contacts.filter;
  return contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
