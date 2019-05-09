import React , { Component } from 'react';
import { BrowserRouter as Router,Route,Switch  } from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get('/api/product/googlebooks').then(response => {
      console.log(response);
    });
  }

   

  render() {
    return (
      <div className="App">
          <Router>
            <Wrapper>
                <Navbar
                  activePage={this.state.activePage}
                  displayPage={this.displayPage}
                />
                <Switch>
                  <Route exact path="/" component={Search} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/saved" component={Saved} />
                  <Route component={NoMatch} />
                </Switch>
                
                {/* <Footer/> */}
            </Wrapper>
            
          </Router>
      </div>
    );
  }
}

export default App;
