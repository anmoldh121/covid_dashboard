import React, { useEffect } from 'react';
import { store } from '../context';

import './donut-chart.css';

export default function DonutChart(props) {
    const { state } = React.useContext(store);
    const [stats, setStats] = React.useState({});

    useEffect(() => {
        let totalActiveCase = Number(state.stats.active);
        let totalRecovered = Number(state.stats.recovered);
        let totaldeceased = Number(state.stats.deaths);
        let totalActivePercentage = Number((totalActiveCase/state.stats.confirmed));
        let totalRecoveredPercentage = Number((totalRecovered/state.stats.confirmed));
        let totaldeceasedPercentage = Number((totaldeceased / state.stats.confirmed));
        console.log("sum", totalActivePercentage+totalRecoveredPercentage+totaldeceasedPercentage)
        let s = totalActivePercentage+totalRecoveredPercentage+totaldeceasedPercentage
        let normalFactor = Math.abs(s-1);
        console.log("kdfndkv", )
        console.log(totalActivePercentage, totalRecoveredPercentage, totaldeceasedPercentage);
        let values = {A: (totalActivePercentage-normalFactor).toFixed(2), B: (totalRecoveredPercentage-normalFactor).toFixed(2), C: (totaldeceasedPercentage-normalFactor).toFixed(2)};
        console.log(values)
        setStats(values);
    }, [state.stats]);

    return (
        <div class="container">
            <div className="text"><div className="sub-text1">{state.stats.confirmed}</div><div className="sub-text2">Confirmed</div></div>
            <svg xmlns="http://www.w3.org/2000/svg">
                <circle id="circle" cx="100" cy="100" className="circle_animation"  r="75" stroke-width="10" stroke={props.colours[0]} fill="none"
                style={{strokeDashoffset: 2*Math.PI*75*(1-stats.A)+30}} />
                <circle id="donut" cx="100" cy="100" className="circle_animation" r="75" stroke-width="10" stroke={props.colours[1]} fill="none"
                style={{strokeDashoffset: 2*Math.PI*75*(1-stats.B)+30, transform: `rotateZ(${(stats.A)*360-10}deg)`}} />
                <circle id="donut2" cx="100" cy="100" className="circle_animation" r="75" stroke-width="10" stroke={props.colours[2]} fill="none"
                style={{strokeDashoffset: 2*Math.PI*75*(1-stats.C)+30, transform: `rotateZ(${(stats.B)*360+(stats.A)*360-6}deg)`}} />
            </svg>
        </div>
    )
}