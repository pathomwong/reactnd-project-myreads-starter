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

  handleChange = (index, event) => {
    let bookList = this.state.bookList;
    bookList[index].shelf = event.target.value;
    this.setState(bookList);
  }

  render() {
    // console.log(this.state.bookList);
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListBooks bookList={this.state.bookList} changeShelf={this.handleChange}/>
        )}/>
        <Route path="/search" component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
