# AfterHours Coding Exercises

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

There are 5 key folders within the **src** folder:

- components - Includes all components used to build site pages
- context - Contains reducer and context providers for global state management
- data - Stores data for table visualization
- pages - Three pages available: HiringManager dashboard, Offer pages, & Analytics
- utils - Contains parsing scripts to process JSON data and perform various filters

## Running the project

First, clone the project files with:

`git clone https://github.com/rop2000/afterhour-project.git`

Next, navigate into the root of the project directory. In here, run:

`npm install`

FInally, to run a local instance of the site, run:

`npm run start`

This runs the app in the dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Exploring Pages

### HiringManager & Offer Page

Here you can create an offer with all relevant information. An offer card will generate with a shareable link. This link goes to an Offer page that an employee would visit to view info about their offer.

### Analytics Page

The analytics page is available at [http://localhost:3000/analytics](http://localhost:3000/analytics). This page loads information from a survey dataset into tabular form for easy viewing.

**Filter Instructions** -> The filter takes two arguments seperated by a colon. If you wanted to serach for all entries where Age was 35-44, you would filter search "Age:35-44" (without quotes).

## Improvements

Given the shorter time frame, there are optimizations that can be made to improve this codebase.
The efficiency of processing the JSON data could be improved with more complex parsing functions. Additonally, given an API or backend existed, offer storage and retrieval could be made persistent to exist across multiple sessions.
