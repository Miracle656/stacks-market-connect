import React, { createContext, useContext, useState, useEffect } from 'react';
import { connect, disconnect, isConnected, getLocalStorage, request } from '@stacks/connect';

interface WalletContextType {
  isConnected: boolean;
  userData: any;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (isConnected()) {
      const data = getLocalStorage();
      setConnected(true);
      setUserData(data);
    }
  }, []);

  const connectWallet = async () => {
    if (isConnected()) {
      console.log('Already connected');
      return;
    }

    const response = await connect();
    console.log('Connected:', response.addresses);
    setConnected(true);
    setUserData(response);
  };

  const disconnectWallet = () => {
    disconnect();
    setConnected(false);
    setUserData(null);
    console.log('User disconnected');
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected: connected,
        userData,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWallet must be used within a WalletProvider');
  return context;
};
