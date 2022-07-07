import React from 'react';
import { SearchContainer } from './style';
import { BsSearch } from 'react-icons/bs';

const Search = ({handle}) =>{
    return (
        <SearchContainer>
            <BsSearch color={'#25252E'} />
            <input
            onChange={handle}
            type="text"
            placeholder="Search by users"
          />
        </SearchContainer>
    )
}

export default Search;