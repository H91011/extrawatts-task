function cardQuery(first, skip = 0) {
  return JSON.stringify({
    query: `  
    {
        cardEntities(first: ${first} skip: ${skip}) {
            id
            image
            category_id
            description
        }

        categoryEntities {
            id
            name
        }  
    }
  `,
  });
}

export { cardQuery };
