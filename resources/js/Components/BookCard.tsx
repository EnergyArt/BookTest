import React, { useState, useEffect } from "react";

interface BookCardProps {
    titleP: string | null;
    authorP: string | null;
    yearP: number | null;
    genreP: string | null;
    descriptionP: string | null;
}

const BookCard: React.FC<BookCardProps> = ({
    titleP,
    authorP,
    yearP,
    genreP,
    descriptionP
}) => {

    const [title, setTitle] = useState<string | null>(null);
    const [author, setAuthor] = useState<string | null>(null);
    const [year, setYear] = useState<number | null>(null);
    const [genre, setGenre] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [maxLength, setMaxLength] = useState<number>(50);

    useEffect(() => {
        setTitle(titleP);
        setAuthor(authorP);
        setYear(yearP);
        setGenre(genreP);
        setDescription(descriptionP);
    }, []);

    const formatDescription = (description: string) => {
        if(description.length > maxLength) {
            description = description.slice(0, maxLength) + '...';
        }
        return description;
    }

    return(
        <div className="flex flex-col items-center gap-[8px] w-max max-w-[270px] border-[2px] 
            border-gray-400 rounded-[20px] p-[25px]"
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
                description ? formatDescription(description) : 'Загрузка описания...' 
            }</p>
        </div>
    )
}

export default BookCard;