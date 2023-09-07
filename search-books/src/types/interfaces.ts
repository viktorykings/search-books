export interface BooksData{
    etag: string,
    id: string,
    volumeInfo: {
        image?: string;
        title: string,
        authors?: string[],
        categories?: string[],
        imageLinks?:{
            smallThumbnail?: string,
            thumbnail?: string
        }
    }
}
export interface CardPrewiew{
    id: string;
    image?: {
        smallThumbnail?: string,
        thumbnail?: string
    };
    title: string,
    authors?: string[],
    categories?: string[],
}