import React, { useState, createContext } from 'react';

export const ContextForItems = createContext();

export default function Context(props) {
    const [item, setItem] = useState([]);
    const [user, setUser] = useState({
        UserId:1,
        name:'hello',
        userName:'hello',
        password:'123456',
        address:'tel_aviv',
        phoneNumber:'0503201988',
        gender:'male',
        birthDate:'2000/07/10',
        image:'https://stock.adobe.com/search/images?k=no%20image%20available'
    });

    const UpdateUser = (newUser) => {
        console.log('update user :', newUser)
        setUser(newUser);
    }

    function addItem(newitem) {
        setItem((prev) => [...prev, newitem]);
    }
    const value = {
        item: item,
        addItem: addItem,
        user: user,
        UpdateUser: UpdateUser
    }
    return (
        <ContextForItems.Provider value={value}>
            {props.children}
        </ContextForItems.Provider>
    )
}