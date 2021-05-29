import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
function Movie({ title, imageUrl, contents }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title}/>
      <div className ="container">
      <h4><b>{title}</b></h4>
      <p>{contents}</p>
      </div>
    </div>

  );
}
class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    };
  }
  call = async () => {
    axios.get("https://yts.mx/api/v2/list_movies.json").then(response => {
      this.setState({
        movies: response.data.data.movies
      });
    }).catch(err => {
      console.log(err);
    })
  }
  componentDidMount() {
    this.call()
  }

  render() {
    console.log(this.state);
    return (
      <div class="wrapper">
        {
          this.state.movies.map((movie) => {
            return <Movie title={movie.title} imageUrl={movie.large_cover_image} contents={movie.summary} />
          })
        }

      </div>
    );
  }
}
function App() {

  return <Board />
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
