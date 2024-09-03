import React, { useState } from 'react';
import { backend } from 'declarations/backend';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await backend.greet(name);
    setGreeting(response);
  };

  return (
    <div className="App">
      <h1>Internet Computer App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Greet</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default App;