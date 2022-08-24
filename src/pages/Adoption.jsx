import { useState } from 'react'

const Adoption = () => {
  const [pets, setPets] = useState([])
  const [petForm, setPetForm] = useState({})

  const getPets = () => {
    fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((responseData) => setPets(responseData))
      .catch((error) => console.log(error))
  }

  const addPets = () => {
    const petObject = {
      breed: 'cat',
      name: 'Vader',
      age: '4',
    }

    fetch('http://localhost:4000/addpets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(petForm)
      
    })
  }

  const deletePets = (name) => {
    fetch(`http://localhost:4000/deletepets?name=${name}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })

      .then((response) => response.json())
      .then((responseData) => setPets(responseData))
      .catch((error) => console.log(error))
  }

  const updatePets = () => {
    fetch(`http://localhost:4000/updatepets?=${'Vader'}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({color: 'black'})
    })

      .then(response => response.json())
      .then(responseData => setPets(responseData))
      .catch(error => console.error(error))
  }

  console.log(petForm)

  return (
    <>
      <h1>Adoption</h1>
      <button onClick={getPets}>Click for Adoptable Pets</button>
      <button onClick={addPets}>Add a Pet</button>
      <button onClick={() => deletePets('Vader')}>Delete a Pet</button>
      <button onClick={() => updatePets()}>Update Pet Info</button>
      <form>
        <input type="text" placeholder='breed' onChange={(event) => {setPetForm({...petForm, breed: event.target.value})}}/>
        <input type="text" placeholder='name' onChange={event => setPetForm({...petForm, name: event.target.value})}/>
        <input type="text" placeholder='age' onChange={event => setPetForm({...petForm, age: event.target.value})}/>
        <input type="text" placeholder='color' onChange={event => setPetForm({...petForm, color: event.target.value})}/>
      </form>
      {pets.map((eachPet) => {
        return (
          <div>
          {eachPet.breed}: {eachPet.name}, {eachPet.age}, {eachPet.color}
          <button onClick={() => deletePets(eachPet.name)}>x</button>
          </div>
        )
      })}
    </>
  )
}

export default Adoption
