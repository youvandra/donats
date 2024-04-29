declare module 'tronweb';

declare global {
    interface Window {
      TronWeb?: any; // Menggunakan 'any' agar TypeScript tidak melakukan pengecekan tipe pada properti 'tronWeb'
    }
  }
  