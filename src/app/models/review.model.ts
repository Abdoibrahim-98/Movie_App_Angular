export interface ReviewRoot{
    id: number;
    page: number;
    results: ReviewResults[];
    total_page: number;
    total_results: number;
}

export interface ReviewResults{
    author: string;
    author_details: AuthorDetails[];
    content: string;
    created_at: string;
    id: number;
    updated_at: string;
    url: string;
}

export interface AuthorDetails{
    avatar_path: string;
    name: string;
    rating: number;
    username: string;
}