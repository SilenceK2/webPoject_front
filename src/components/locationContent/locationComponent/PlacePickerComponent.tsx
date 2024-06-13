import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { InputSearch, InputContainer, ResultContainer, ResultItem, SearchBoxBody } from '../styles';

interface Place {
  title: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
}

interface PlacePickerComponentProps {
  onSelect: (place: Place) => void;
  placeholder: string;
}

const PlacePickerComponent: React.FC<PlacePickerComponentProps> = ({ onSelect, placeholder }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Place[]>([]);

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

  const handleSuggestionClick = (place: Place) => {
    const cleanedTitle = place.title.replace(/<\/?b>/g, '');
    setQuery(cleanedTitle);
    setSuggestions([]);
    onSelect({ ...place, title: cleanedTitle });
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
            placeholder={placeholder}
          />
          <FontAwesomeIcon icon={faX} style={{ color: "gray", marginLeft: "auto" }} onClick={clearInput} />
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "gray", fontSize: "20px", padding: "10px" }} />
        </InputContainer>
      </SearchBoxBody>
      <ResultContainer>
        {suggestions.map((item, index) => (
          <ResultItem
            key={index}
            onClick={() => handleSuggestionClick(item)}
            dangerouslySetInnerHTML={{ __html: `${item.title}<br>${item.address}` }}
          ></ResultItem>
        ))}
      </ResultContainer>
    </>
  );
};

export default PlacePickerComponent;
