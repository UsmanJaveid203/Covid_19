import React from 'react';

export default function Global(props) {
    return (
        <>
        <div className="container">
            <div className="row mt-3">
                <div className="card col-md-2 col-sm-12">
                    <div className="card-body">
                        <h4 className="card-title" style={{color: 'gray'}}>Total Cases</h4>
                        <p className="card-text"><b>{props.summery.TotalConfirmed}</b></p>
                        <p className="card-text">{new Date(props.curdate).toDateString()}</p>
                    </div>
                </div>

                <div className="card col-md-2 col-sm-12">
                    <div className="card-body">
                        <h4 className="card-title" style={{color: 'gray'}}>Today Cases</h4>
                        <p className="card-text"><b>{props.summery.NewConfirmed}</b></p>
                        <p className="card-text">{new Date(props.curdate).toDateString()}</p>
                    </div>
                </div>

                <div className="card col-md-2 col-sm-12">
                    <div className="card-body">
                        <h4 className="card-title" style={{color: 'red'}}>Total Deaths</h4>
                        <p className="card-text"><b>{props.summery.TotalDeaths}</b></p>
                        <p className="card-text">{new Date(props.curdate).toDateString()}</p>
                    </div>
                </div>

                <div className="card col-md-2 col-sm-12">
                    <div className="card-body">
                        <h4 className="card-title" style={{color: 'red'}}>Today Deaths</h4>
                        <p className="card-text"><b>{props.summery.NewDeaths}</b></p>
                        <p className="card-text">{new Date(props.curdate).toDateString()}</p>
                    </div>
                </div>

                <div className="card col-md-2 col-sm-12">
                    <div className="card-body">
                        <h4 className="card-title" style={{color: 'green'}}>Total Recovered</h4>
                        <p className="card-text"><b>{props.summery.TotalRecovered}</b></p>
                        <p className="card-text">{new Date(props.curdate).toDateString()}</p>
                    </div>
                </div>

                <div className="card col-md-2 col-sm-12">
                    <div className="card-body">
                        <h4 className="card-title" style={{color: 'green'}}>today Recovered</h4>
                        <p className="card-text"><b>{props.summery.NewRecovered}</b></p>
                        <p className="card-text">{new Date(props.curdate).toDateString()}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
