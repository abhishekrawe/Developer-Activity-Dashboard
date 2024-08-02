# Project Name

## Overview

This project provides a dashboard to visualize developer activity data using React, TypeScript, and Vite.
The dashboard presents metrics such as task completions, PR changes, open PRs, and total PRs. 
It is designed to be modular, maintainable, and scalable by following best engineering practices.

## 🎊Some Glimpse of the App🎊

https://github.com/user-attachments/assets/9e6a260c-70fe-40a9-a42f-9a26bbdddf62

## Tech Stack

- **ReactJS**: For building the user interface.
- **TypeScript**: For static type checking and enhanced development experience.
- **SCSS**: For advanced styling and theming.
- **React Router**: For handling routing within the application.


## Project Setup

### 1. Adding JSON Data

- Place your JSON data file in the `public` folder. This data represents various metrics of developer activities.

### 2. Creating Services

- **Services**: Create services for handling data operations. This project includes `dataServices` and `userServices`. Although data is currently static, these services are structured to allow easy integration with APIs in the future.

### 3. Code Structure

- **Services**: Contains logic for fetching and managing data.
  - `dataServices.ts`
  - `userServices.ts`

- **Components**: Modular components for building the UI.
  - `Cards/`
  - `Charts/`
  - `Shared/`

- **Constants**: Store constant data and configurations.
  - `cardDetails.ts`
  - `iconsDetails.ts`
  - `insight.ts`

- **Utils**: Common utility functions for various operations.
  - `totalCalculation.ts`
  - `chartData.ts`
  - `cardData.ts`

- **Store**: State management using Redux.
  - `store.ts`
  - `theme.slice.ts` (handles dark/light mode functionality)

### 4. Styling

- **SCSS**: Styling is managed using SCSS. The structure mirrors the component organization for consistency.
  - `styles/`
    - `components/`
      - `Cards/`
      - `Charts/`
      - `Dashboard/`
      - `Shared/`
    - `global.scss` (defines colors, font sizes, and global styles)
    - `utils.scss` (provides utilities for layout, flexbox, grid, responsiveness)

### 5. TypeScript Interfaces

- **Interfaces**: Define the structure of data and props used in the project.
  - `components/`
    - `Card.ts`
  - `utils/`
    - `total.ts`
    - `totalCalculation.ts`

## Getting Started

1. **Install Dependencies**: Run `npm install` or `yarn install` to install project dependencies.

2. **Start the Development Server**: Run `npm start` or `yarn run dev` to launch the development server with hot module replacement (HMR).

3. **Build the Project**: Run `npm run build` or `yarn build` to create a production build.

## Folder and File Structure

