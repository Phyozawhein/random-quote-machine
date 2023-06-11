import logo from './logo.svg';
import './App.scss';
import Card from './Card/card.js'
import React, {useState,useEffect} from 'react';

const App=()=> {
const [quotes,setQuotes]= useState([]);
const [quote,setQuote] = useState("");
const [author,setAuthor] = useState("");
const [mainColor,setMainColor]=useState("");
const fetchQuotes = async ()=>{
   fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
   .then((res)=> res.json())
   .then((data)=> {
    let {quotes}= data
    setQuotes(quotes)
    let ranNum = Math.floor(Math.random()*quotes.length);
    setQuote(quotes[ranNum].quote)
    setAuthor(quotes[ranNum].author)
   })
}
const fetchNewQuote=()=>{
  genNewColor();
  let ranNum = Math.floor(Math.random()*quotes.length);
  setQuote(quotes[ranNum].quote)
  setAuthor(quotes[ranNum].author)
}


const genNewColor=()=>{
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  setMainColor( 'rgb(' + r + ',' + g + ',' + b + ')');
}
useEffect(()=>{
  fetchQuotes()
  genNewColor()
},[])
  return (
    <div className="App" style={{backgroundColor: mainColor}}>
      <div className="title">
        <h2>Random Quote Machine</h2>
      </div>
      { quote.length === 0 ? <p>Loading Quotes....</p>:<Card quote={quote} author={author} color={mainColor} getNewQuote={fetchNewQuote}/>}
    </div>
  );
}

export default App;
