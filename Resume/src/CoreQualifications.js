const CoreQualifications = ({ qualifications }) => {
    return (
      <div style={{ marginBottom: '30px' }}>
        <h5>CORE <br/> QUALIFICATIONS</h5>
        <ul style={{ marginLeft: '140px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px', marginTop: '-55px' }}>
          {qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>
    );
  };

export default  CoreQualifications;