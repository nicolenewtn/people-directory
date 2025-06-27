import { useState } from 'react';
import PeopleForm from './components/PeopleForm';
import PeopleTable from './components/PeopleTable';

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (person) => {
    const newPerson = { id: Date.now(), ...person};
    setPeople([...people, newPerson]);
  }

  const onUpdate = (id, updated) => {
    setPeople(
      people.map(p => (p.id === id ? {...p, ...updated} : p))
    );
  }
  
  const onDelete = (id) => {
    setPeople(people.filter(p => p.id !== id));
  }

  return(
   <div>
     <h1>People Directory</h1>
     <PeopleForm onSubmit={addPerson} />
     <PeopleTable 
      people={people} 
      onUpdate={onUpdate}
      onDelete={onDelete}
    />
   </div>
  )
}

export default App;