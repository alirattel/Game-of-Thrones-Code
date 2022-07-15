import axios from 'axios';
import { useState , useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import Youtube from './components/Youtube';
import Search from './components/Search';

const  App = () => {
  const [items, setItems] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [query, setQuery] = useState('')
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const result = await axios(`https://thronesapi.com/api/v2/Characters${query}`)
      console.log(result.data);
      setItems(result.data);
      setLoading(false);
    }
    fetchItems();
  },[query])
  const queryFunction = (q) =>{
    setQuery(q)
  }
  return (
    <div className="App">
      <Header />
      <Youtube embedId='KPLWWIOCOOQ' />
      <h2 className='GOT chara'>Charcters Of series :</h2>
      <Search getQuery={queryFunction} />
      <Characters Loading = {Loading} items = {items} />
      <h3>made by Ali Ratel 2022</h3>
    </div>
  );
}

export default App;
