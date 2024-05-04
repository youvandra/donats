declare module 'tronweb';

declare global {
    interface Window {
      tronWeb?: {
        ready: boolean;
        // tambahkan properti lain yang dibutuhkan jika ada
      };
    }
  }
  