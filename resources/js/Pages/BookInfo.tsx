import { useState, useEffect } from "react";
import { usePage } from '@inertiajs/inertia-react';
import axios from "axios";
import { Books } from '../Interfaces/Book';
import { Reviews } from "../Interfaces/Review";

interface Errors {
    rating?: string | null;
    username?: string | null;
    comment?: string | null;
}

function BookInfo() {
    const [reviews, setReviews] = useState<Reviews[] | null>(null);
    const [rating, setRating] = useState<number>(0);
    const [errors, setErrors] = useState<Errors | null>(null)

    const page = usePage()
    const { book } = (page.props as unknown as { book: Books })

    useEffect( () => {
        const { reviews } = page.props as unknown as { reviews: Reviews[] | null };
        setReviews(reviews);
    }, []);
    
    
    const addReview =  async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const comment = formData.get('comment') as string;

        setErrors(null);

        if(rating === 0) {
            setErrors({rating: 'Заполните это поле.'});
            return
        }
        if(!username) {
            setErrors({username: 'Заполните это поле.'});
            return
        }

        try {
            const response = await axios.post(`/api/books/${book.id}/reviews`, {
                rating, username, comment
            });

            if(response.data.success) {
                const newReview: Reviews = {
                    id: reviews && reviews.length > 0
                        ? Math.max(...reviews.map(review => review.id)) + 1 : 1,
                    username,
                    comment,
                    rating,
                };
                setReviews(previous => previous ? [...previous, newReview] : [newReview]);
            }
        }
        catch(error: any) {
            const validationErrors = error.response.data.errors;
            setErrors({
                rating: validationErrors.rating?.[0] ?? null,
                username: validationErrors.username?.[0] ?? null,
                comment: validationErrors.comment?.[0] ?? null,
            });
        }
    }

    return(
        <div className="flex flex-col gap-[30px] justify-center w-full p-[50px]">
            <div><a href='/' className='hover:text-red-500 transition duration-200'>Назад</a></div>
            <div className="flex justify-center w-full">
                <div className="flex gap-[30px] max-w-[1000px]">
                    <img src="/content/book.png" alt="Книга" className="h-[300px] border-[2px] 
                        p-[25px] border-gray-400 rounded-[20px] object-cover" />
                    <div className="flex flex-col gap-[8px] mt-[20px]">
                        <span className="w-full text-left text-[18px] font-bold truncate overflow-hidden">
                            { book.title }
                        </span>
                        <span className="w-full text-left text-[14px]">Жанр:  { book.genre  }</span>
                        <span className="text-left text-[14px]">Автор: { book.author  }</span>
                        <span className="text-left text-[14px]">Дата публикации: { book.year + ' год' }</span>
                        <p className="w-full text-left text-[14px]">Краткое описание: {
                            book.description ? book.description : 'Отсутствует' 
                        }</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <div className='grid grid-cols-[35%_65%] gap-[30px] w-full max-w-[1000px] px-[25px]'>
                    <form onSubmit={addReview} className='flex flex-col gap-[8px] min-w-[200px] text-[14px]'>
                        <div className='flex flex-col gap-[4px]'>
                            <div className='flex items-center gap-[10px]'>
                                <span>Оценка</span>
                                <div className='flex gap-[3px]'>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <label key={index} className='group'>
                                            <input 
                                                type="radio"
                                                name="rating"
                                                className="absolute w-[18px] h-[18px] opacity-0" 
                                                onChange={() => setRating(index + 1)} 
                                            />
                                            {rating < index + 1 ? <img src="/content/star-gray.svg" alt="Серая звезда" /> :
                                            <img src="/content/star.svg" alt="Жёлтая звезда" />}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            {errors?.rating ? <span className="pl-[5px] text-red-600 text-[11px]">{errors?.rating}</span> : null}
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <span>Имя пользователя</span>
                            <input 
                                type="text"
                                name='username'
                                placeholder='Введите своё имя'
                                className='h-[35px] pl-[20px] rounded-[10px] bg-slate-100 hover:bg-slate-200 transition duration-200'
                                max={50}
                            />
                            {errors?.username ? <span className="pl-[5px] text-red-600 text-[11px]">{errors?.username}</span> : null}
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <span>Отзыв (Необязательно)</span>
                            <textarea 
                                name="comment"
                                placeholder='Введите свой отзыв'
                                className='min-h-[35px] h-[105px] p-[7px_20px] rounded-[10px] bg-slate-100 hover:bg-slate-200 
                                    transition duration-200 resize-y' 
                            ></textarea>
                            {errors?.comment ? <span className="pl-[5px] text-red-600 text-[11px]">{errors?.comment}</span> : null}
                        </div>
                        <div className="flex w-full justify-end"><button type="submit" className="h-[35px] px-[20px] bg-red-500 text-white rounded-[10px]
                            hover:bg-red-600 transition duration-200">
                            Оставить отзыв
                        </button></div>
                    </form>
                    <div className='flex flex-col gap-[15px]'>
                        {reviews && reviews.length > 0 ? reviews?.map((review, index) => (
                            <div className="flex flex-col gap-[15px]">
                                <div className="flex flex-col gap-[8px] px-[5px]">
                                    <div className="flex items-center gap-[20px]">
                                        <span className="font-bold">{ review.username }</span>
                                        <div className='flex items-center gap-[10px]'>
                                            <span className="text-[14px]">Оценка:</span>
                                            <div className='flex gap-[3px]'>
                                                {Array.from({ length: review.rating }).map(review => (
                                                    <img src="/content/star.svg" alt="Жёлтая звезда" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {review.comment ? <p className="text-[14px]">{ review.comment }</p> : null}
                                </div>
                                {index + 1 < reviews.length ? <div className="w-full h-[2px] bg-gray-400 rounded-full" /> : null}
                            </div>
                            )) : 
                            <div className="text-center text-[16px] w-full">
                                У этой книги пока нет отзывов
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookInfo;