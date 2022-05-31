import React from 'react';
import './App.css';
import Navbar from "./component/Navbar"
import Main from "./component/Main"
import Jokes from './component/Jokes';
import jokesData from './component/jokesData';

export default function App() {
    const [formData,setFormData]=React.useState({
      firstName:"",
       lastName:"",
       email:"",
       comments:"",
       isFriendly:true,
       employment:"",
       favColor:""
    })
    console.log(formData)
 function handleChange(event){
   const {name , value, type,checked}=event.target
    setFormData( prevFormData=>{
     return {
       ...prevFormData,
       [name]:type==="checkbox"? checked:value 
     }
   })
 }
   

 function handleSubmit(event) {
  event.preventDefault()
  // submitToApi(formData)
  console.log(formData)
}

  const jokeElement =jokesData.map(jokes=>{
    return <Jokes setup={jokes.setup} punchline={jokes.punchline} />
  })
  
  return (
    

    <div className="container">
    <div>
     {jokeElement}
    </div>
      <Navbar />
      <Main />
      <div>
            <Jokes 
               punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            />
            <Jokes
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it." 
            />
            <Jokes 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!" 
            />
            <Jokes 
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
            />
            <Jokes 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm." 
            />
            <Jokes 
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
            />
      </div>
      <form  className='form--input'>
        <input 
          name='firstName'
          placeholder='First Name'
          type="text"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input 
          name='lastName'
          placeholder='Last Name'
          type="text"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input 
         
          name='email'
          placeholder='Email'
          type="email"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea rows="20" cols="40"
         name='comments'
         type="text"
         value={formData.textArea}
         onChange={handleChange}
         placeholder="comments"
        />
        <input
          type="checkbox"
          id="isFrindly"
          name="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
         />
         <label htmlFor='isFriendly'>Are you Friendly</label>
         <br/>
         <br/>
         <fieldset>
           <legend>Current employment status</legend>
           <input 
             type="radio"
             name='employment'
             id='unemployment'
             value="unemployment"
             checked={formData.employment==="unemployment"}
             onChange={handleChange}
           />
           <label htmlFor='unemployment'>Unemployed</label>
           <input 
             type="radio"
             name='employment'
             id='part-time'
             value="part-time"
             checked={formData.employment==="part-time"}
             onChange={handleChange}
           />
           <label htmlFor='unemployment'>Part-time</label>
           <input 
             type="radio"
             name='employment'
             id='full-time'
             value="full-time"
             checked={formData.employment==="full-time"}
             onChange={handleChange}
           />
           <label htmlFor='full-time'>Full-time</label>
         </fieldset>
 
         <label htmlFor="favColor">What is your favorite color?</label>
   
         <br />
            <select 
                id="favColor" 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
      </form>
    </div>
    
  )
  
}


