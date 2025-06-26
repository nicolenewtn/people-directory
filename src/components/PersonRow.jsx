import { useState } from 'react';

export default function PersonRow({ person, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);

    return isEditing ? (
        <li>

        </li>
    ) : (
        <li>
            {person.name}, {person.email}
            <button>Edit</button>
            <button>Delete</button>
        </li>
    )
}