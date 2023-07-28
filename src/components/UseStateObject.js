import {useState} from 'react'

const UseStateObject = () => {
    const [profile, setProfile] = useState({
        name: 'Timi Ade',
        company: "Google"
    });
    
    const updateCompany = () => {
        setProfile({...profile, company: 'Microsoft'});
    }
  return (
    <>
        <h2 className='--text-center --my2'> Use state in object</h2>
        <div className='--card --mx2'>
            <h2>Name: {profile.name}</h2>
            <h2>Company: {profile.company}</h2>
        </div>

        <button className='--btn --btn-danger' onClick={updateCompany}>
            Change company
        </button>
    </>
  )
}

export default UseStateObject