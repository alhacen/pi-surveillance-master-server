export const sortVideo = (videos) =>{
      const monthStr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    // videos= [];
    let sortVideos={};
    let m,d,year,day,month,fileData;
    // for(m=1;m<=12;m++){
    //     for(d=1;d<30;d++){
    //         videos.push(`chunk-2021-${m}-${d}-17-50-46.h264`)
    //     }
    // }
    videos.map(video=>{
        fileData = video.split("-")
        month = monthStr[parseInt(fileData[2])]
        day = fileData[3]
        year =  fileData[1]
        console.log(fileData,month,day,year)
        if(!sortVideos[year])
            sortVideos[year]={}
        if(!sortVideos[year][month])
            sortVideos[year][month]={}
        if(!sortVideos[year][month][day])
            sortVideos[year][month][day]=[]
        sortVideos[year][month][day].push(video)
    })
    return sortVideos   
}
