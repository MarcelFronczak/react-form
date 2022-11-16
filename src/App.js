import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [gender, setGender] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Surname: ${surname}, Email: ${email}, Message: ${message}`);
  };

  return (
    <main className='app'>
      <form className='form' onSubmit={onFormSubmit}>
        <h1>Contact us</h1>
        <input 
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Name"
          required
        />
        <input 
          value={surname}
          onChange={({ target }) => setSurname(target.value)}
          placeholder="Surname"
          required
        />
        <input 
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="example@gmail.com"
          required
        />
        <select
          value={gender}
          onChange={({ target }) => setGender(target.value)}
          placeholder="Gender"
          required
        >
            <option value="" disabled defaultValue={true}>Gender</option>
            <option>Male</option>
            <option>Female</option>
        </select>
        <textarea 
          value={message}
          onChange={({ target }) => setMessage(target.value)}
          placeholder="Write your message..."
          reuired="true"
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default App;
