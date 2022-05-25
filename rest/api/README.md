# API Backend - KP

Made with NestJS and love <3.

## Example QPL query

```gql
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

subscription {
  bookSold {
    id
    book {
      authors
      title
    }
  }
}


mutation {
  sellInventory(
    bookStoreId: "cl3kj6ejg1040jzocm64enjbx"
    sellerName: "Dummy"
    sellerSurname: "DummySurname"
    inventoryId: "cl3kj6em61342jzocjc3ay5nu"
  ) {
    name
    totalProfit
  }
}
```
