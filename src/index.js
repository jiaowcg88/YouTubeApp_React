import _ from 'lodash';
import React, {Component}from 'react';  // library import from node-modules
import ReactDOM from 'react-dom'; // library import
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // our own file import
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
// youtube api key
const API_KEY = 'AIzaSyC4nXCVjvEJiUD9h7c0uYhQ2UtGcclcpIs';
//npm install --save youtube-api-search  make sure to install youtube api in cmd

// Create a new component. This component should produce
//some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      videos: [],
      selectedVideo: null
    };
  //  this.props.onSearchTermChange = this.props.onSearchTermChange.bind(this);
    this.videoSearch('cannonD');
  }


    videoSearch(term) {
      YTSearch({key:API_KEY, term: term}, (videos) => {
        this.setState(
          {videos: videos,
           selectedVideo : videos[0]}
        );
        //this.setState({videos: videos})
      });
    }

  render(){
    console.log(this.state.videos.length);
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar OnSearchTermChange= {videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos}/>
      </div>
    );
  }
}
// const App = () => {    // new ES6 syntx
//   return (
//     <div>
//       <SearchBar />
//     </div>  // jsx syntx
//   );
//   //the purpose of jsx is converting javascript code to html and put
//   // it on the page
// };
//Take this component's generated HTML and put it on the
//page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));  // ReactDOM.render(App), error, App is passing by class
//not instance, so we need to change to ReactDOM.render(<App />)
