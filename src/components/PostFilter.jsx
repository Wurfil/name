import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, serFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => serFilter({...filter, query: e.target.value})}
                placeholder={"Поиск"}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => serFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;