import React, { useState } from 'react'
import Navbar from './Navbar'

const Delete = () => {
    const[data,changeData]=useState({
        "id":""
    })
    const inputHandle=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})


    }
    const readValue=()=>{
        console.log(data)
    }
    
    return (
        <div>
            <Navbar />
            <h1 align="center"><u>Delete Details</u></h1>

            <div className="container">
                <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Nation Id</label>
                                <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandle} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-danger" onClick={readValue}> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete