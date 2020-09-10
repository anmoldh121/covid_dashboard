import React from 'react';
import App from './components/App';
import { StateProvider } from './context';

export default function Main() {
    return (
        <StateProvider>
            <App />
        </StateProvider>
    )
}