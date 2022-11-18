import './App.css';
import { useState } from 'react';
import { send } from 'emailjs-com';

function App() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Marcel',
    message: '',
    reply_to: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    
    send(
      'service_snzf6kd',
      'template_1fvu5ab',
      toSend,
      'Iaz6fArJkn-BufAts'
    )
    .then((response) => {
      console.log("Message has been sent!", response.status, response.text);
      alert("Your message has been sent!");
    })
    .catch((err) => {
      console.log("Error!", err);
    });
  };

  return (
    <main className='app'>
      <form className='form' onSubmit={onFormSubmit}>
        <h1>Contact us</h1>
        <input 
          type='text'
          name='from_name'
          value={toSend.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input 
          type="email"
          name='reply_to'
          value={toSend.reply_to}
          onChange={handleChange}
          placeholder="example@gmail.com"
          required
        />
        <input 
          className='message'
          type='text'
          name='message'
          value={toSend.message}
          onChange={handleChange}
          placeholder="Write your message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default App;
