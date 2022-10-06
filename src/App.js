import React, { useCallback, useEffect, useState } from "react";
import { getCoins } from "./utils/marketplace";
import { login } from "./utils/near";
import "./App.css";

function App() {
  const account = window.walletConnection.account();
  const [coins, setCoins] = useState([]);
  const fetchCoins = useCallback(async () => {
    if (account.accountId) {
      setCoins(await getCoins());
    }
  }, [account]);
  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);
  return (
    <>
      {account.accountId ? (
        coins.forEach((coin) => console.log(coin))
      ) : (
        <button onClick={login}>CONNECT WALLET</button>
      )}
    </>
  );
}

export default App;
