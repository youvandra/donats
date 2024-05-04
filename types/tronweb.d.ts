declare module 'tronweb';

declare global {
    interface Window {
        tronWeb?: {
            ready?: boolean;
        };
    }
}
