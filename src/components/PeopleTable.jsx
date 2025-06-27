import PersonRow from './PersonRow';

export default function PeopleTable({ people, onUpdate, onDelete }) {

    return(
        <ul>
            {people.map((person) => (
                <PersonRow 
                    person={person} 
                    key={person.id}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}