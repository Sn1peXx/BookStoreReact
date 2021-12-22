import {Redirect} from "react-router-dom";


import './show.css'

const ShowBook = ({bookData, id}) => {

    const content = bookData.map(item => {
        if (item.id === id) {
            return (
                <div key={item.id}>
                    <div className="main">
                        <div className="img">
                            <img className="img_size" src={item.imgSrc} alt={item.bookName}/>
                        </div>
                        <div className="right">
                            <div className="book_name">{item.bookName}</div>
                            <div className="book_authors">{item.bookAuthor}</div>
                            <p className="description">Соскучились по фирменной "бакмановской прозе",
                                необычной, изящной и трогательной? Ловите "Тревожных людей" - напоминание о том,
                                что у каждого из нас за плечами свой мешочек боли, который мы всюду таскаем за
                                собой и не знаем, куда пристроить. Храбрая восьмидесятилетняя старушка,
                                ИКЕА-зависимая супружеская пара, беременная женщина</p>
                            <p className="price">{item.bookPrice} ₽</p>
                            <button className="button">Купить</button>
                        </div>
                    </div>
                </div>
            )
        }
    });

    const counter = () => {
        let count = 0;
        content.forEach((item) => {
            if (typeof(item)=='undefined') {
                count++
            }
        })
        return count;
    }


    return (
        <>
            {counter() === 6 ? content : <Redirect to="/" />}
        </>
    )
}

export default ShowBook;