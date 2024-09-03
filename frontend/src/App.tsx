import React, { useState } from 'react';
import { backend } from 'declarations/backend';

interface TaxpayerRecord {
  tid: string;
  firstName: string;
  lastName: string;
  address: string;
}

function App() {
  const [tid, setTid] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [taxpayer, setTaxpayer] = useState<TaxpayerRecord | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await backend.addTaxpayer(tid, firstName, lastName, address);
      setMessage('Taxpayer added successfully');
      clearForm();
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  const handleGet = async () => {
    try {
      const result = await backend.getTaxpayer(tid);
      if (result.length > 0) {
        setTaxpayer(result[0]);
        setMessage('Taxpayer found');
      } else {
        setTaxpayer(null);
        setMessage('Taxpayer not found');
      }
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await backend.updateTaxpayer(tid, firstName, lastName, address);
      setMessage(result ? 'Taxpayer updated successfully' : 'Taxpayer not found');
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  const handleDelete = async () => {
    try {
      const result = await backend.deleteTaxpayer(tid);
      setMessage(result ? 'Taxpayer deleted successfully' : 'Taxpayer not found');
      clearForm();
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  const clearForm = () => {
    setTid('');
    setFirstName('');
    setLastName('');
    setAddress('');
    setTaxpayer(null);
  };

  return (
    <div className="App">
      <h1>Taxpayer Records</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tid}
          onChange={(e) => setTid(e.target.value)}
          placeholder="TID"
          required
        />
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
        />
        <button type="submit">Add Taxpayer</button>
      </form>
      <button onClick={handleGet}>Get Taxpayer</button>
      <button onClick={handleUpdate}>Update Taxpayer</button>
      <button onClick={handleDelete}>Delete Taxpayer</button>
      <p>{message}</p>
      {taxpayer && (
        <div>
          <h2>Taxpayer Information</h2>
          <p>TID: {taxpayer.tid}</p>
          <p>First Name: {taxpayer.firstName}</p>
          <p>Last Name: {taxpayer.lastName}</p>
          <p>Address: {taxpayer.address}</p>
        </div>
      )}
    </div>
  );
}

export default App;