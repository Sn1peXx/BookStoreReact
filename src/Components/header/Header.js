import {useState} from "react";
import {Link} from "react-router-dom";

import './Header.css';
import logo from '../../resources/bookvoed.png';

const Header = ({onSearchSelect}) => {

    const [term, setTerm] = useState('');

    const searchChangeHandler = (event) => {
        const term = event.target.value.toLowerCase();
        setTerm(term);
        onSearchSelect(term);
    }

    return (
        <header className="header">
            <div className="header_wrapper">
                <div className="logo">
                    <Link to={'/'}>
                        <img className="logo_img" src={logo} alt="logo"/>
                    </Link>
                </div>
                <input className="input" placeholder="Введите название книги или автора" value={term} onChange={searchChangeHandler}/>
            </div>
        </header>
    )
}

export default Header;