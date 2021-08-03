import React from 'react'
import Member from './Member';

function MemList(){
    const members = [
        {
          "id": 'm1',
          "name": 'Pera Peric',
          "email": 'pera@gmail.com'
        },
        {
          "id": 'm2',
          "name": 'Marko Markovic',
          "email": "marko@gmail.com"    
        },
        {
          "id": 'm3',
          "name": 'Ivan Ivanovic',
          "email": 'ivan@gmail.com'  
        },
       { "id": 'm4',
         "name": 'Zika Zikic',
          "email": 'zika@gmail.com'  
      }
      ];
    const membersList = members.map(member => (
        <Member key={member.id} member={member} />
    ))
    return(
        <div>{membersList}</div>
    )
}

export default MemList