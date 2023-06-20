import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { mockData } from './mock/index.js';
import { fetchMockData } from './utils/service.js';
import useFetch from './hooks/useFetch.js';
import Item from './components/item/index.jsx';
import List from './components/list/index.jsx';
import Form from './components/form/index.jsx';

const App = () => {
  const {data, isLoading, isError, setData} = useFetch(fetchMockData);

  const onCompleteHandler = useCallback((id) => {
    setData(prevData => prevData.map(item => item.id === id ? {...item, completed: !item.completed} : item))
  }, [])

  const onDeleteHandler = useCallback((id) => {
    setData(prevData => prevData.filter(item => item.id !== id))
  }, [])

  const onSubmitHandler = useCallback((str) => {
    const newTodo = {
      id: new Date(),
      title: str,
      completed: false,
    }

    setData(prevData => [...prevData, newTodo])

  }, [])

  if(!isLoading && isError) return <h2>Error</h2>

  return (
    <div>
      <h1>TO DO</h1>
      <Form onSubmit={onSubmitHandler} />
      {isLoading ? <h2>loading...</h2> : <List data={data} onComplete={onCompleteHandler} onDelete={onDeleteHandler}/>}
    </div>
  )
}

export default App; 