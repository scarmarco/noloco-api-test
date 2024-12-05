# Instructions

## Before running

- Clone the repo and run `npm install`

- Run `npm start` to start the API server

## Config

You can change the data sets URL on the config file `/src/config.ts` in case you want to use other dataset.

## Available endpoints

Using postman or any preferred tool you can request to the following endpoints:

- GET to `http://localhost:3000/schema` to retrieve the data schema

- POST to `http://localhost:3000/data` using the following body `{
"where": {
"fieldName": { "eq | gt | lt": value }
}
}`

- GET to `http://localhost:3000/data/:id` to fetch a single row by ID

## Technical explanation

I wanted to keep it as simple as posible so created a basic express server.

As future improvements to this I'd add:

- Pagination for `/data` endpoint.
- Caching for `/schema` endpoint.
- Keeping the fetched dataset in some kind of cache.
- In the `buildSchemaFromJSON` I assume there will be fields with no null data, it could be improved to agregate data from different data rows and derive the data type from it.
- I have used Typescript but haven't done much typing for time reasons, that could be improved into proper types.
- I kept all the routes in his own dir/file for a more modular approach.
- A service layer could be added so the dataset fetching could happen from different sources.

Hope it covers the test expectations, since I am more performant in the Frontend side. Thanks!
