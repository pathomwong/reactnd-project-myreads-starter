import React from 'react'

class Book extends React.Component {

    render(){
        return(
            this.props.bookList.filter((book) => book.shelf === this.props.shelf).map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                                width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={(event) => this.props.changeShelf(book.id, event)} value={this.props.shelf}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors.join(', ')}</div>
                    </div>
                </li>
            ))
        )
    }
}

export default Book;