import { usePage } from '@inertiajs/inertia-react';
import { Books } from '../Interfaces/Book';

function BookInfo() {
    const page = usePage()
    const { book } = (page.props as unknown as { book: Books })

    return(
        <div className="flex justify-center w-full p-[50px]">
            <div className="flex gap-[30px]">
                <img src="/content/book.png" alt="Книга" className="h-[300px] border-[2px] 
                    p-[25px] border-gray-400 rounded-[20px] object-cover" />
                <div>
                    <span className="w-full text-left text-[18px] font-bold truncate overflow-hidden">
                        { book.title }
                    </span>
                    <span className="w-full text-left text-[14px]">{ book.genre  }</span>
                    <div className="flex justify-start items-center gap-[30px] w-full">
                        <span className="text-left text-[14px]">{ book.author  }</span>
                        <span className="text-left text-[14px]">{ book.year  }</span>
                    </div>
                    <p className="w-full text-left text-[14px]">{
                        book.description ? book.description : 'Описание отсутствует' 
                    }</p>
                </div>
            </div>
        </div>
    )
}

export default BookInfo;