import React from 'react';
import DATA from '../MOCK_DATA.json';
import Item from './Item.jsx';

const List = ({ search }) => {
    return (
        <div>
            {DATA.filter((name) => {
                if (search !== '') {
                    return name.first_name.toLowerCase().includes(search.toLowerCase());
                }
                return name;
            }).map((name) => {
                return <Item value={name.first_name} id={name.id} key={name.id}></Item>;
            })}
        </div>
    );
};

export default List;
