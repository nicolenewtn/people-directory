import PersonRow from './PersonRow';

export default function PeopleTable({ people, onUpdate, onDelete }) {
    return(
        <ul>
            {people.map((person) => (
                <PersonRow 
                    key={person.id}
                    person={person}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}