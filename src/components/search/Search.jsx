import { useEffect, useState } from 'react';
import { useResetRecoilState } from 'recoil';
import axios from 'axios';
import styled from 'styled-components';
import { searchState } from '../../store/search';
import SearchList from './SearchList';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState();
  // const [isSearchState, setIsSearchState] = useResetRecoilState(searchState);

  const handleSearchValue = (e) => {
    let { value } = e.target;

    if (value) {
      setSearchValue(value);
    } else {
      setSearchValue('');
    }
  };

  const handleCheckEnter = (e) => {
    if (e.key === 'Enter') {
      searchButtonHandler();
    }
  };

  const searchValueValidation = () => {
    if (!searchValue.trim()) {
      alert('검색어를 입력해주세요.');

      return false;
    }

    return true;
  };

  const searchButtonHandler = async () => {
    const trimValue = searchValue.trim();

    if (!searchValueValidation()) {
      return;
    }

    await axios
      .get(`https://codingtest.op.gg/api/summoner/${trimValue}`)
      .then((response) => {
        const { summoner } = response.data;

        setSearchResult(summoner);
        console.log(summoner);
      })
      .catch(() => {
        // alert(config.MESSAGE['common-error']);
      });
  };

  useEffect(() => {
    if (searchValue.length > 0) searchButtonHandler();
  }, [searchValue]);

  return (
    <SearchLayout>
      <Input
        type="text"
        placeholder="소환사명,챔피언…"
        value={searchValue}
        onChange={handleSearchValue}
        onKeyPress={handleCheckEnter}
      />
      <Button type="button" onClick={searchButtonHandler}>
        <span>.GG</span>
      </Button>

      {searchValue?.length > 0 && searchResult && (
        <SearchList value={searchResult} />
      )}
    </SearchLayout>
  );
};

export default Search;

const SearchLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 260px;
  height: 32px;
  padding: 9px 12px 8px 14px;
  border-radius: 2px;
  background-color: #fff;
  border: none;
  box-sizing: border-box;
`;

const Input = styled.input`
  flex: 0 0 85%;
  border: none;
  box-sizing: border-box;
`;

const Button = styled.button`
  flex: 0 0 15%;
  font-size: 20px;
  font-weight: 800;
  color: #1ea1f7;
`;
