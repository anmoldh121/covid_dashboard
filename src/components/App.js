import React, { useEffect } from 'react';
import axios from 'axios';
import { store } from '../context';
import { processData } from '../actions'

import "./App.css";
import Navbar from './navbar';
import DonutChart from './donutChart';
import Map from './map';
import StatewiseList from './statewiseList';

const colours = ["#9BDDFF", "#0073CF", "#000080"];

export default function App() {

    const {state, dispatch} = React.useContext(store);

    useEffect(() => {
        axios({
            url: "https://api.covid19india.org/data.json",
            method: "get"
        })
            .then((response) => {
                // console.log(response)
                processData(response.data, dispatch);
            }) 
            .catch((err) => {
                console.log(err)
            })
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className="outer-container">
                <div className="analytics half">
                    <div className="shadow-container chart">
                        <div className="d-chart">
                            <DonutChart colours={colours}/> 
                        </div>
                        <div className="labels">
                            <div className="item">
                                <span className="colour" style={{background: colours[0]}}></span>
                                <span className="title" >
                                    Active {state.stats.active}
                                </span>    
                            </div>
                            <div className="item">
                                <span className="colour" style={{background: colours[2]}}></span>
                                <span className="title">
                                    Deceased {state.stats.deaths}
                                </span>
                            </div>
                            <div className="item">
                                <span className="colour" style={{background: colours[1]}}></span>
                                <span className="title">
                                    Recovered {state.stats.recovered}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-container statewise">
                        <StatewiseList />
                    </div>
                </div>
                <div className="shadow-container half map">
                    <div className="box-container">
                        <div className="box light-red">
                            <div className="box-text">
                                CONFIRMED
                            </div>
                            <div className="box-digit">
                                {state.stats.confirmed}
                            </div>
                        </div>
                        <div className="box light-blue">
                            <div className="box-text">
                                ACTIVE
                            </div>
                            <div className="box-digit">
                                {state.stats.active}
                            </div>
                        </div>
                        <div className="box light-green">
                            <div className="box-text">
                                RECOVERED
                            </div>
                            <div className="box-digit">
                                {state.stats.recovered}
                            </div>
                        </div>
                        <div className="box light-grey">
                            <div className="box-text">
                                DECEASED
                            </div>
                            <div className="box-digit">
                                {state.stats.deaths}
                            </div>
                        </div>
                    </div> 
                    <Map />
                </div>
            </div>
        </div>
    )
}