import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faMagnifyingGlass,faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { InputSearch, InputContainer, ResultContainer, ResultItem, SearchBoxBody } from './styles';

// PlacePickerComponent가 부모 컴포넌트로 값을 전달할 수 있도록 props에 onSelect 추가
interface PlacePickerComponentProps {
  onSelect: (value: string) => void;
}

const PlacePickerComponent: React.FC<PlacePickerComponentProps> = ({ onSelect }) => {
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
    const cleanedTitle = title.replace(/<\/?b>/g, ''); // HTML 태그 제거
    setQuery(cleanedTitle);
    setSuggestions([]);
    onSelect(cleanedTitle); // 부모 컴포넌트로 선택된 값 전달
  };

  const clearInput = () => {
    setQuery('');
    setSuggestions([]);
  };

  return (
    <>
      <SearchBoxBody>
        <InputContainer>
          <InputSearch
            name="postLoc"
            id="postLoc"
            value={query}
            onChange={handleInputChange}
            placeholder="출발지를 입력해주세요."
          />
          <FontAwesomeIcon icon={faX} style={{ color: "gray", marginLeft: "auto" }} onClick={clearInput} />
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color:"gray", fontSize: "20px", padding: "10px" }} />
        </InputContainer>
      </SearchBoxBody>
      <ResultContainer>
        {suggestions.map((item, index) => (
          <ResultItem
            key={index}
            onClick={() => handleSuggestionClick(item.title)}
            dangerouslySetInnerHTML={{ __html: `${item.title}<br>${item.address}` }} // HTML을 그대로 출력
          ></ResultItem>
        ))}
      </ResultContainer>
    </>
  );
};

export default PlacePickerComponent;
