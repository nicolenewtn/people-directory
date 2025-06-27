import { useState } from 'react';

export default function PersonRow({ person, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState({ name: person.name, email: person.email})

    const handleSave = () => {
        onUpdate(person.id, draft);
        setIsEditing(false);
    }

    return isEditing ? (
        <li>
            <input 
                value={draft.name} 
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
            />
            <input 
                value={draft.email} 
                onChange={(e) => setDraft({ ...draft, email: e.target.value })}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
        </li>

    ) : (
        <li>
            {person.name}, {person.email}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(person.id)}>Delete</button>
        </li>
    );
}