export interface Reviews {
    id: number;
    username: string;
    rating: number;
    comment?: string;
    book_id?: number;
    created_at?: string;
    updated_at?: string;
}