import React,{useState} from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'react-scroll';
import axios from 'axios';

const DropDown = () => {
 
    //api
    const [post, setPost] = useState({
      selectedName:"",
      date: '',
      selectedSupervisor: '',
      selectedVenue: '',
      selectedAsupervisor: '',
      startTime: '',
      endTime: '',
    });
   const handleInput=(event)=>{
    setPost({...post,[event.target.value]:event.target.event})
   }
   const handleSubmit = (event)=>{
        event.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts",{post})
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
   }
    //ExamName
    const examNames = [
      'AS400',
      'AS410',
      'AS464',
      'AS471',
      'Other Exam 1',
      'Other Exam 2',
      'Other Exam 3',
      // Add more exam names as needed
    ];
      const [selectedName, setSelectedName] = useState('');
      const [searchTerm, setSearchTerm] = useState('');
     
      const handleNameChange = (event) => {
        setSelectedName(event.target.value);
      };
    
      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredExamNames = examNames.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      //Date picker
      const [date,setDate] = useState()
    
      const handleDateChange = (date) => {
        setDate(date);
      };
      //Supervisor
      const [selectedSupervisor, setSelectedSupervisor] = useState();
  
    const handleSupervisorChange = (event) => {
      setSelectedSupervisor(event.target.value);
    };
    //venue section
    const venues = [
      'PU',
      'CU',
      'GEO',
      'SET',
      'Other Venue 1',
      'Other Venue 2',
      'Other Venue 3',
      // Add more venue names as needed
    ];
  
    const [selectedVenue, setSelectedVenue] = useState('');
    const [searchvenue, setSearchvenue] = useState('');
  
    const handleVenueChange = (event) => {
      setSelectedVenue(event.target.value);
    };
  
    const handleSearchvenue = (event) => {
      setSearchvenue(event.target.value);
    };
  
    const filteredVenues = venues.filter((venue) =>
      venue.toLowerCase().includes(searchvenue.toLowerCase()));

     //Time picker
     const [startTime, setStartTime] = useState('09:00'); // Initial start time
     const [endTime, setEndTime] = useState('17:00'); // Initial end time
   
     const handleStartTimeChange = (event) => {
       setStartTime(event.target.value);
     };
   
     const handleEndTimeChange = (event) => {
       setEndTime(event.target.value);
     }; 

     //AssistantSupervisor
     const [selectedAsupervisor, setSelectedAsupervisor] = useState();
  
    const handleAsupervisorChange = (event) => {
      setSelectedAsupervisor(event.target.value);
    };

  return (
    
      <div className=' w-full h-[20%] p-[10%] justify-center ml-[18%] '>
      <form onSubmit={handleSubmit}>
      <h1 className='text-black text-xl ml-[12%] p-5'>Shedule the examination</h1>
      {/* ExamName */}
      <div className='flex'>
      
            <div > 
                <div className="ml-0 ">
                <h1 className="text-black">Examination Name</h1>
                      <input
                        type="text"
                        className="w-[80%] h-[10%] border rounded-md p-2"
                        placeholder="Search for an exam"
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                      <select
                        className="w-[80%] h-[70%] border rounded-md mt-2"
                        id="dropdown"
                        value={selectedName}
                        onChange={handleNameChange}
                      >
                        {filteredExamNames.map((name,key) => (
                          <option key={key} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                 </div>
      {/* Examination Date */}
                  <div className='z-10'>
                        <h1 className='text-black '>Examination Date</h1>
                        <ReactDatePicker
                          selected={date}
                          onChange={handleDateChange}
                          dateFormat="yyyy-MM-dd" // Customize the date format
                          isClearable
                        />
                        <p>Selected Date: {date ? date.toDateString() : 'No date selected'}</p>
                  </div>
      {/* Supervisor */}                
                  <div>
                    <h1 className='text-black'>Supervisor</h1>
                    <select id="dropdown" value={selectedSupervisor} onChange={handleSupervisorChange}>
                         <option value="Option 1">Dr.Sathya</option>
                         <option value="Option 2">Dr.Buddika</option>
                         <option value="Option 3">Dr.Hakeem</option>
                         <option value="Option 4">Dr. kalinga</option>
                    </select>
                  </div>

            </div>
      <div>


      {/* Venue */}
      
        <div>
            <h1 className='text-black'>Venue</h1>
           <input
               type="text"
               className="w-[80%] h-[10%] border rounded-md p-2"
               placeholder="Search for a venue"
               value={searchvenue}
              onChange={handleSearchvenue}
            />
            <select
                className="w-[80%] h-[70%] border rounded-md mt-2"
                id="dropdown"
                value={selectedVenue}
                onChange={handleVenueChange}
            >
             {filteredVenues.map((venue, index) => (
              <option key={index} value={venue}>
              {venue}
              </option>
             ))}
            </select>
      {/* Examination Time */}
      <div>
      <h1 className='text-black'>Examination Time</h1>
      <div className='flex '>
      <div className='ml-0'>
        
        <input
          type="time"
          id="startTime"
          value={startTime}
          onChange={handleStartTimeChange}
        />
      </div>
      <div>
        <label htmlFor="endTime">TO</label>
        <input
          type="time"
          id="endTime"
          value={endTime}
          onChange={handleEndTimeChange}
        />
        </div>
      </div>
      <p>Selected Time Range: {startTime} - {endTime}</p>
      </div>
      {/* Asistant Supervisors */}
                     <div>
                       <h1 className='text-black'>Asistant Supervisors</h1>
                        <select id="dropdown4" value={selectedAsupervisor} onChange={handleAsupervisorChange}>
                          <option value="Option 1">Dr.Sathya</option>
                          <option value="Option 2">Dr.Buddika</option>
                          <option value="Option 3">Dr.Hakeem</option>
                           <option value="Option 4">Dr. kalinga</option>
                        </select>

                       </div>
        </div>
      </div>
      </div>
  
        <button
          type="submit" 
          className="text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 ml-[35%]"
        >
          Submit
        </button>
      </form>
      </div>
  
    
  )
}

export default DropDown
