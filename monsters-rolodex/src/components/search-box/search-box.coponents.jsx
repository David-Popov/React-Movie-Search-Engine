import './search-box.component.css'

const SearchBox = (props) => {
        const {className, onSearchHandler, placeholder} = props;

        return (
            <input className={className}
             placeholder={placeholder}
            type ='search'
            onChange = {onSearchHandler}/>
        )
}

export default SearchBox