import React from 'react';
import CameraCard from '../components/cameraCard' ;
import {Link} from 'react-router-dom';

const HomeScreen = (props) =>{
    return(
        <div>
            <CameraCard devices={[{name:"cam1",ip:"192.168.1.4",active:true}]} />
            <Link to="/dashboard/add-device" id="addDeviceBtn"><p className="card padding16 is-circle">+</p></Link>
        </div>

    )
}
export default HomeScreen;