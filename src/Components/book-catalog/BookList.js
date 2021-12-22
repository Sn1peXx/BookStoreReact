import Book from '../book-block/Book';

import './BookList.css'

const BookList = ({bookData, onIdSelect}) => {

    const content = bookData.map(item => {
        return (
            <Book
                {...item}
                onIdSelect={() => onIdSelect(item.id)}
                key={item.id}
                id={item.id}
            />
        )
    })

    const emptyBlock = () => {
        return (
            <div className="empty">
                К сожалению тут пусто
            </div>
        )
    }

   return (
       <div className="books">
           {content.length > 0 ? content : emptyBlock()}
       </div>
   )
}

export default BookList;