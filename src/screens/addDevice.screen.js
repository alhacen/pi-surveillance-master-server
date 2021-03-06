import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
const electron = window.require("electron")

const preload = electron.remote.require('./preload')

// const scanDevices = () =>{
//     return []
//     return [{name:"cam1", ip:"192.168.1.4"},{name:"cam1", ip:"192.168.1.4"}]
// }

const AddDevice = () =>{

    const [devices, setDevices] = useState([])
    useEffect(()=>{
        //api call
        Promise.all(['localhost','192.0.1.1'].map(async ip=>{
            console.log(await preload.scanDevices(ip))
            return await preload.scanDevices(ip)
        })).then(values => {
            console.log(values);
            console.log(setDevices([]));
        });
    },[])
    return(
<div className="padding16">
    <p class="panel-heading" id="">
        Add Device
    </p>
    <nav class="card padding16" >
        <div style={{minHeight:"60vh"}}>
        {
            devices.length?devices.map(device=>{
                return(
                    <a key={devices.name} class="panel-block is-active padding16">
                        <span class="panel-icon">
                            <i class="fas fa-book" aria-hidden="true"></i>
                        </span>
                        {device.name}
                    </a>
                )
            }):<p class="padding16">no device found</p>
        }
        <a class="panel-block ">
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48001 6.48001 2 12 2C17.52 2 22 6.48001 22 12C22 17.52 17.52 22 12 22C6.48001 22 2 17.52 2 12ZM13 13H17V11H13V7H11V11H7V13H11V17H13V13Z" fill="black" fill-opacity="0.54"/>
            </svg>
            <span class="" style={{padding:"padding:0 10 0 10px"}}> Add device</span>
        </a>
        </div>

        <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth">
            Scan Devices on network
            </button>
        </div>

    </nav>
</div>
    )
}
export default AddDevice;