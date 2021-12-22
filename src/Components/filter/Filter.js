import './Filter.css';

const Filter = ({onFilterSelect}) => {

    const buttonsData = [
        {name: 'all', label: 'По умолчанию'},
        {name: 'price', label: 'По цене'},
        {name: 'byName', label: 'По названию'},
        {name: 'byAuthor', label: 'По автору'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        return (
            <button className="filter_btn" key={name} type="button" onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="filter">
            <h2 className="filter_title">
                Фильровать по
            </h2>
            {buttons}
        </div>
    );
}

export default Filter;