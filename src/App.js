  import React,{useEffect, useState} from 'react';
  import './App.css';

  function App() {
    const colorArr = [
  "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
  "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
  "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
  "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)"
];
    const getRandomColor = () => {
        return colorArr[Math.floor(Math.random() * colorArr.length)];
    };
    const div = document.querySelector("div");
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
        div.style.backgroundImage = getRandomColor();
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
          Get a Random Cat Fact.
        </button>
        <p>{loading? 'Loading...' : fact} </p>
        {img && <img src={img} alt="Cat" width="300" style={{ marginTop: '20px'}} />}
      </div>
    );
  }

  export default App;
