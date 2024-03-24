# Progress of profile creation of the user

## Motivation

This is a technical assesntment for Frontend Engineer role at [Lodgify](https://www.lodgify.com)

- Task Description - [here](https://lodgify.notion.site/Lodgify-FE-Technical-Challenge-65599fbea9d9436794e12f62d6542c3b)
- Design mockup - [here](https://www.figma.com/file/0HPjyMf6r4ljGKGe4RgqZ3/Accordion-Challenge?type=design&node-id=0-1&mode=design)
- API endpoint to fetch data - [here](https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress)

## Development Notes


I avoided using Next.JS features such as server actions and server components. That's why I added `use client` tag on top of `app/page.tsx` to render the page as SPA.

This technical task primarily emphasizes coding skills and implementation rather than branching strategies. As such, no specific branching strategy is applied, and the default branch is `main`.

## Description

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Next.JS is a full-stack React framework and it's [one of the recommended tools](https://react.dev/learn/start-a-new-react-project) to create a new React application. 


## Running the application

To run the application, you can use the provided scripts. Before proceeding, please ensure you have Node.js version `20.10` installed on your system.

### Development

For development purposes, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the root directory of the project.
3. Run the following command:

```bash
npm install
npm run dev
```

This command will start the development server using Next. The application will be served on port `3000` by default. If port 3000 is already in use, the server will attempt to use port 3001, and so on.

### Linting

To lint TypeScript files, ensuring code quality and adherence to coding standards, run:

```bash
npm install
npm run lint
```

This command will use ESLint to analyze TypeScript files with the specified configurations.

### Building the Application

If you need to build the application for production, you can use the following command:

```bash
npm install
npm run build
```

The production-ready assets will be generated in the `.next` directory.


### Previewing the Production Build

After building the application, you may want to preview the production build locally. You can achieve this by running:

```bash
npm install
npm run start
```

This command will serve the production build locally, allowing you to preview the application as it would appear in a production environment. The application will be served on port `3000` by default. If port 3000 is already in use, the server will attempt to use port 3001, and so on.