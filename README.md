# Color Browser

View and search color swatches

Initially branded for a demo with Helpful Human

## Currently features
- Backend
  - Customizable script that automatically generates an evenly distributed spectrum of colors based on env specified hue and shade count.
  - Colors stashed in sqlite type approach "database" file for lightweight deployment.
  - GraphQL for standardized and lightweight query interface.
  - Query to fetch colors based on family

- Frontend
  - Result paging.
  - Detail page for each color
  - Button to automatically select a random color
  - Fully responsive design

- WIP
  - **Side navigation color family links** Add route and utilize existing color family query to display colors based on family
  - **Search input** Add query for searching colors and hook up to the search input
  - **Add tints/shades in detail view** Use the existing property on the color detail page's currently selected color object


## Install
```
cd server
touch .env
npm install
cd ../client
touch .env
npm install
```

You will need to add the url to where you've hosted the api as VITE_API_URL in the .env file in the client folder \
For example:
```
VITE_API_URL=http://localhost:5000
```

You can optionally add the desired number of hues and shades the app will use and whether this is a dev environment the .env file in the server folder \
For example:
```
DEV=true
HUES=36
SHADES=10
```

Navigate to the server folder and then run the db file init script to generate the colors.js file in the server/db folder

### `npm run db`

Rerun this anytime you change the hues and shades in your .env file
