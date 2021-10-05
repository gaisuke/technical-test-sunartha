import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}`
    fetch(url)
      .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then((data) => {
      setData(data)
    })
    .catch((error) => {
      console.error("Error fetching data: ", error)
      setError(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if (loading) return "Loading . . . "
  if (error) return "Error!"

  console.log(data)
  return (
    <div className="App">

    </div>
  );
}

export default App;
