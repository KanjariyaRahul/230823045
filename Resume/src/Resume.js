import React from 'react';
import ContactInfo from './ContactInfo';
import ProfessionalSummary  from './ProfessionalSummary';
import CoreQualifications  from './CoreQualifications';
import Experience from './Experience';
import Education from './Education';
import Design from './Design';

const Resume = () => {
  const contactInfo = {
    address: 'gujarat, India 361007',
    phone: '+91 9265614292',
    email: 'rahulkanjariya9265@gmail.com'
  };
  const professionalSummary = 'Customer-focused Retail & Sales professional with in-depth understanding of retail dynamics, marketing, and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer expectations and needs. Demonstrated record of exceeding revenue targets by leveraging sales expertise and communication skills.';
  const coreQualifications = [
    'Cash register operation',
    'POS system operation',
    'Sales expertise',
    'Teamwork',
    'Inventory management',
    'Accurate money handling',
    'Documentation',
    'Retail merchandising expertise'
  ];

  const experiences = [
    {
      title: 'RETAIL SALES ASSOCIATE',
      date: '02/2021 to Current',
      location: 'ZARA, New Delhi, India',
      duties: [
        "Increased monthly sales 10% by effectively upselling and cross-selling products to maximize profitability.",
        "Prevented store losses by leveraging awareness, attention to detail, and integrity to identify and investigate concerns.",
        "Processed payments and maintained accurate drawers to meet financial targets."
      ]
    },
    {
      title: 'BARISTA',
      date: '03/2019 to 01/2021',
      location: "Dunkin' Donuts, New Delhi, India",
      duties: [
        "Upsold seasonal drinks and pastries, boosting average store sales by $1500 weekly.",
        "Managed morning rush of over 300 customers daily with efficient, levelheaded customer service.",
        "Trained entire staff of 15 baristas in new smoothie program offerings and procedures.",
        "Developed creative and appealing latte art techniques and instructed coworkers in method."
      ]
    },
    {
      title: 'CASHIER',
      date: '07/2017 to Present',
      location: 'Burger King, New Delhi, India',
      duties: [
        "Handled cash transactions and provided excellent customer service.",
        "Balanced cash registers and generated reports for accounting purposes.",
        "Managed customer complaints and ensured their resolution.",
        "Assisted with inventory management tasks as needed."
      ]
    }
  ];
   
  const education = [
    {
    
      duties: [
        "Bachelor of Computer Applications (BCA) - saurashtra university.",
        "currently pursuing in mca - atmiya university"
        
      ]
    }
  ];
  

  return (
    <>
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '0' }}>
        <div style={{ width: '50%', margin: '20px auto' }}>
          <div style={{ backgroundColor: '#fff', marginBottom: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ background: 'rgb(189, 232, 235)', height: '70px', padding: '0%' }}>
              <ContactInfo {...contactInfo} />
              <Design/>
            </div>
            <div style={{ padding: '20px' }}>
              <h1 style={{ textAlign: 'center' }}>Rahul Kanjariya</h1>
              <Design/>
              <ProfessionalSummary summary={professionalSummary} />
              <Design/>
              <CoreQualifications qualifications={coreQualifications} />
              <Design/>
              <Experience experiences={experiences} />
              <Design/>
              <Education  education={education} />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Resume;
