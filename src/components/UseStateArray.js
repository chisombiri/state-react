import {useState}from 'react';
import { peopleData } from "./people-data";

const UseStateArray = () => {
    const [people, setPeople] = useState(peopleData);

    const removePerson = (id) => {
        const newPeople = people.filter((person) => person.id !== id);

        setPeople(newPeople);
    }

  return (
    <section className='--flex-center --100vh --bg-primary'>
        <div className='container'>
            <h1 className='--color-white'>Use state for Array</h1>
            {people.map((person) => {
                const {id, name} = person;
                return(
                    <div key={id} className='--flex-between --card --bg-light --my'>
                        <h2>{name}</h2>
                        <h1 className='--color-danger' onClick={() => removePerson(id)}>X</h1>
                    </div>
                );
            })
            }
            <button className='--btn --btn-danger' onClick={() => setPeople([])}>
                Clear all
            </button>
        </div>
    </section>
  )
}

export default UseStateArray