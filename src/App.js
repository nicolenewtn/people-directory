import { useState } from 'react';
import PeopleForm from './components/PeopleForm';
import PeopleTable from './components/PeopleTable';

function App() {
  const [people, setPeople] = useState([]);

  const addPerson = (person) => {
    setPeople([...people, { id: Date.now(), ...person }]);
  };

  const updatePerson = () => {

  }

  const deletePerson = () => {

  }

  return (
    <div>
      <h1>People Directory</h1>
      <PeopleForm onSubmit={addPerson} />
      <PeopleTable 
        people={people}
        onUpdate={updatePerson}
        onDelete={deletePerson}
      />
    </div>
  );
}

export default App;
