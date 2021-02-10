
import './App.css';
import React from 'react';
import Data from './data.js';
import ImageList from './ImageList.js';
import Header from './Header.js';


export default class App extends React.Component {
  state = {
    keyword: ''
  }

  render(){
    const filteredImageList = Data.filter((image) =>{
        if (!this.state.keyword) return true; 
        if (image.keyword === this.state.keyword) return true;

        return false;
      });

    return(
      <div>
        <Header />

      <form>
        <label>keyword:{' '}</label>
          <select
            value={this.state.keyword}
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
      </form>
      <ImageList images={filteredImageList} />
      </div>
    )
  }
}
