import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { currentSearchState } from 'store/currentSearch';
import { recentlySearchState } from 'store/recentlySearch';
import fetchSummoner from 'apis/search';
import SearchList from './SearchList';
import RecentlySearchList from './RecentlySearchList';

const Search = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState();
  const [isSearchState, setIsSearchState] = useRecoilState(currentSearchState);
  const [isRecentlySearchList, setIsRecentlySearchList] =
    useRecoilState(recentlySearchState);

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

    setIsSearchState(trimValue);
    setIsRecentlySearchList([...isRecentlySearchList, trimValue]);

    navigate(`/summoner/${trimValue}`, {
      state: { keyword: trimValue },
    });
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      async function getSummonerData() {
        const trimValue = searchValue.trim();

        if (!searchValueValidation()) {
          return;
        }

        const result = await fetchSummoner(trimValue);

        setSearchResult(result);
      }
      getSummonerData();
    }
  }, [searchValue]);

  useEffect(() => {
    setIsInputFocus(false);
    inputRef.current.blur();
    setSearchValue('');
  }, [isSearchState]);

  return (
    <SearchLayout>
      <Input
        type="text"
        placeholder="소환사명,챔피언…"
        ref={inputRef}
        value={searchValue}
        onChange={handleSearchValue}
        onKeyPress={handleCheckEnter}
        onFocus={() => setIsInputFocus(true)}
        onMouseDown={() => setIsInputFocus(false)}
      />
      <Button type="button" onClick={searchButtonHandler}>
        <span>.GG</span>
      </Button>

      {isInputFocus &&
        (searchValue?.length > 0 && searchResult ? (
          <SearchList value={searchResult} />
        ) : (
          <RecentlySearchList />
        ))}
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
