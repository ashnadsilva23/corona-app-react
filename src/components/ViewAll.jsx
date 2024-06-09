import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data,setData] = useState(
        {
        
            
                "success": true,
                "data": {
                  "summary": {
                    "total": 43119112,
                    "confirmedCasesIndian": 43119064,
                    "confirmedCasesForeign": 48,
                    "discharged": 42576815,
                    "deaths": 524201,
                    "confirmedButLocationUnidentified": 0
                  },
                  "unofficial-summary": [ ],
                  "regional": []
                },
                "lastRefreshed": "2022-05-14T03:47:21.111Z",
                "lastOriginUpdate": "2022-05-14T02:30:00.000Z"
              }

        
    
    )
    const fetchData = () => {
        axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => {fetchData()}, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 align="center"><u>View Details</u></h1>

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">sl no</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Discharge</th>
                                    <th scope="col">Death</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.data.regional.map(
                            (value,index)=>{
                                return <tr>
                                <td>{index+1}</td>
                                <td>{value.loc}</td>
                                <td>{value.discharged}</td>
                                <td>{value.deaths}</td>


                            </tr>
                            }
                           )}
                           
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll