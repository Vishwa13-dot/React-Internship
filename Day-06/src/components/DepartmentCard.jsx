import React from 'react'  
function DepartmentCard({ departmentName, description, buttonText }) {   
    return (     
        <div className="max-w-sm bg-white rounded-xl shadow-lg p-6 border border-gray-200">       
            <h2 className="text-2xl font-bold text-gray-800 mb-3">         
                {departmentName}       
            </h2>        
            <p className="text-base text-gray-600 leading-relaxed">         
                {description}       
            </p>        
            <button className="mt-5 bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition">         
                {buttonText}       
            </button>     
        </div>   
    )
}  

export default DepartmentCard 