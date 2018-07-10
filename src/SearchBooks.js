import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {

    state = {
        bookList: []
    }

    search = (event) => {
        //console.log(event.target.value);
        if (event.target.value.length > 0){
            BooksAPI.search(event.target.value).then((bookList) => {
                if (bookList.error === undefined){
                    bookList.forEach((book) => {
                        if (this.props.bookList.find(b => b.id === book.id) !== undefined){
                            book.shelf = this.props.bookList.find(b => b.id === book.id).shelf;
                        }
                    });
                }
                this.setState({ bookList })
            // console.log(bookList.error === undefined)
            })
            //console.log(this.state.bookList);
        }else{
            this.setState({ bookList:[] })
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.

                  'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 
                  'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 
                  'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 
                  'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 
                  'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 
                  'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 
                  'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 
                  'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 
                  'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
                */}
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.search(event)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* {(this.state.bookList.error === undefined) && this.state.bookList.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
                                        }}></div>
                                        <div className="book-shelf-changer">
                                            <select onChange={(event) => this.props.addNewBook(book, event)} value='none'>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                                </div>
                            </li>
                        ))} */}
                        <Book bookList={this.state.bookList} shelf={"currentlyReading"} changeShelf={this.props.addNewBook} />
                        <Book bookList={this.state.bookList} shelf={"wantToRead"} changeShelf={this.props.addNewBook} />
                        <Book bookList={this.state.bookList} shelf={"read"} changeShelf={this.props.addNewBook} />
                        <Book bookList={this.state.bookList} shelf={"none"} changeShelf={this.props.addNewBook} />
                        <Book bookList={this.state.bookList} shelf={undefined} changeShelf={this.props.addNewBook} />
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks