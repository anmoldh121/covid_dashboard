import React from 'react';

import { store } from '../context';

import './state-wiselist.css';
import { changeChartData } from '../actions';

export default function StatewiseList() {

    const { state, dispatch } = React.useContext(store);
 
    return (
        <div>
            <table>
                <tr>
                    <th>
                        STATE/UT
                    </th>
                    <th>
                        CONFIRMED
                    </th>
                    <th>
                        ACTIVE
                    </th>
                    <th>
                        RECOVERED
                    </th>
                    <th>
                        DECEASED
                    </th>
                </tr>
                {state.stateWise.map(el => {
                    return (
                        <tr onMouseEnter={() => changeChartData(el, dispatch)} onMouseLeave={() => changeChartData(state.totalStats, dispatch)}>
                            <td>
                                {el.state}
                            </td>
                            <td>
                                {el.confirmed}
                            </td>
                            <td>
                                {el.active}
                            </td>
                            <td>
                                {el.recovered}
                            </td>
                            <td>
                                {el.deaths}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}