import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    //? Fetch jokes only once when the component mounts

    // axios.get('https://official-joke-api.appspot.com/random_ten')   //? just another jokes generating API, but I will use my own jokes generated by gpt

    axios.get('/api/jokes')
    .then((res) => {
      // Check if res.data is an array
      if (Array.isArray(res.data)) {
        setJokes(res.data);
      } else {
        console.error('Unexpected data format:', res.data);
        setJokes([]); // Fallback to an empty array
      }
    })
    .catch((err) => {
      console.error('Error fetching jokes:', err);
      setJokes([]); // Handle errors gracefully
    });
});

  return (
    <>
      <h1>COFFEE ??</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.length > 0 ? (
        jokes.map((joke, index) => (
          <div key={joke.id || index}> {/* Use index as a fallback key */}
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
          </div>
        ))
      ) : (
        <p>No jokes available</p>
      )}
    </>
  );
}

export default App