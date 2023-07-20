import React from 'react'
import { useState,useEffect } from 'react'
import Create from './components/Create'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Test from './components/Test'
import Create2 from './Crud2/Create2'
// import Updateog from './components/Update_OG'
import HolidayList from './Holiday/HolidayList'

function App() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch('https://date.nager.at/api/v2/publicholidays/2020/US'); // Replace 'your-api-url' with the actual API endpoint
        const data = await response.json();
        setHolidays(data);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchHolidays();
  }, []);
  return (
    <div>
     {/* <BrowserRouter>
     <Test/>
<NavBar/>
     <Routes>
      <Route exact path='/create' element={<Create/>} />
      <Route exact path='/read' element={<Read/>}/>
      <Route exact path='/edit/:id' element={<Update/>}/>

     </Routes>
     </BrowserRouter> */}
{/* <HolidayList holidays={holidays} />; */}

<Create2/>

<div>
      <h1>My App</h1>
      <HolidayList holidays={holidays} />
    </div>
    </div>
  )
}

export default App