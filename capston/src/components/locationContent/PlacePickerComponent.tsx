import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const ImageButton = styled.img`
  cursor: pointer;
`;

const ResultContainer = styled.div`
  margin-top: 10px;
`;

const ResultItem = styled.p`
  margin: 5px 0;
  padding: 8px;
  background: #f0f0f0;
  cursor: pointer;
  &:hover {
    background: #e0e0e0;
  }
`;

const PlacePickerComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<{ title: string, address: string }[]>([]);

  const fetchSuggestions = async (text: string) => {
    try {
      const response = await axios.get('http://localhost:8000/naver/search', {
        params: { text },
        headers: {
          'X-Naver-Client-Id': 'nfiMlVtIR8DmtDMqhvpO',
          'X-Naver-Client-Secret': 'Tkg91YuVMY'
        }
      });
      setSuggestions(response.data.items);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };
  
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setQuery(text);
    if (text.trim() !== '') {
      fetchSuggestions(text);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (title: string) => {
    setQuery(title.replace(/<\/?b>/g, ''));
    setSuggestions([]);
  };

  const clearInput = () => {
    setQuery('');
    setSuggestions([]);
  };

  return (
    <Container>
      <InputContainer>
        <Input
          name="postLoc"
          id="postLoc"
          value={query}
          onChange={handleInputChange}
          placeholder="출발지를 입력해주세요."
        />
        {/* <ImageButton
          id="searchImg"
          src="/images/search.png"
          alt="Search"
          onClick={() => fetchSuggestions(query)}
        />
        <ImageButton
          id="xImg"
          src="/images/xmark.png"
          alt="Clear"
          onClick={clearInput}
        /> */}
      </InputContainer>
      <ResultContainer>
        {suggestions.map((item, index) => (
          <ResultItem
            key={index}
            onClick={() => handleSuggestionClick(item.title)}
            dangerouslySetInnerHTML={{ __html: `${item.title}<br>${item.address}` }}
          />
        ))}
      </ResultContainer>
    </Container>
  );
};

export default PlacePickerComponent;
