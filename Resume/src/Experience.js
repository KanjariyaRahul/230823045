import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <div style={{ marginLeft: '0px' }}>
    
      <h5 style={{marginBottom: '-15px'}}>EXPERIENCE</h5>
      {experiences.map((experience, index) => (
       
       <div key={index} >
       <p style={{ marginTop: '0px', marginLeft: '170px' }}>{experience.title} {experience.date}<br />{experience.location} </p>
       <ul style={{ marginLeft: '170px'}}>
         {experience.duties.map((dutys, index) => (
           <li key={index}>{dutys}</li>
         ))}
       </ul>
 
       </div>
      ))}
    </div>
  );
};

export default Experience;
