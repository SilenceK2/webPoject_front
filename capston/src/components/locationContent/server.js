const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json()); // JSON 파싱을 위해 추가

// GET 요청 처리
app.get('/naver/search', async (req, res) => {
  try {
    // 클라이언트로부터 검색어를 받아옴
    const { text } = req.query;
    
    // 네이버 API에 검색 요청을 보냄
    const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {
      params: {
        query: text,
        display: 5,
        start: 1,
        sort: 'random'
      },
      headers: {
        'X-Naver-Client-Id': 'nfiMlVtIR8DmtDMqhvpO',
        'X-Naver-Client-Secret': 'Tkg91YuVMY',
        'Content-Type': 'application/json'
      }
    });

    // 네이버 API에서 받아온 검색 결과를 클라이언트에 전송
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Naver API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
