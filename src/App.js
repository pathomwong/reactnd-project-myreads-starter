import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
    bookList: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((bookList)=>{
      this.setState({ bookList})
    })
    
  }

  changeShelf = (id, event) => {
    let shelf = event.target.value;
    let bookList = this.state.bookList;
    bookList.forEach((book)=>{
      if(book.id === id){
        book.shelf = shelf;
      }
    });
    this.setState(bookList);
  }

  addNewBook = (book, event) => {
    book.shelf = event.target.value;
    this.setState(()=>{
      this.state.bookList.push(book);
    });
  }

  render() {
    // console.log(this.state.bookList);
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks bookList={this.state.bookList} changeShelf={this.changeShelf}/>
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks addNewBook={this.addNewBook}/>
         )}/>
      </div>
    )
  }
}

export default BooksApp
