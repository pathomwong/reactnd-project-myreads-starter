import React from 'react'

class Book extends React.Component {

    // handleChange = (index, event) => {
    //     console.log(event.target.value);
    //     console.log(index)
    //     this.props.bookList[index].shelf = event.target.value;

    // }

    render(){
        console.log('[typeof]' + typeof this.props.changeShelf);
        return(
            this.props.bookList.filter((book) => book.shelf === this.props.shelf).map((book, index) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                                width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={(event) => this.props.changeShelf(index, event)} value={this.props.shelf}>
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