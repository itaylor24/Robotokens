import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

    const [accounts, setAccounts] = useState([]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Context.Provider
          value={{
            accounts,
            connectAccount,
          }}
        >
          {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);