import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard(){
  const [spots, setSpots]=useState([]);
  //useEffect(()=>{},[]);//<função>,<vetor de dependencias> //toda vez que o 
                            //<vetor de dependencias> mudar, o react roda a <função> denovo, 
                            //se manda o <vetor de dependencias> vazio, ele roda somente 1x

  useEffect(()=>{
    async function loadSpots(){
      const user_id = localStorage.getItem('user');
      const response = await api.get('/dashboard',{
        headers:{user_id}
      });
      //console.log(response.data);
      setSpots(response.data);
    };
    loadSpots();
  },[]);                          
  return (
  <>
    <ul className="spot-list">
      {spots.map(spot=>(
        <li key={spot._id}>
          <header style={{backgroundImage:`url(${spot.thumbnail_url})`}}></header>
          <strong>{spot.company}</strong>
          <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
        </li>
      ))}
    </ul>

    <Link  to="/New">
     <button className="btn"> Cadastrar Novo Spot
     </button>

     </Link>
  </>
  )
}