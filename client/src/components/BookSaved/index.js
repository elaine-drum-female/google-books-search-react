import React, {Component} from 'react';
import API from "../../utils/API";
import {BookDetail, BookResults} from "../BookDetail";

class BooksSaved extends Component {

  state = {
    saved:[]
  };

  componentDidMount() {
    this.loadBooks();
    console.log(this.state.saved);
  }

  

render() {
  return (
    <div>
    {this.state.saved.length > 0 ? 
    <BookDetail>
    {this.state.saved.map((savedData) => {
            console.log(savedData);
            return (
              <BookResults
              info={savedData}
              key={savedData._id}
              title={savedData.title}
              author={savedData.author}
              description={savedData.description}
              link={savedData.link}
              image={savedData.image}
              buttonText= 'delete'
              handleClick={this.handleDeletedData(savedData._id)}
              />
            );
          })}    
    </BookDetail>
      : <p>No results</p>
      }
    </div>
    )}

}  


export default BooksSaved;

