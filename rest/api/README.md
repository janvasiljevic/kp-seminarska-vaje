# API Backend - KP

Made with NestJS and love <3.

## Example QPL query

```grapql
query {
  # Zanima nas par trgovin, njihova imena, inventory ipd.
  bookstores (take : 5, skip: 5){
    name
    createdAt
    bookInventory 
    {
      price
      book {
        ...BookFragment
      }
    }
    booksSold {
         book {
        ...BookFragment
      }
    }
    totalProfit
  }
  
  # Zanima nas, v katerih trgovinah so knjige prikazane
  books(take: 3) {
    ...BookFragment
    BookDisplay {
      bookStore {
        name
        email
        phoneNumber
      }
    }
  }
}

fragment BookFragment on Book {
  title
  authors
  averageRating
}
```
