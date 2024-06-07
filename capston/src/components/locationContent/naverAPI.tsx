// NaverSearchComponent.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Input, AutocompleteResults, AutocompleteItem, Result } from './naverAPIStyle';

const NaverSearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [selectedAddress, setSelectedAddress] = useState('');

  useEffect(() => {
    if (query.length > 2) {
      const fetchData = async () => {
        try {
          const response = await axios.get('/naver/search', { // 수정된 부분: /naver/search 엔드포인트로 요청 보냄
            params: {
              text: query, // 수정된 부분: 사용자가 입력한 query 값을 사용하여 검색
              display: 5,
              start: 1,
              sort: 'random'
            },
            headers: {
              'X-Naver-Client-Id': 'nfiMlVtIR8DmtDMqhvpO',
              'X-Naver-Client-Secret': 'Tkg91YuVMY'
            }
          });
          console.log('Received data:', response.data);
          setResults(response.data.items);
        } catch (error) {
          console.error('Error fetching data from Naver API', error);
        }
      };
      fetchData();
    } else {
      setResults([]);
    }
  }, [query]);
  
  const handleSelectAddress = (address: string) => {
    setSelectedAddress(address);
    setQuery('');
    setResults([]);
  };

  return (
    <Container>
      <Input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="주소를 입력하세요"
      />
      {results.length > 0 && (
        <AutocompleteResults>
          {results.map((item, index) => (
            <AutocompleteItem key={index} onClick={() => handleSelectAddress(item.title)}>
              {item.title}
            </AutocompleteItem>
          ))}
        </AutocompleteResults>
      )}
      {selectedAddress && (
        <Result>
          <h3>선택된 주소:</h3>
          <p>{selectedAddress}</p>
        </Result>
      )}
    </Container>
  );
};

export default NaverSearchComponent;
