import {Link} from "react-router-dom";

import './Book.css';

const Book = ({imgSrc, bookName, bookAuthor, bookPrice, onIdSelect, id}) => {
    return (
        <section className="book_block">
            <div className="book">
                <img className="book_img" src={imgSrc} alt="книга"/>
                <h3 className="book_title">{bookName}</h3>
                <p className="book_author">{bookAuthor}</p>
                <div className="down_block">
                    <Link to={`/book/${id}`}>
                        <button onClick={onIdSelect} className="book_btn">Купить</button>
                    </Link>
                    <p className="book_price">{bookPrice}₽</p>
                </div>
            </div>

        </section>
    );
}

export default Book;