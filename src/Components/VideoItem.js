import React from "react"

class VideoItem extends React.Component{
    render(){
        const {video,onVideoSelect}=this.props
        return(
            <div onClick={()=>onVideoSelect(video)} className='video-item'>
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                <p>{video.snippet.title}</p>
            </div>
        )
    }
}

export default VideoItem