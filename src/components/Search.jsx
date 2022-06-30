import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class Search extends React.Component{
    state = {
        search:'',
        type:'all',
    }
    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), 
        () => {
            this.props.searchMovies(this.state.search, this.state.type)
        });
    }
    handleKey = (event) => {
        if(event.handleFilter === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }
    render(){
        return(
        
          <div className="input-field">
            <input 
            placeholder="Search" 
            id="email_inline" 
            type="email" 
            className="validate"
            value={this.setState.search}
            onChange={(e) => this.setState({search: e.target.value})}
            onhandleFilterDown={this.handlehandleFilter}
            />
            <button className="btn"
            onClick={() =>
             this.props.searchMovies(this.state.search, this.state.type)}
             >
                Search
             </button>
            <div>
                    <label>
                        <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type="all" 
                        onChange={this.handleFilter} 
                        cheked={this.state.type === 'all'}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type="movie" 
                        onChange={this.handleFilter}
                        cheked={this.state.type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type="series" 
                        onChange={this.handleFilter}
                        cheked={this.state.type === 'series'}
                        />
                        <span>Serials only</span>
                    </label>
            </div>
          </div>
        )
    }
}

export { Search }