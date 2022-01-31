import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={s.contactButton}
            type="button"
            onClick={() => {
              dispatch(contactsActions.deleteContacts(id));
              toast('Deleted');
            }}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
