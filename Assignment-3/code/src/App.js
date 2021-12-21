import React from 'react';
import './App.css';
import Profile from './Profile';


var arrow="<";
var arrow2=">";

const profile_details={
  "Name":"Tamanna Garg",
  "EmployeeID":"00002512",
  "Appointment":"9:00(24-05-2021)",
  "Email":"tamanna@gmail.com",
  "Phone":"9876543210"
}
const order_detail={
  "Status": "In Progress",
  "Door" : "Mark",
  "Time":"10:30(25-05-2021)",
}

function App() {
  return (
    <div className="site-container">
    <Profile employee={profile_details} order={order_detail} sign={arrow} sign2={arrow2} />
    </div>
  );
}

export default App;
