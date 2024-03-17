import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Talent from './Talent';

export default function Talents() {
    const [Talents, setTalents] = useState([]);

    //function to get all freelancers
    async function GetAllTalents(){
       try {
        const token = localStorage.getItem('user');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.get(
            `https://localhost:7157/api/Freelancer/Freelancers`,
            // Request body is empty, assuming serviceDto is being sent from the client
            { headers: headers } // Pass headers as a separate object
        );
        
        console.log(response.data);
        setTalents(response.data);
       } catch (error) {
        console.log(error);
       }
    }

    useEffect(() => {
      
    try {
        GetAllTalents();
    } catch (error) {
        console.log(error);
    }
      
    }, [])
    

  return (
<>
    <div id='talents' className="container p-5">
        <div className="title LineBelowDiv d-flex  align-items-center">
        <i class="fa-solid fa-person fa-2x"></i>
            <h2>Talents</h2> 
        </div>
        {Talents.length>0?
    Talents.map((talent, index) => {
        return (
            <div key={index}>
               <Talent talent={talent}/>
            </div>
        );
    })
     
    :''   

}

    </div>

    

</>  )
}
