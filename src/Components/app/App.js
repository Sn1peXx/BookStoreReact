import Header from "../header/Header";
import BookList from "../book-catalog/BookList";
import {useState} from "react";
import Filter from "../filter/Filter";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShowBook from "../singleBook/ShowBook";


const App = () => {

    const [bookData, setBook] = useState([
        {imgSrc: require('../../resources/31.jpg'), bookName: 'Нежный взгляд волчицы. Замок без ключа', bookAuthor: 'Бушков А.А.', bookPrice: 449, id: 1},
        {imgSrc: require('../../resources/38.jpg'), bookName: 'Три дня индиго', bookAuthor: 'Лукьяненко Л.В.', bookPrice: 646, id: 2},
        {imgSrc: require('../../resources/35.jpg'), bookName: 'Однажды в Голливуде', bookAuthor: 'Тарантино Квентин', bookPrice: 692, id: 3},
        {imgSrc: require('../../resources/46.jpg'), bookName: 'Will. Чему может научить нас простой парень', bookAuthor: 'Смит У.', bookPrice: 883, id: 4},
        {imgSrc: require('../../resources/99.jpeg'), bookName: 'Текст по полочкам. Краткое пособие по деловой переписке', bookAuthor: 'Ильяхов Максим', bookPrice: 594, id: 5},
        {imgSrc: require('../../resources/01.jpg'), bookName: 'Сын вечности', bookAuthor: 'Сильвера Адам', bookPrice: 489, id: 6},
        {imgSrc: require('../../resources/2.jpeg'), bookName: 'Тревожные люди', bookAuthor: 'Бакман Фредрик', bookPrice: 544, id: 7}
    ]);
    const [filter, setFilter] = useState('byAuthor');
    const [term, setTerm] = useState('');
    const [id, setId] = useState(null);


    // Сортировка отображаемых книг
    const filterChangeHandler = (data, filter) => {
        switch (filter) {
            case 'price':
                return data.sort((a,b) => a.bookPrice - b.bookPrice);
            case 'byName':
               return  data.sort((a,b) => {
                    const nameA = a.bookName.toLowerCase();
                    const nameB = b.bookName.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                });
            case 'byAuthor':
                return data.sort((a,b) => {
                    const nameA = a.bookAuthor.toLowerCase();
                    const nameB = b.bookAuthor.toLowerCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                });
            default:
                return data;
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    // Вывод книг и авторов по поиску
    const userSearchHandler = (data, term) => {
        if (data.length === 0) {
            return data;
        }

        return data.filter(item => {
            return item.bookName.toLowerCase().indexOf(term) > -1 || item.bookAuthor.toLowerCase().indexOf(term) > -1;
        });
    }

    const onSearchSelect = (term) => {
        setTerm(term);
    }

    const onIdSelect = (id) => {
        setId(id);
    }

    // Массив книг, выбранных по поиску и фильтрам
    const visibleData = filterChangeHandler(userSearchHandler(bookData, term), filter);

    return (
        <Router>
            <Header onSearchSelect={onSearchSelect} />
            <Switch>
                <Route exact path="/">
                    <BookList onIdSelect={onIdSelect} bookData={visibleData}/>
                    <Filter onFilterSelect={onFilterSelect} />
                </Route>
                <Route exact path="/book/:id">
                    <ShowBook bookData={bookData} id={id}/>
                </Route>


            </Switch>


        </Router>
    )
}

export default App;