import FormContact from '../FormContact';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { getFilter } from '../../redux/contacts-selectors';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <FormContact />
      <h2 className={s.title}>Contacts</h2>
      <Filter value={getFilter} />
      <ContactList />
    </div>
  );
}
