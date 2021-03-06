const downloadVideo = (videoName) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve()},1000)
        console.log(1)
    })
}

const myfun = (videoName) =>{
    return new Promise((resolve, reject) =>{
        downloadVideo("")
    })
}

export const syncVideos = async (videos) =>{
    videos=[1,3,4]
    for(let i=0;i<videos.length;i++){
        // console.log(i)
        // await downloadVideo()
    }
    
}

