import React from 'react';
import ReactDOM from 'react-dom/client';
import BookList from './Pages/BookList';

function App() {
    return <BookList />;
}

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<App />);
