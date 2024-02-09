
import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const [input,setInput]=new useState(
    {   "Name": "",
        "Phone": "",
        "place":"",
        "Specialisation":"",
        "Department":""
        
    }
    )
        const inputHandler=(event)=>{
            setInput({...input,[event.target.name]:event.target.value})
        }
        const readValues=()=>{
            console.log(input)
            axios.post("http://localhost:3001/api/hospital/add",input).then(
                (response)=>{
                    console.log(response.data)
                    if(response.data.status =="success"){
                        alert("Successfully added")
                        setInput(
                            {
                                "Name": "",
                                "Phone": "",
                                 "place":"",
                                 "Specialisation":"",
                                 "Department":""

                            }
                        )
                    }
                }
            )
        }

  return (
    <div>
        <Navbar/> 
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='Name' value={input.Name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phone</label>
                        <input type="text" className="form-control" name='Phone' value={input.Phone} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">place</label>
                        <input type="text" className="form-control" name='place' value={input.place} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Specialisation</label>
                        <input type="text" className="form-control" name='Specialisation' value={input.Specialisation} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Department</label>
                        <input type="text" className="form-control" name='Department' value={input.Department} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={readValues}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Add