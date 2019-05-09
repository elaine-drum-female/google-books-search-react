import React, {Component} from 'react';
import SearchForm from "../SearchForm";
import {BookDetail, BookResults} from "../BookDetail";

import API from "../../utils/API";

class BooksContainer extends Component {

  state = {
    result:[],
    search: ""
  };

  componentDidMount() {
    this.searchBooks("Harry Potter");
    API.googleBook().then(save => {
      // console.log(save);
    }).catch((err) => {
      console.log(err);
    });
  }

  searchBooks = query => {
    API.googleBook(query)
    .then(res => {
      var results = res.data.items;
      var returnedBooks = [];
      for(var i = 0; i < results.length;i++) {
        returnedBooks.push( {
          title: results[i].volumeInfo.title,
          author: results[i].volumeInfo.authors,
          description: results[i].volumeInfo.description,
          link: results[i].volumeInfo.infoLink,
          image: results[i].volumeInfo.imageLinks.thumbnail
        });
      }

      this.setState({ result: returnedBooks })
      // console.log(this.state.result)
       }).catch(err => console.log(err));

  };


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name] : value
    });
  };
  

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };


  handleSaveData = info => {
    console.log(info)
    if (info.title && info.author && info.description && info.link && info.image) {
      API.saveBook({info})
        .then(res => console.log('saved successfully'))
        .catch(err => console.log(err));
    }
  };



render() {
  return (
    
    <div>

        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        {this.state.result.length > 0 ? 
        <BookDetail>
          {this.state.result.map((info) => {
            
            return (
              <BookResults
              info={info}
              key={info.title}
              title={info.title}
              author={info.author.join(', ')}
              description={info.description}
              link={info.link}
              image={info.image}
              handleClick={this.handleSaveData}
              buttonText='Save'
              />
            );
          })}
        </BookDetail>
      : <p>No results</p>
      }
    </div>
    )}

}  


export default BooksContainer;

