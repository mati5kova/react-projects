import React, { useState } from 'react';
import List from './components/List.jsx';
import SearchItem from './components/SearchItem.jsx';

function App() {
    const [search, setSearch] = useState('');

    return (
        <div className="App">
            <SearchItem setSearch={setSearch}></SearchItem>
            <List search={search}></List>
        </div>
    );
}

export default App;
