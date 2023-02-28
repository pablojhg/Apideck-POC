// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { Apideck } from '@apideck/node';
import { Vault } from '@apideck/react-vault';
import axios from 'axios';

// const apideck = new Apideck({
//   apiKey: 'REPLACE_WITH_API_KEY',
//   appId: 'REPLACE_WITH_APP_ID',
//   consumerId: 'REPLACE_WITH_CONSUMER_ID',
// });

function App() {
  const [token, setToken] = useState('');
  const createSession = async () => {
    // console.log(process.env.REACT_APP_API_KEY);
    const {data} = await axios.post('https://unify.apideck.com/vault/sessions', 
    // {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone',
    //   orders: [1, 2, 3],
    //   photo: document.querySelector('#fileInput').files
    // }, 
    {},
    {
      headers: {
        // 'Content-Type': 'multipart/form-data'
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'x-apideck-consumer-id': process.env.REACT_APP_CONSUMER_ID,
        'x-apideck-app-id': process.env.REACT_APP_APP_ID,
      }
    }
    )
    console.log(data.data.session_token);
    setToken(data.data.session_token)
  }
  const getOps = async () => {
    // console.log(process.env.REACT_APP_API_KEY);
    const {data} = await axios.get('https://unify.apideck.com/crm/opportunities',
    // {},
    {
      headers: {
        // 'Content-Type': 'multipart/form-data'
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'x-apideck-consumer-id': process.env.REACT_APP_CONSUMER_ID,
        'x-apideck-app-id': process.env.REACT_APP_APP_ID,
      }
    }
    )
    console.log(data);
  }
  const getOpsFilter = async () => {
    // console.log(process.env.REACT_APP_API_KEY);
    const {data} = await axios.get('https://unify.apideck.com/crm/opportunities',
    { params: {filter:  {title:'octo'} },
      headers: {
        // 'Content-Type': 'multipart/form-data'
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'x-apideck-consumer-id': process.env.REACT_APP_CONSUMER_ID,
        'x-apideck-app-id': process.env.REACT_APP_APP_ID,
      }
    }
    )
    console.log(data);
  }
  const getComps = async () => { // Accounts
    // console.log(process.env.REACT_APP_API_KEY);
    const {data} = await axios.get('https://unify.apideck.com/crm/companies',
    // {},
    {
      headers: {
        // 'Content-Type': 'multipart/form-data'
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'x-apideck-consumer-id': process.env.REACT_APP_CONSUMER_ID,
        'x-apideck-app-id': process.env.REACT_APP_APP_ID,
      }
    }
    )
    console.log(data);
  }
  const getOp = async () => {
    // console.log(process.env.REACT_APP_API_KEY);
    const {data} = await axios.get('https://unify.apideck.com/crm/opportunities/0064x00000GUCUVAA5',
    // {},
    {
      headers: {
        // 'Content-Type': 'multipart/form-data'
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'x-apideck-consumer-id': process.env.REACT_APP_CONSUMER_ID,
        'x-apideck-app-id': process.env.REACT_APP_APP_ID,
      }
    }
    )
    console.log(data);
  }
  const getLeads = async () => { // Accounts
    // console.log(process.env.REACT_APP_API_KEY);
    const {data} = await axios.get('https://unify.apideck.com/crm/leads',
    // {},
    {
      headers: {
        // 'Content-Type': 'multipart/form-data'
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'x-apideck-consumer-id': process.env.REACT_APP_CONSUMER_ID,
        'x-apideck-app-id': process.env.REACT_APP_APP_ID,
      }
    }
    )
    console.log(data);
  }
  const getContacts = async () => { // Accounts
    // console.log(process.env.REACT_APP_API_KEY);
    const {data} = await axios.get('https://unify.apideck.com/crm/contacts',
    // {},
    {
      headers: {
        // 'Content-Type': 'multipart/form-data'
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'x-apideck-consumer-id': process.env.REACT_APP_CONSUMER_ID,
        'x-apideck-app-id': process.env.REACT_APP_APP_ID,
      }
    }
    )
    console.log(data);
  }
  return (
    <>
        {token !== '' ? 
        <>
          <Vault
          token={token}
          trigger={<button>Open Vault</button>}
          showAttribution={false}
          />
          <button onClick={() => getOps()}>Opportunities</button>
          <button onClick={() => getOpsFilter()}>Opportunities filter</button>
          <button onClick={() => getComps()}>Companies</button>
          <button onClick={() => getOp()}>Opportunity</button>
          <button onClick={() => getLeads()}>Leads</button>
          <button onClick={() => getContacts()}>Contacts</button>
        </>: 
        <>
          <p>You must create a session</p>
          <button onClick={() => createSession()}>Create a session</button>
        </>}
    </>
  );
}

export default App;
