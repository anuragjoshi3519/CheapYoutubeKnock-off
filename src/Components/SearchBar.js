import React from 'react'

class SearchBar extends React.Component{
    state={
        term:''
    }
    handleChange= (event) => {
        this.setState({term:event.target.value})
    }

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <input
                            type='text'
                            name='searchinput'
                            value={this.state.term}
                            onChange={this.handleChange} 
                            placeholder='Search Videos..' />
                    </div>
                </form>
            </div>        
        )
    }
}

export default SearchBar