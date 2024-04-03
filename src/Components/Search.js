import React, {useState} from 'react'
import '../Styles/search.css'

const Search = () => {
    const [initialValue, setInitialValue] = useState("");
    const handleChange=(e)=>{
        setInitialValue(e.target.value)
        console.log(e.target.value);
    }
  return (
    <div className='search-contain'>
      <input type='text' className='form-input' placeholder="Seach 'paneer'" value={initialValue} onChange={handleChange}></input>
      <header>
        <p>Login</p>
        <p>Signup</p>
      </header>
    </div>
  )
}

export default Search
