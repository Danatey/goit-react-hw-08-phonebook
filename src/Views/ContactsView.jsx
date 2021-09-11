import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchContacts,
  postContact,
  deleteContact,
  filterContacts,
} from "../redax/operations";

import ContactForm from "../Components/ContactForm";
import Filter from "../Components/Filter";
import ContactList from "../Components/ContactList";
import ContactsListItem from "../Components/ContactsListItem";

import "./ContactsView.scss";

const ContactsView = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "Find contacts by name":
        dispatch(filterContacts(value));
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contacts.find((item) => item.name === name)) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }

    dispatch(postContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const deleteHandler = async (contactId) => {
    await dispatch(deleteContact(contactId));
  };

  const handleFilter = () => {
    if (contacts.filter !== undefined) {
      // console.log(contacts.filter);
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  return (
    <div className="container">
      <h2 className="title">Phonebook</h2>
      <ContactForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        name={name}
        number={number}
      />

      <h2 className="secondary-title">Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter onChange={handleChange} filter={filter} />
          <ContactList>
            <ContactsListItem
              contacts={handleFilter()}
              onDelete={deleteHandler}
            />
          </ContactList>
        </>
      ) : (
        <span className="contact-message">You have no contacts yet </span>
      )}
    </div>
  );
};

ContactsView.defaultProps = {
  contacts: [],
  filter: "",
  name: "",
  number: "",
};

export default ContactsView;

// class OldApp extends Component {
//   state = {
//     contacts: [],
//     // contacts: [
//     //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     //   { id: "id-4", nnme: "Annie Copeland", number: "227-91-26" },
//     // ],
//     filter: "",
//   };

//   componentDidMount() {
//     const locStorContacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(locStorContacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

// formSubmitHandler = (data) => {
//   const isInContacts = (contact) => {
//     return contact.name === data.name;
//   };
//   if (this.state.contacts.some(isInContacts)) {
//     alert(`${data.name} is already in contacts`);
//   } else
//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, data],
//     }));
// };

// filterHandler = (event) => {
//   const { value } = event.currentTarget;
//   this.setState({ filter: value });
// };

// deleteHandler = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId
//     ),
//   }));
// };

//   render() {
//     const { contacts, filter } = this.state;

// const normalizedFilter = filter.toLocaleLowerCase();
// const filteredContactList = contacts.filter((contact) =>
//   contact.name.toLocaleLowerCase().includes(normalizedFilter)
// );
//     return (
//       <div className="container">
//         <h2 className="title">Phonebook</h2>
//         <ContactForm onSubmit={this.formSubmitHandler} />

//         <h2 className="secondary-title">Contacts</h2>
//         {contacts.length > 0 ? (
//           <>
//             <Filter onChange={this.filterHandler} value={filter} />
//             <ContactList>
//               <ContactsListItem
//                 contacts={filteredContactList}
//                 onDelete={this.deleteHandler}
//               />
//             </ContactList>
//           </>
//         ) : (
//           <span className="contact-message">You have no contacts yet </span>
//         )}
//       </div>
//     );
//   }
// }
