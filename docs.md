# Info about specific files:
 ## sanity-typgen.json
  this file is used to generate types for sanity documents and which will scan the application for all GROQ Queries and generate types for them.
  additionally, it will also use extract.json from command ```npx sanity@latest schema extract --path=./sanity/extract.json```
  and write ```types.ts``` and with other utility functions to make it easier to work with sanity documents.

  after that to generate : ```npx sanity@latest typegen generate ```
  so it will generate types for all the GROQ queries in the application.

  ## More about sanity stuff:
  -we fetch new posts from database using sanity's groq queries and then we use those posts to render them on the website.

  -by first visualizing the data in the vision tab in sanity studio, and then creating independently in our code, calling them in single line to see all those startups and even doing automatic type safety with the help of sanity-typgen.json.


