const ContactInfo = ({ address, phone, email }) => {
    return (
      <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between', width: '60%', marginLeft: '170px', paddingTop: '10px' }}>
        <p>{address}</p>
        <p>|</p>
        <p>{phone}</p>
        <p>|</p>
        <p>{email}</p>
      </div>
    );
};
export default ContactInfo;