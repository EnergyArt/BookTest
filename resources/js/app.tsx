import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from './Pages/BookList';
import BookInfo from './Pages/BookInfo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/api/books/:id" element={<BookInfo />} />
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<App />);
