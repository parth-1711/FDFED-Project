import React from 'react';
import { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx'
import classes from './Admin.module.css';
import Graph from '../components/Graph.jsx'
import {UserData} from '../Data.js'  

const Admin = (props) =>{

    const [userData,setUserData] = useState({
        labels: UserData.map((data)=>data.month),
        datasets: [{
            label: 'Offers Accepted',
            data: UserData.map(data=>data.offersAccepted),
            backgroundColor: ["violet"],
        }]
    });
    const [graph,setGraph] = useState(1);

    function changetoRejected(){
        setGraph((prevstate)=>!prevstate);
        setUserData({
            labels: UserData.map((data)=>data.month),
            datasets: [{
            label: 'Offers Rejected',
            data: UserData.map(data=>data.offersRejected),
            backgroundColor: ["orange"],
        }]
        })
    }

    function changetoAccepted(){
        setGraph((prevstate)=>!prevstate);
        setUserData({
            labels: UserData.map((data)=>data.month),
            datasets: [{
            label: 'Offers Accepted',
            data: UserData.map(data=>data.offersAccepted),
            backgroundColor: ["violet"],
        }]
    })
    }

    return(
       <React.Fragment>
        <div className={classes.main}>
        <div className={classes.sideBar}>
            <AdminSidebar />
        </div>
        <div className={classes.barChart}>
            <Graph chartData={userData}/>
            {graph && <button onClick={changetoRejected} className={classes.button}>Show Rejected Offers</button>}
            {!graph && <button onClick={changetoAccepted} className={classes.button}>Show Accepted Offers</button>}
        </div>
        </div>
       </React.Fragment>
    )
}

export default Admin;