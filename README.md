# Anime Quote Generator


# Aniquote API
A random anime quote generator that generates random quotes from different anime series or movies.
Forked from https://github.com/jiashengc/anime-quote-generator

If you want to see it in action, check it out from https://github.com/Deivu/Haruna

# Usage
```
const a = require('./api/aniquote');

//prints out the quote
a.giveQuote();
```

## Interested in adding more quotes?
If you would like to contribute. Just submit a pull request on aniquote.js and I'll merge it once I checked it.

```
    {
        "quotenumber": <number>,
        "quotesentence": "",
        "quotecharacter": "",
        "quoteanime": ""
    },
```

Here's an example.
```
    {
        "quotenumber": 11,
        "quotesentence": "Poi!",
        "quotecharacter": "- Yuudachi",
        "quoteanime": "Kantai Collection"
    },
```

Copyright
This is contributed by Capuccino, and based from Deivu's old aniquote implementation.
