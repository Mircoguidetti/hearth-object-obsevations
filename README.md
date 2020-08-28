Hearth Object Observations
===
 
## Prerequisites

In order to download and run this application you'll need these programs:
- [Git](https://git-scm.com/)
- [Node.js >= 12.16.2](https://nodejs.org/en/)

## Get Started

1. Clone the repo

2. Run `npm run install-all`

3. Create a file inside the config directory  `cd server/config/` and call it  `dev.js`.
You need to export an object like this:

```js
    module.exports = {
        nasaApiKey: 'nasaApiKey'
    }
```

5. Run `npm run start` to start up the development environment

6. Head over to `localhost:3000` 



