import React,{useState,useEffect} from 'react';
import{sortVideo} from '../utils/lib/sortVideo'
const electron = window.require("electron");
const preload = electron.remote.require('./preload');

(async ()=>{

})()

export default function HomeSceen(props) {

  const [videos, setVideos]=useState([])

  const getVideos = async () =>{
    let videos = await preload.getVideos()
    videos = videos.sort();
    videos = sortVideo(videos)
    console.log(videos)
    setVideos(videos)
    return videos 
  }

  useEffect(() => {
      getVideos()
  }, []);

  // (async ()=>{
  //   setVideos(await getVideos)
  // })()
  const monthStr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let monthFlag=null;
  let m,d,year,day,month,fileData,maxOrder;
  return (
    <div className="padding16 videoContent">
      {
        /*
        fileData = v.split("-")
        month = fileData[2]
        day = fileData[3]
        year =  fileData[1]
        */
        Object.keys(videos).map((year)=>{
         {
           return(
            <div key={year}>
            <p className="title" style={{ color: "#545454"}}>{year}</p>
              {
                 Object.keys(videos[year]).map((month)=>{
                  maxOrder=Object.keys(videos[year][month]).length
                  return(
                    <div key={month}>
                      <p className="title" style={{ color: "#545454"}}>{month}</p>
                      <div className="container flex flex-row flex-wrap" >
                        {
                          Object.keys(videos[year][month]).map((day,index)=>{
                            return(
                              <div key={day} className="cardx flex flex-col padding16 " style={{order:`${maxOrder-index}`}}>
                                <div className="image"  style={{width:"200px"}}>
                                  <img src="https://bulma.io/images/placeholders/1280x960.png"  />
                                </div>
                                <div className="caption padding12" >
                                  <p style={{fontWeight:"400px", textAlign:"center"}}>{videos[year][month][day][0].split("-")[3]}</p>
                                </div>
                              </div>
                            )
                          })
                        }
                        
                      </div>
                    </div>
                  )
                })
              }
            </div>
           )
         }
        })
      }
      
    </div>
  );
}
  