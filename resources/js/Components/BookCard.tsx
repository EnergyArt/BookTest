import React, { useState, useEffect } from "react";
import { Books } from "../Interfaces/Book";

const BookCard: React.FC<Books> = ({
    id, title, author, year, genre, description
}) => {
    const [maxLength, setMaxLength] = useState<number>(50);

    const formatDescription = (description: string) => {
        if(description.length > maxLength) {
            description = description.slice(0, maxLength) + '...';
        }
        return description;
    }

    return(
        <a href={`/api/books/${id}`}
            className="flex flex-col items-center gap-[8px] w-max max-w-[270px] border-[2px] 
                border-gray-400 hover:border-red-500 transition duration-200 rounded-[20px] p-[25px]"
        >
            <img src="/content/book.png" alt="Книга" className="h-[200px] object-cover" />
            <span className="w-full text-left text-[16px] font-bold truncate overflow-hidden">
                { title ? title : 'Загрузка названия...' }
            </span>
            <span className="w-full text-left text-[12px]">{ genre ? genre : 'Загрузка жанра...' }</span>
            <div className="flex justify-start items-center gap-[30px] w-full">
                <span className="text-left text-[12px]">{ author ? author : 'Загрузка автора...' }</span>
                <span className="text-left text-[12px]">{ year ? year + ' год' : 'Загрузка даты...' }</span>
            </div>
            <p className="w-full text-left text-[12px]">{
                description ? formatDescription(description) : 'Описание отсутствует' 
            }</p>
        </a>
    )
}

export default BookCard;