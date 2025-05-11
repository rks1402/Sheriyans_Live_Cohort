import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState([]);

  const addContact = () => {
    if(username && phone){
      const newContact = {
        id: Date.now(),
        username : username,
        phone : phone
      }
      setContacts([...contacts, newContact]);
      setUsername('');
      setPhone('');
    }
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <>
      <h1>Contact List Manager</h1>
      <br />
      <input type="text" placeholder='Enter the name' value={username} onChange={e => setUsername(e.target.value)}/>
      <input type="text" placeholder='Enter the phone number' value={phone} onChange={e => setPhone(e.target.value)}/>
      <button onClick={addContact}>Add Contact</button>
      <br />
      <h2>Contacts :</h2>
      <ol>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>Name : {contact.username} & Phone : {contact.phone}
              <button onClick={() => deleteContact(contact.id)} style={{marginLeft: '10px'}}>Delete</button>
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default App