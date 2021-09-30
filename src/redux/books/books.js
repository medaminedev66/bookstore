const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_DATA = 'bookStore/books/FETCH_DATA';
const SEND_DATA = 'bookStore/books/SEND_DATA';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const fetchData = () => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mnWl6zWJHf5Fwk5ARAAR/books',
  );

  const json = await response.json();
  const entries = Object.entries(json);

  const books = entries.map((element) => ({
    item_id: element[0],
    title: Object.assign(...element[1]).title,
    category: Object.assign(...element[1]).category,
  }));

  dispatch({
    type: FETCH_DATA,
    payload: books,
  });
};

export const sendData = (book) => async (dispatch) => {
  fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mnWl6zWJHf5Fwk5ARAAR/books',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: book.item_id,
        title: book.title,
        category: book.category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  dispatch({
    type: SEND_DATA,
    payload: book,
  });
};

export const removeBook = (book) => async (dispatch) => {
  fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mnWl6zWJHf5Fwk5ARAAR/books/${book.item_id}`,
    {
      method: 'DELETE',
    },
  );
  dispatch({
    type: REMOVE_BOOK,
    payload: book,
  });
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case SEND_DATA:
      return [
        ...state,
        {
          item_id: action.payload.item_id,
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.item_id);
    default:
      return state;
  }
};

export default booksReducer;
