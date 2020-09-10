export async function processData(data, dispatch) {
    let stat = {...data.statewise[0]}
    delete data.statewise[0];
    let stateToData = await createMap(data.statewise);
    dispatch({ type: "SET_STATS", payload: stat});
    dispatch({ type: "SET_TOTALSTATS", payload: stat});
    dispatch({ type: "SET_STATEWISE", payload: data.statewise });
    dispatch({ type: "SET_STATE", payload: stateToData });
    console.log(stateToData);
}

async function createMap(data) {
    let stateToData = {};
    await data.forEach(el => {
        stateToData[el.statecode] = el;
    });
    console.log("data",stateToData.WB)
    return stateToData;
}

export function changeChartData(data, dispatch) {
    dispatch({ type: "SET_STATS", payload: data });
}
