import React from 'react' 
import DepartmentCard from './components/DepartmentCard.jsx'  

function App() {   
  return (     
  <div className="min-h-screen bg-gray-100 p-8">       
    <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">         
    Our Departments       
    </h1>  

  <div className="flex flex-wrap gap-6 justify-center">        
    <DepartmentCard           
    departmentName="Computer Engineering"           
    description="Learn programming, web development, database, AI and software development."           
    buttonText="Apply Now"         />    

    <DepartmentCard           
    departmentName="Information Technology"           
    description="Learn networking, programming, cloud computing and modern IT solutions."           
    buttonText="Apply Now"         />     

    <DepartmentCard           
    departmentName="Mechanical Engineering"           
    description="Learn machines, design, manufacturing and industrial engineering concepts."          
    buttonText="Apply Now"         />       
    </div>     
  </div>   
  ) 
}  

export default App