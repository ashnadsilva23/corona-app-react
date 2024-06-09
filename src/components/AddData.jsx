import React, { useState } from 'react'
import Navbar from './Navbar'

const AddData = () => {
    const [data,changeData]=useState(
        {
            "n_Id":"",
            "n_Name":"",
            "rtpcr":"",
            "popu":"",
            "affect":"",
            "persons":""
        }
    )
    const inputHandle=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})


    }
    const readValue=()=>{
        console.log(data)
    }
    return (
        <div>
            <Navbar />
            <h1 align="center"><u>Add Details</u></h1>
            <div className="container">
                <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Nation Id</label>
                                <input type="text" className="form-control" name='n_Id' value={data.n_Id}onChange={inputHandle} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"> Nation Name</label>
                                <input type="text" className="form-control" name='n_Name'value={data.n_Name} onChange={inputHandle} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"> Rtpcr Rate</label>
                                <input type="text" className="form-control"  name='rtpcr' value={data.rtpcr} onChange={inputHandle}/>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"> Population</label>
                                <input type="text" className="form-control" name='popu' value={data.popu} onChange={inputHandle} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Affected Area </label>
                                <input type="text" className="form-control"  name='affect' value={data.affect} onChange={inputHandle}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"> No of persons Affected</label>
                                <input type="text" className="form-control"  name='persons' value={data.persons} onChange={inputHandle}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Add </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddData