export interface Books {
    id: number;
    title: string;
    author: string;
    year: number;
    genre: string;
    description: string | null;
    created_at?: string;
    updated_at?: string;
}