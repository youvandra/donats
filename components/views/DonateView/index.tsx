"use client";
import React, { useState } from "react";
import TronWeb from "tronweb";
import HeaderSection from "@/components/layouts/Header";
import ShadowBoxButton from "@/components/module/ShadowBoxButton";
import ShaodowBoxDiv from "@/components/module/ShadowBoxDiv";
import ShadowBoxInput from "@/components/module/ShadowBoxInput";
import { Checkbox } from "@/components/ui/checkbox";
import { donate } from "@/actions/donated";

type Props = {
  user: {
    id: number;
    username: string;
  };
  donate: typeof donate;
};

// Konfigurasi TronWeb
const fullNode = "https://api.shasta.trongrid.io"; // Alamat node Shasta Testnet
const solidityNode = "https://api.shasta.trongrid.io"; // Alamat node solidity Shasta Testnet
const eventServer = "https://api.shasta.trongrid.io"; // Alamat event server Shasta Testnet

const privateKey = '0377daeca19b5db6b47a473bcde3b732916998cba5cf82221ec1617bf877cde8';
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

// Alamat kontrak Donats Anda
const contractAddress = 'TUPMV5QYupbsgdpmqHwpvS33fbgL5K1gyC'; // Ganti dengan alamat kontrak Donats Anda
  const contractAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "streamerAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "donor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DonationReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "streamerAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "username",
          "type": "string"
        }
      ],
      "name": "StreamerRegistered",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        }
      ],
      "name": "donate",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalIncome",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        }
      ],
      "name": "registerStreamer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "streamers",
      "outputs": [
        {
          "internalType": "string",
          "name": "username",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalIncome",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "usernameToAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
// Buat instance kontrak
const donatsContract = tronWeb.contract(contractAbi, contractAddress);

export default function DonateView(props: Props) {
  const [loading, setLoading] = useState(false);

  const handleDonate = async (formdata: FormData) => {
    const above18 = formdata.get("18-above") ? true : false;
    const anymous = formdata.get("anymous") ? true : false;

    const from = formdata.get("from") as string;
    const amount = formdata.get("amount") as string;
    const message = formdata.get("message") as string;
    if (!from) return alert(`required fill input "From"`);
    if (!amount) return alert(`required fill input "amount"`);
    if (!above18) {
      return alert(`Please fill checkbox if you 18 years old above`);
    }
    try {
      // Kirim transaksi donate
      const amount_send: number = parseFloat(amount);
      const calculatedAmount = amount_send * 1000000;
      await donatsContract.methods.donate(props.user.username).send({
        callValue: calculatedAmount,
      });
      props.donate({
        from: anymous ? "Anonymous" : from,
        amount: String(amount),
        message,
        userId: props.user.id,
      });
    } catch (error) {
      console.error("Error occurred while donating:", error);
      alert(`Failed to donate`);
    } finally {
      alert(`donate to: ${props.user.username} success`);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <HeaderSection />

      {/* main content */}
      <main className="flex flex-col py-5 justify-center items-center gap-8 w-[512px] mx-auto">
        {/*  */}
        <div className="flex justify-between w-full">
          <h1 className="text-4xl">Donate to :</h1>
          <ShadowBoxButton className="min-w-[146px] h-[80px]">
            {props.user.username}
          </ShadowBoxButton>
        </div>
        {/*  */}
        <ShaodowBoxDiv widht="512px" height="540px" backgroundColor="#FAFFDF">
          <form
            action={handleDonate}
            className="px-6 py-6 flex flex-col gap-y-4"
          >
            <ShadowBoxInput type="text" name="from" label="From:" />
            {/* checbox anonymos */}
            <div className="flex items-center w-/4 gap-3">
              <Checkbox
                name="anymous"
                id="anymous"
                className="w-[26px] h-[26px] border border-black p-2 bg-white rounded-xl checked:bg-transparent shadow-lg shadow-black/25 "
              />
              <span className="text-[15px] font-normal">Anonymous</span>
            </div>
            <ShadowBoxInput
              type="number"
              name="amount"
              label="Amount (TRX):"
              min={"0"}
            />
            <ShadowBoxInput type="text" name="message" label="Message:" />
            {/* 18 year checkbox */}
            <div className="flex items-center w-/4 gap-3">
              <Checkbox
                name="18-above"
                id="18-above"
                className="w-[26px] h-[26px] border border-black p-2 bg-white rounded-xl checked:bg-transparent shadow-lg shadow-black/25 "
              />
              <span className="text-[15px] font-normal">
                18 years old and above<span className="text-red-500">*</span>
              </span>
            </div>
            {/* i aggre checkbox */}
            <div className="flex items-center w-/4 gap-3">
              <Checkbox
                name="agree-term"
                id="agree-term"
                className="w-[26px] h-[26px] border border-black p-2 bg-white rounded-xl checked:bg-transparent shadow-lg shadow-black/25 "
              />
              <span className="text-[15px] font-normal">
                I agree that this support is provided on a voluntary basis in
                accordance with the terms and conditions.{" "}
              </span>
            </div>
            <div className="mx-auto mt-5">
            <ShadowBoxButton
              type="submit"
              className="bg-yellowGold w-[147px] h-[47px]"
              loading={loading} // Menonaktifkan tombol saat loading
            >
              {loading ? 'Loading...' : 'Donate'}
            </ShadowBoxButton>

            </div>
          </form>
        </ShaodowBoxDiv>
      </main>
    </div>
  );
}
function setStatusMessage(arg0: string) {
  throw new Error("Function not implemented.");
}

