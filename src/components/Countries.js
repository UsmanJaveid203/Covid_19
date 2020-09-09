import React from 'react'
import Styling from './country.module.css';

export default function Countries(props) {
    return (
        <>
            <div className="container mt-5">
                <h3 style={{ textAlign: 'center' }}>Reported Cases and Deaths by Country, Territory</h3>
                <div className={Styling.tableFixHead}>
                    <table  className="table table-borderless table-striped">
                        <thead>
                            <tr>
                                <th className={Styling.tableFixHead_thead_th} scope="col">#NO</th>
                                <th className={Styling.tableFixHead_thead_th} scope="col">Country Name</th>
                                <th className={Styling.tableFixHead_thead_th} scope="col">Total Cases</th>
                                <th className={Styling.tableFixHead_thead_th} scope="col">New Cases</th>
                                <th className={Styling.tableFixHead_thead_th} scope="col">Remainning Cases</th>
                                <th className={Styling.tableFixHead_thead_th} scope="col">Total Death</th>
                                <th className={Styling.tableFixHead_thead_th} scope="col">New Death</th>
                                <th className={Styling.tableFixHead_thead_th} scope="col">Total Recovered</th>
                                <th className={Styling.tableFixHead_thead_th} scope="col">New Recovered</th>
                            </tr>
                        </thead>
                        <tbody style={{ height: '10px', overFlow: 'scroll' }}>
                            {props.conData.map(function (value, index) {
                                return (
                                    <tr key={index+1}>
                                        <td>{index + 1}</td>
                                        <td>{value.Country}</td>
                                        <td>{value.TotalConfirmed}</td>
                                        <td>{value.NewConfirmed}</td>
                                        <td>{value.TotalConfirmed - value.TotalRecovered - value.TotalDeaths}</td>
                                        <td>{value.TotalDeaths}</td>
                                        <td>{value.NewDeaths}</td>
                                        <td>{value.TotalRecovered}</td>
                                        <td>{value.NewRecovered}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
