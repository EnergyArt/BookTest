import React, { useState, useEffect } from "react";
import BookCard from "../Components/BookCard";
import axios from 'axios';
import { Books } from "../Interfaces/Book";

function BookList() {
    const [books, setBooks] = useState<Books[] | null>();

    const fetchBooks = async () => {
        const response = await axios.get('/api/books');
        setBooks(response.data.books);
    };

    useEffect( () => {
        fetchBooks();
    }, []);

    return(
        <div className="flex justify-center w-full p-[50px]">
            <div className="grid grid-cols-3 gap-[30px]">
                {books?.map(book => (
                    <BookCard
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        year={book.year}
                        genre={book.genre}
                        description={book?.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default BookList;