/** @format */

import {gql} from '@apollo/client';

const getBooks = gql`
   query getBooksQuery {
      books {
         name
         _id
      }
   }
`;

const getSingleBook = gql`
   query getSingleBookQuery($id: ID!) {
      book(_id: $id) {
         _id
         name
         genre
         author {
            _id
            name
            age
            books {
               _id
               name
            }
         }
      }
   }
`;

const getAuthors = gql`
   query getAuthorsQuery {
      authors {
         _id
         name
      }
   }
`;

export {getBooks, getSingleBook, getAuthors};
