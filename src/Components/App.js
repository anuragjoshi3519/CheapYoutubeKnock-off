import React from 'react'
import SearchBar from './SearchBar'
import Youtube from '../apis/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import '../css/style.css'
class App extends React.Component{
    
    state={
        videos:[],
        selectedVideo:null
    }
    
    onTermSubmit=async term=>{
        const response =await Youtube.get('/search',{
        params:{
            q:term
        }})
        this.setState({videos:response.data.items,selectedVideo:null})
    }

    onVideoSelect= (video)=>{
        this.setState({selectedVideo:video})
    }

    renderVideoSection=()=>{
        if(this.state.selectedVideo!=null)
            return(
                <div className='video-section'>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList 
                        onVideoSelect={this.onVideoSelect} 
                        videos={this.state.videos} 
                    />
                </div>
            )

        else return <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
    }

    render(){
        return(
            <div>
                <div className='ui container'>
                    <h2 className='main-header ui header'>FarziTube</h2>
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    {this.renderVideoSection()}    
                </div>
            </div>
        )
    }
}

export default App