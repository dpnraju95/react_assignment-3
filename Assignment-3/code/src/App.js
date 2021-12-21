import React from 'react';
import './App.css';
import Profile from './Profile';


var arrow="<";
var arrow2=">";

const profile_details={
  "Name":"Datla Pardhu Narasimha Raju",
  "EmployeeID":"18111995",
  "Appointment":"11:00(24-12-2021)",
  "Email":"dpnraju95@gmail.com",
  "Phone":"1234567890"
}
const order_detail={
  "Status": "In Progress",
  "Door" : "Mark",
  "Time":"11:00(26-12-2021)",
}

function App() {
  return (
    <div className="site-container">
    <Profile employee={profile_details} order={order_detail} sign={arrow} sign2={arrow2} />
    </div>
  );
}

export default App;
