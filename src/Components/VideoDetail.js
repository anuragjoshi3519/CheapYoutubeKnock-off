import React from 'react'

class VideoDetail extends React.Component{
    render(){
        const videoSrc=`https://www.youtube.com/embed/${this.props.video.id.videoId}`
        return(
            <div className='video-detail'>
                <div className='ui embed'>
                    <iframe src={videoSrc} title='Video Player'/>
                </div>
                <div className='ui segment'>
                    <h3 className='ui header'>{this.props.video.snippet.title}</h3>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoDetail