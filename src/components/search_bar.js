import React, { Component } from 'react';
// const Component = React.component

// //create a component
//
// const SearchBar = () => {
//   return <input />;  // React.createElement()
// };
// create a class components
class SearchBar extends Component {
  constructor(props){
    super(props); //
  //  this.props.onSearchTermChange = this.props.onSearchTermChange.bind(this);
    this.state = {term: ''};
  }
  render(){
    //return <input onChange={this.onInputChange} />; //event trigger when the event occurs, the event name
    // is onChange, there are other events.
    return (
      <div className="search-bar">
        <input
           value = {this.state.term}
           onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

// event handle
  onInputChange(term) {
    this.setState({term});
    this.props.OnSearchTermChange(term);
  }
}

export default SearchBar;
