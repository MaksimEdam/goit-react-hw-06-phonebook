import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { ADD, DELETE, CHANGE_FILTER } from './contacts-types';

const addContacts = createAction(ADD, ({ name, number }) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

const deleteContacts = createAction(DELETE);
const changeFilter = createAction(CHANGE_FILTER);

const contactsActions = { addContacts, deleteContacts, changeFilter };

export default contactsActions;
