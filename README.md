# Binance widget

<img src="./public/main.png" width="313" height="365" alt="widget">

Cryptocurrency prices in real-time
This is Svelte version of widget. ReactJS version avaliable [here](https://github.com/enemycnt/bi-widget)

### Built With

* [Svelte](https://svelte.dev/)
* [svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list)
* [Storeon](https://github.com/storeon/svelte)
* [Testcafe](https://devexpress.github.io/testcafe/)

### Prerequisites

To run the project correctly you need to install [yarn](https://classic.yarnpkg.com/en/docs/install/) and [chrome](https://www.google.com/chrome/) first


### Installing and running

A step by step series of examples that tell you how to get a development env running

Simply clone the repository

```
git clone git@github.com:enemycnt/bi-widget.git
cd bi-widget
```

then install dependencies

```
yarn install
```

and finally run the app in dev

```
yarn dev
```

## Building and running in production mode

To create an optimised version of the app:

```bash
yarn build
```

You can run the newly built app with `yarn start`.

## Running the tests

To run end to end tests you should run app in development mode

```
yarn start
```

then run in another terminal tab/window 

```
yarn e2e
```
It starts testcafe tool and tests category change and text search





