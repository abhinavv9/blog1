import { React, useState } from 'react'
import "./search.css"


const Search = () => {

    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value);
    };

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };

    return (
        <div>
            <form className="search-form" type="submit">
                <div className="content">
                    <div className="search">
                        <input type="text" className="search__input" aria-label="search" placeholder="enter your search" value={value} onChange={handleChange} onKeyPress={handleKeypress}
                        />
                        <button className="search__submit" aria-label="submit search" onClick={handleSubmit}>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
