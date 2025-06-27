import { useState } from 'react';

export default function PeopleForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email ) return;

        onSubmit({ name, email });
        setName('');
        setEmail('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />

            <button type="submit">Add</button>
        </form>
    )
}
