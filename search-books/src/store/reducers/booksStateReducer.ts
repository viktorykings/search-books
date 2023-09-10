import { SearchAction, SortAction, FilterAction, BookInfoAction, PaginationAction,  SearchState, booksStateActionTypes } from '../types/booksState';

const initialState: SearchState = {
  search: 'a',
  sort: 'relevance',
  filter: 'All',
  bookId: '',
  pagination: 0,
  singleBookData: {
    etag: '',
    id: '',
    volumeInfo: {
      image: undefined,
      title: '',
      authors: undefined,
      categories: undefined,
      imageLinks: undefined,
      description: ''
    }
  }
};
type ActionTypes = SearchAction | SortAction | FilterAction | BookInfoAction | PaginationAction;
export const booksStateReducer = (state = initialState, action: ActionTypes): SearchState => {
  switch (action.type) {
    case booksStateActionTypes.ENTER_SEARCH_VALUE:
      return { ...state, search: action.payload };
    case booksStateActionTypes.CHANGE_SORT_VALUE:
      return { ...state, sort: action.payload };
    case booksStateActionTypes.CHANGE_FILTER_VALUE:
      return { ...state, filter: action.payload };
    case booksStateActionTypes.SAVE_BOOK_ID:
      return { ...state, bookId: action.payload };
    case booksStateActionTypes.LOAD_MORE_BOOKS:
      return { ...state, pagination: action.payload };
    default:
      return state;
  }
};
