
import './App.css';
import React from 'react';
import Data from './data.js';
import ImageList from './ImageList';

export default class App extends React.Component {
  state = {
    keyword: ''
  }

  // handleNameChange = (e) => {
  //   this.setState({ 
  //     name: e.target.value
  //    });
  // }


  render(){
    const filteredImageList = Data.filter(() =>{

        if (!this.state.name) return true; 
        if (Data.title === this.state.flavor) return true;

        return false;
      });

    const imageListNodes = filteredImageList.map(imageList => 
      <ImageList
        key={Data.keyword}
        imageList = {imageList} />);

    return(

      <form>
        Name
        <input value={this.state.name}
          onChange={this.handleNameChange} />
        keyword
        <select
          value={this.state.flavor}
          onChange={(e) => {
            this.setState({
              keyword: e.target.value
            })
          }}
        >
          <option value="narwhal">narwhal</option>
          <option value="rhino">rhino</option>
          <option value="mouflon">mouflon</option>
          <option value="markhor">markhor</option>
          <option value="triceratops">triceratops</option>
          <option value="addax">addax</option>
          <option value="chameleon">chameleon</option>
          <option value="lizard">lizard</option>
          <option value="dragon">dragon</option>
        </select>
        <button>Submit</button>
      </form>
    )
  }
}
