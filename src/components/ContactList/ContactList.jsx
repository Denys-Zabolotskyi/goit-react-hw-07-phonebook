import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/selectors';
// import { deleteContact } from 'redux/contactsSlice';

import { fetchContacts } from 'redux/operations';
import { deleteContact } from 'redux/operations';

const ContactList = ({ contact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const filterContactsOnChange = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <List>
      {filterContactsOnChange().map(({ id, name, phone }) => (
        <Item key={id}>
          <p>
            {name} : {phone}
          </p>
          <Button onClick={handleDelete}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
export default ContactList;
