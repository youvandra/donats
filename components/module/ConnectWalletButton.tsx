// components/module/ConnectWalletButton.tsx
"use client";
import React, { useState, useEffect } from "react";
import ShadowBoxButton from "./ShadowBoxButton";

const ConnectWalletButton: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    checkTronLinkConnection();
  }, []);

  const checkTronLinkConnection = () => {
    if (window.tronWeb && window.tronWeb.ready) {
      setConnected(true);
    }
  };

  const connectWallet = () => {
    if (window.tronWeb && window.tronWeb.ready) {
      setConnected(true);
    } else {
      setError("TronLink not installed or not ready");
    }
  };

  return (
    <div>
      {!connected && (
        <ShadowBoxButton className="bg-yellowGold mx-auto" onClick={connectWallet}>
          Connect Wallet
        </ShadowBoxButton>
      )}
    </div>
  );
};

export default ConnectWalletButton;
