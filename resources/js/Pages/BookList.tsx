import React, { useState, useEffect } from "react";
import BookCard from "../Components/BookCard";
import axios from 'axios';

interface Books {
    id: number;
    title: string | null;
    author: string | null;
    year: number | null;
    genre: string | null;
    description: string | null;
    created_at: Date;
    updated_at: Date;
}

function BookList() {
    const items = [];

    useEffect(() => {
        const response = axios.get()
    }, []);

    return(
        <div className="flex justify-center w-full p-[50px]">
            <div className="grid grid-cols-3 gap-[30px]">
                {items.map(item => (
                    <BookCard 
                        titleP={}
                        authorP={}
                        yearP={}
                        genreP={}
                        descriptionP={}
                    />
                ))}
            </div>
        </div>
    )
}

export default BookList;