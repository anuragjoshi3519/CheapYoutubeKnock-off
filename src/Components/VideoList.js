import React from "react"
import VideoItem from './VideoItem'

class VideoList extends React.Component{
    getVideoItems=()=>{
        const {videos,onVideoSelect}=this.props
        const renderedList=videos.map((video)=>{
            return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
        })
        return renderedList
    }
    render(){
        return(
            <div className='video-list'>{this.getVideoItems()}</div>
        )
    }
}

export default VideoList