import React from 'react';

const Education = ({ education }) => {
  return (
    <div style={{ marginLeft: '0px' }}>
     
      <h5 style={{marginBottom: '-35px'}}>EXPERIENCE</h5>
      {education.map((education, index) => (
       
       <div key={index} >

       <ul style={{ marginLeft: '170px'}}>
         {education.duties.map((dutys, index) => (
           <li key={index}>{dutys}</li>
         ))}
       </ul>
 
       </div>
      ))}
    </div>
  );
};

export default Education;