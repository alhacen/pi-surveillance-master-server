import React, {Suspense,useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import LoadingScreen from './screens/loading.screen.js';
import NotFoundScreen from './screens/404.screen.js'
import Screen from './components/screen';
import Sidenav from './components/sidenav';
import AddDevicePopup from './components/addDevice.popup'
import{syncVideos} from './utils/lib/syncVideos'
// import Cookies from 'universal-cookie';
import {ROUTES} from'./constants/routes/main.route'
const electron = window.require("electron")

const preload = electron.remote.require('./preload')
const remote = electron.remote
const {BrowserWindow, dialog} = remote
const getVideos = async() =>{
  return await preload.getVideos()
}

window.ws = new WebSocket("ws://raspberrypi.local:8080")
window.wsLoading = false

getVideos()
var blobToBase64 = function(blob, cb, fileName) {
  var reader = new FileReader();
  reader.onload = function() {
    var dataUrl = reader.result;
    var base64 = dataUrl.split(',')[1];
    cb(base64,fileName);
  };
  reader.readAsDataURL(blob);
};
// let s = new WebSocket("ws://raspberrypi.local:8080")

var videoBlobs={}
var tmpBlobs=[]
var currentFileName=null
window.ws.onopen = function fun(){
  console.log("ws open")
}
window.ws.onmessage = function fun(msg){
    console.log(msg)
    if(msg.data instanceof Blob){
        tmpBlobs.push(msg.data)
    }else{
        msg=JSON.parse(msg.data)
        if(msg.type==="upload"){
            if(msg.status==="done"){
                console.log("done")
                currentFileName = msg.fileName
                videoBlobs[currentFileName]=tmpBlobs
                tmpBlobs=[]
                let videoBlob = new Blob([...videoBlobs[currentFileName]],{type:"video/octet-stream"});
                blobToBase64(videoBlob,preload.saveVideo,currentFileName)
            }
        }else if(msg.type === "syncData"){
          
        }

    }    
}
window.ws.onclose = function (message) {
  try{
    console.log("ws disconnected");
    clearTimeout(window.heartbeat_interval)
    window.ws=null;
    window.wsLoading = true
    if(window.wsLoading === true){
        window.wsReconnectFlag = setTimeout(function(){
            console.log("restart init ")
            window.ws = new WebSocket("ws://raspberrypi.local:8080")
        }, 3000);
    }
  }catch(error){
    console.warn(100,error)
  }
}
syncVideos("")
function Main() {
  return (
        <main className="minH100 card " style={{backgroundColor:"#f5f5f5"}}>
          <div className="" style={{display:"flex"}}>
            <div className="card" style={{padding:'25px',width:"300px"}}>
              <Sidenav />
            </div>
            <div className=" " style={{width:"100%"}}>
              <Suspense fallback={<LoadingScreen />}>
                <Switch>
                  {
                      ROUTES.map((route, index) => (
                          <Route
                          exact={route.exact === undefined ? true : route.exact}
                          path={route.path}
                          component={(props) => <Screen title={route.title} callback={"asdfsdf"} screen={route.screen}  {...props} />}
                          key={index.toString()}
                          />
                      ))
                  }
                  <Route component={NotFoundScreen} />
                </Switch>
              </Suspense>
            </div>
          </div>
        </main>
  );
}
export default Main;
