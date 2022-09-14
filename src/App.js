
import react, { Component } from 'react';
import './App.css';
import Counter from './Component/TimeInterval';
import picture  from './Component/picture.jpg';
class  App extends Component {
  state = {
    fullName: "Dhibi Rawdha",
    bio :"java script full stack developer,ambitious and hard-working girl",
    imgSrc:{picture},
    show: false,
  };  
  toggleVisibility = () => {
      this.setState({ show: !this.state.show });
    };
  render() {
    return (
    <div className="App">
    <button onClick ={this.toggleVisibility}>show</button>
    {this.state.show ? (
      <div>
      <h1>{this.state.fullName}</h1>
      <p>{this.state.bio}</p>
      <img src={picture} alt= "profile" />
      </div> ) :(
        <p>Press the button!!!</p>
      )
    
      }
    <Counter/>
    </div>
  );
}
}

export default App;
