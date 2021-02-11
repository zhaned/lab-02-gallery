
import './App.css';
import React from 'react';
import Data from './data.js';
import ImageList from './ImageList.js';
import Header from './Header.js';
import Dropdown from './Dropdown.js';


export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }

  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleHornsChange = (e) => {
    this.setState({
      horns: Number(e.target.value)
    })
  }

  render(){
    let theKey = this.state.keyword;
    let theHorn = this.state.horns;
    const filteredImageList = Data.filter((image) =>{
        if (!theKey && !theHorn) return true; 

        if(theKey && !theHorn){
          if (image.keyword === theKey) return true;
        }

        if(!theKey && theHorn){
          if(image.horns === theHorn) return true;
        }

        if(theKey && theHorn){
          if(image.keyword === theKey && image.horns === theHorn) return true;
        }
        
        return false;
      });


    return(
      <div>
        <Header />

        <label>keyword:{' '}</label>
        <Dropdown 
        currentValue={this.state.keyword}
        handleChange={this.handleKeywordChange}
        options={['narwhal', 'rhino', 'mouflon', 'markhor', 'triceratops', 'addax', 'chameleon', 'lizard', 'dragon']}
        />

        <label>horns:{' '}</label>
        <Dropdown
        currentValue={this.state.horns}
        handleChange={this.handleHornsChange}
        options={[1, 2, 3, 100]}
        />
      <ImageList images={filteredImageList} />
      </div>
    )
  }
}
