// // import {useEffect,useState} from 'react';
// // import axios from 'axios';

// // const SERVER_URL = 'http://localhost:8080/api/todo'
// // function App(){
// //     const[todoList,setTodoList] = useState(null);

// //     const fetchData = async () => {
// //       const response = await axios.get('http://localhost:8080/api/todo').then(response) =>{}
// //        setTodoList(response.data);
// //     // fetch('http://localhost:8080/api/todo')
// //     // .then((response) => response.json())
// //     // .then((data) => setTodoList(data));
// //   };
// //     useEffect(() => {fetchData()},[]);
    
// //     const onSubmitHandler = async (e) => {
// //       e.preventDefault();
// //       const text = e.target.text.value;
// //       const done = e.targer.done.checked;
// //       axios.post(SERVER_URL, { text, done})
// //       fetchData();
// //     //   fetch('http://localhost:8080/api/todo',{
// //     //     method: 'POST',
// //     //     headers:{
// //     //       'Content-Type': 'application/json',
// //     //     },
// //     //     body: JSON.stringify({
// //     //     text,
// //     //     done,
// //     //   }),
// //     // }).then(() => fetchData());
// //     };

// //     reutrn(
// //         <div className='App'>
// //             <h1>TODO LIST</h1>
// //             <form onSubmit={onSubmitHandler}>
// //                 <input name='text'/>
// //                 <input name='done'  type = 'checkbox'/>
// //                 <input name='text' value='추가'/>
// //             </form>
// //             {todoList?.map((todo) => ( 
// //                 <div key={todo.id}>
// //                     <div>{todo.id}</div>
// //                     <div>{todo.text}</div>
// //                     <div>{todo.done ? 'Y' : 'N'}</div>
// //                 </div> 
// //             ))}
// //         </div>
// //     );
// // };

// // export default App;


// import axios from 'axios';
// import {useEffect,useState} from 'react';

// const SERVER_URL = 'http://localhost:8080/api/todo';
// const [todoList, setTodoList] = useState(null);
//  function todoListS() {
  

//   const fetchData = async () => {
//     const response = await axios.get(SERVER_URL);
//     setTodoList(response.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     const text = e.target.text.value;
//     const done = e.target.done.checked;
//     await axios.post(SERVER_URL, { text, done });
//     fetchData();
//   };

// //   return (
// //     <div className='App'>
// //       <h1>할 일 목록</h1>
// //       <form onSubmit={onSubmitHandler}>
// //         <input name='text' />
// //         <input name='done' type='checkbox' />
// //         <input type='submit' value='추가' />
// //       </form>
// //       {todoList?.map((todo) => (
// //         <div key={todo.id}>
// //           <div>{todo.id}</div>
// //           <div>{todo.text}</div>
// //           <div>{todo.done ? '완료' : '미완료'}</div>
// //         </div>
// //       ))}
// //     </div>
// //   );
//  };

// export {fetchData,onSubmitHandler};
