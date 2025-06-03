  import React,{useEffect, useState} from 'react';
  import './App.css';

  function App() {

    const[fact,setFact]=useState('');
    const[loading,setLoading]=useState(false);
    const[img,setImg]=useState('');
    const fetchFact =async()=>{
      setLoading(true);
      try{
        const response=await fetch('https://catfact.ninja/fact');
        const image1 =await fetch('https://api.thecatapi.com/v1/images/search');
        const imagedata = await image1.json();
        const data =await response.json();
        setFact(data.fact);
        
        setImg(imagedata[0].url);
      }
      catch(error){
        setFact("Failed to fetch a fact. Please try again later....");
      }
      setLoading(false);
    };

    useEffect(()=>{
      console.log(fact);
    },[fact])

    return (
      <div className='body'>
        <button onClick={fetchFact} >
          Get a Random Fact.
        </button>
        <p>{loading? 'Loading...' : fact} </p>
        {img && <img src={img} alt="Cat" width="300" style={{ marginTop: '20px' }} />}
      </div>
    );
  }

  export default App;
