"use client";
import React, { useState, useEffect } from "react";
import HeaderSection from "@/components/layouts/Header";
import ShadowBoxButton from "@/components/module/ShadowBoxButton";
import ShaodowBoxDiv from "@/components/module/ShadowBoxDiv";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import TronWeb from "tronweb";
import Link from "next/link";

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

const SupportView = () => {
  const [balance, setBalance] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const session = useSession();
  const router = useRouter();
  const handleWithdraw = async () => {
    try {
      await donatsContract.methods.withdraw(balance).send({
        from: tronWeb.defaultAddress.base58,
      });
      console.log("Withdraw successful");
      // Mungkin perlu menambahkan pembaruan UI atau notifikasi untuk memberi tahu pengguna bahwa penarikan berhasil
    } catch (error) {
      console.error("Error occurred while withdrawing balance:", error);
      // Tambahkan penanganan kesalahan sesuai kebutuhan
    }
  };

  useEffect(() => {
    // Panggil fungsi getBalance
    donatsContract.methods
      .getBalance()
      .call()
      .then((balance: React.SetStateAction<number>) => {
        setBalance(balance);
      })
      .catch((error: any) => {
        console.error("Error getting balance:", error);
      });

    // Panggil fungsi getTotalIncome
    donatsContract.methods
      .getTotalIncome()
      .call()
      .then((totalIncome: React.SetStateAction<number>) => {
        setTotalIncome(totalIncome);
      })
      .catch((error: any) => {
        console.error("Error getting total income:", error);
      });
  }, []);

  if (!session.data?.user?.name) {
    router.push("/");
  }

  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <Link href="/dashboard"><HeaderSection /></Link>

      {/* main */}
      <main className="flex px-32 mt-10 justify-center items-center gap-10">
        {/* card 1 */}
        <div className="flex flex-col items-start w-max justify-center mt-7 gap-5">
          <ShadowBoxButton className="mx-auto w-[146px] h-[81px] bg-orange cursor-default">
            Cashout
          </ShadowBoxButton>
          <ShaodowBoxDiv
            height="296px"
            widht="532px"
            backgroundColor="#F4CD00"
          >
            <div className="px-6 py-3 flex flex-col gap-28">
              <h1 className="font-bold text-[64px] text-black leading-[96px]">
                <span className="text-black/75">{(totalIncome/1000000).toString()}</span> TRX
              </h1>
              <div className="">
                <h6 className="text-xl leading-7">Total overall income.</h6>
              </div>
            </div>
          </ShaodowBoxDiv>
        </div>

        {/* card 2 */}
        <div className="flex flex-col w-max items-end mt-7 gap-5">
          <ShadowBoxButton className="mx-auto w-[146px] h-[81px] cursor-default">
            {session?.data?.user?.name}
          </ShadowBoxButton>
          <ShaodowBoxDiv
            height="296px"
            widht="532px"
            backgroundColor="#FFB5E6"
          >
            <div className="px-6 py-3 flex flex-col gap-4 ">
              <h1 className="font-bold text-[64px] text-black leading-[96px]">
                <span className="text-black/75">{(balance/1000000).toString()}</span> TRX
              </h1>
              <ShadowBoxButton className="bg-[#BDFF00] text-[20px] w-[129px] h-[56px]" onClick={handleWithdraw}>
                Withdraw
              </ShadowBoxButton>
              <div className="">
                <h6 className="text-xl leading-7 ">
                  The above figure is the total balance that is ready to be
                  disbursed.
                </h6>
              </div>
            </div>
          </ShaodowBoxDiv>
        </div>
      </main>
    </div>
  );
};

export default SupportView;
