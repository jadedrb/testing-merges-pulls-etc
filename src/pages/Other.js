// import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import DivOne from "../components/DivOne";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import galaxy from '../images/galaxy2.jpg'

const languagetool = require("languagetool-api");

const Other = () => {
  let filesRef = useRef();
  const [mistakes, setMistakes] = useState([])
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();


    /*
            console.log(filesRef.current.files)
            const files = [...filesRef.current.files];
            
            const promises = files.map((file) => {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                  const res = event.target.result;
                  console.log(res);
                  resolve(res);
                };
                reader.readAsDataURL(file);
              });
            });
            Promise.all(promises).then((base64files) => {
              console.log(base64files);
          
              const data = {
                api_key: "P3XvROox3ZEZQYT6hXWGzhEfzcWHaxvrKnd9vBj0kBqjcnRV03", //my plantID api key
                id: 'temp',
                images: base64files,
                modifiers: ["crops_fast", "similar_images"],
                plant_language: "en",
                plant_details: [
                  "common_names",
                  "url",
                  "edible_parts",
                  "propagation_methods",
                  "name_authority",
                  "wiki_description",
                  "taxonomy",
                  "synonyms"
                ]
              };
              
              console.log('attempting fetch call...')
              fetch("https://api.plant.id/v2/identify", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("Success:", data);
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            });

*/


 
/*

************** LANGUAGE TOOL (Sheree) **************

var params = {
  language: "en-US", // This is required! You can get list of language codes with languagetool.codes
  text: "at th spwed of lite", // This is required too!
};
 
languagetool.check(params, (err, res) => {
    if(err){
       console.log(err);
    } else{

      console.log(res, ': initial response (more detail)')

      languagetool.bestSuggestion(res, sug => {

        let suggest = sug.map(s => s.bestSuggestion)
        let mist = sug.map(s => s.mistake)

        console.log(suggest, ': suggestions')
        console.log(mist, ': mistakes')
        
        setSuggestions(suggest)
        setMistakes(mist)
      })

    }
})
*/
}



  return (
    <div className="other">
      <DivOne />
      <form onSubmit={handleSubmit}>
        <input type="file" ref={filesRef} />
        <button id="button">Submit</button>
      </form>




      <div className="ContentWrapper">
      <h1>
        Proofreading API
        <label htmlFor=""></label>
     </h1>
​
​
        {/* <button type="button" id="getproofreader"
 onClick={() => checkInfo(info)}>
          Click Here
      </button> */}
      {mistakes.map((item, index) => 
        <p key = { index } > { item }</p>
      )}
      
      {suggestions.map((item, index) => 
        <p key = { index } > { item }</p>
      )}

​
  
<ul>
<h1 className= "access">Link to Api attempted using useContent</h1>
​
<li>

          </li>
​
         </ul>
<img src={galaxy} />​

    </div>
    <Calendar 
      minDetail={"month"}
      selectRange={true}
      tileDisabled={({s,b,date}) => date.getDay() === 3 }
    />
    </div>
  );
};

export default Other;






/*



import React, {  useReducer } from "react";
// import { ResponsiveEmbed } from 'react-bootstrap';
import "../CSS/Api.css";
export default function Api  ()  {
const initialText = [
  { result:`Typos hapen. We striving to correct them. Individuals with dyslexia often struggles with spelling, grammar, reading and writing. The Language Tool Api is used to check a spell checking app.  input your own text to get it proofread.`},
  { lastValues},
  { mistakes, setMistakes }
  ]
function useReducer = (state = initialState, action) => {
switch (action.type) {
case"EDIT":
//new js object to keep old state. spread operator... this allows us to override previous values.
state = {
...state,
output: state.output + action.payload,
lastValues: [...state.lastValues, action.payload]
};
//state is handles objects and properties in an immutable way.
break;
case"CORRECT":
state = {
  ...state,
  output: state.output + action.payload,
  lastValues: [...state.lastValues, action.payload]
};
break;
}
return state;
}
const initialState = 
result=
store.subscribe(() => {
  console.log("Store updated!", store.getState());
// payload is the place you change the state
store.dispatch ({
  type: "EDIT",
  payload: newText
}); 
store.dispatch ({
  type: "CORRECT",
  payload: newText
}); 
}
  //result store the initial text state. the last value will update the input
  
const languagetool = require("languagetool-api"); //required 
  
  
  const handleChange= text => {
      checkText(text);
    };
  const handleSubmit = (e) => 
    e.preventDefault();
    
  
const checkText = text => {
  console.log(text, languagetool);
  languagetool.check(
    {
      language: "en-US",
      text: text
    },
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        languagetool.showMistakes(res, mis => {
          setMistakes(mis)
        });
        languagetool.bestSuggestion(res, mis => {
          setMistakes(mis);
        });
      }
    }
  );
};
  
    
  return (
      
      <div className="ContentWrapper">
        <h1>
          Proofreading API
          <label htmlFor=""></label>
 
          <input 
            onChange={handleChange}
            id="proofreader"
            type="text"
            spellcheck={true} defaultValue={initialText} 
          />
        </h1>
        {mistakes.map((item, index) => (
          <p key={index}>{item.title}</p> 
       ))}
        <button onchange={handleSubmit} >
          Click Here
        </button>
      </div>
    );
};







https://restcountries.eu/rest/v2/name/spain

*/