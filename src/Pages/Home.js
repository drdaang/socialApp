import React,{useEffect,useState,useContext} from 'react';
import './Home.css';
import CardList from '../UIElements/CardList';
import axios from 'axios';

const Home = () => {
    let API = "http://www.omdbapi.com/?i=tt3896198&apikey=9475787d";
    const [dat, setApiData] = useState([]);
    // const DUMMY_LIST = [
    //     {
    //         id: 1,
    //         title: "GOT",
    //         img: "https://thumbs.dreamstime.com/b/scary-wolf-head-profile-view-black-silky-moving-flag-glare-seamless-loop-direwolf-as-symbol-stark-scary-wolf-head-142923499.jpg?w=992",
    //         description: "Game oaf thrones is one of the most popular shows of all time",
    //     },
    // ];
    
   
    
    useEffect(() => {
  
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGFiYjMwZTRkNTg3MjJjZmVmMzRkMTRkMGVlNzg4NiIsInN1YiI6IjYyZjU0MTZmZDJmNWI1MDA4NWFmMGY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t5D9_bNUsTMuuucgl435j3WsUMP7Gb565u8RiZsy-60'
        }
      }; 
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err));
    }, []);
    return (
        <div>
            
            <CardList items={dat} />
           
        </div>);
};
export default Home;