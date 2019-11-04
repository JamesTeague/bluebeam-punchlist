# Bluebeam Punchlist Project

### Usage
Requirements
- yarn
- node

Install dependencies
```bash
$ yarn install
```

Build and run the project
```bash
$ yarn start
```

Build documentation
```bash
$ yarn docs
```

The documentation will be in the docs folder in each package.
The flow annotations should serve as documentation as well.

Due to time constraints on my end, I had to trade unit tests 
and production level documentation. There is no database but instead
a map in memory. Because of this, I was not able to actually separate reads
and writes the way I would have preferred. This would help in scaling if that
was ever a concern. 

I also left out allowing clients to be able to create projects and users.
Instead they were seeded into the maps. There are repository layers that
deal directly with the maps as if they were databases. Then on top of that
are service layers that would handle business logic and delegate the database
work to the repo layer. The API accepts GraphQL requests and responds with JSON
in the standard GQL format.

Adding the endpoints to allow for creation of users and projects ultimately should
not be that difficult to add. 

Example request to get Punch Items:

```graphql
query getPunchList {
  getPunchListByProjectId(projectId: "d3f83c2d-28f4-4747-b681-8ee433646b63") {
    id
    createdAt
    status
    subject
    project {
      id
      name
    }
    assignee {
      id
      email
      fullName
    }
  }
}
```

The above is a very basic query to get information but other parameters you can add include:
- status - To filter by status
- assigneeId - to filter by assignee
- skip - number of records to skip (paging, essentially)
- limit - number of records to return (page size)

The parameters are additive, meaning, if you used all of them you used parameters like 
```
skip: 5
limit: 5
status: OPEN
assigneeId: "feed-beef"
```

you should expect that you would get all open items assigned to that user, and skip the first 5. 
If there are 5 or fewer you should expect an empty array.

Should you desire to see more data added to try to test the limits of what I was able to do in the 
amount of time I had, there is a mutation to add items.
```graphql
mutation createPunchItem {
    createPunchItem(projectId: "d3f83c2d-28f4-4747-b681-8ee433646b63", subject: "test2", status: IN_PROGRESS) {
        success
    }
}
``` 

Add or change assignee on an item
```graphql
    mutation updatePunchItem {
        updatePunchItemAssignee(id: "1c7acf8d-c2cf-46f4-a417-557bb2371563",  assigneeId: "dca26e16-264b-45ed-bb35-6d48090f0f4b" ) {
            success
        }
    }
```

Change status on an item
```graphql
    mutation updatePunchItem {
        updatePunchItemStatus(id: "1c7acf8d-c2cf-46f4-a417-557bb2371563",  status: IN_PROGRESS ) {
            success
        }
    }
```

Valid project ids are 
- "cb712199-7a51-4d2f-a9ea-ab3f86353028"
- "d3f83c2d-28f4-4747-b681-8ee433646b63"

Valid assignee ids are
- "dca26e16-264b-45ed-bb35-6d48090f0f4b"
- "d3879060-b953-4d82-a38d-6037d5409af8"

Valid statuses are
- OPEN
- CLOSED
- IN_PROGRESS
- IN_REVIEW

Please contact me with questions. I will be happy to answer any inquiry you may have.
