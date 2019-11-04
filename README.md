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
work to the repo layer.