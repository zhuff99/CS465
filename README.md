# CS465
Full stack development 

Architecture

-Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
-Why did the backend use a NoSQL MongoDB database?

We used HTML, JavaScript, and Single Page Applications (SPA) in different ways for this project. Commonly, Express HTML and JavaScript are used with traditional multi-page applications in which the server renders HTML pages that go to the client, and JavaScript is only used on top of those to add interactivity. This usually results in a slow user experience because of frequent page reloads and more server load. 

SPAs use frameworks such as Angular. We used Angular in this MEAN stack and it can update the contents of a single HTML page on the fly according to actions by users without a need to jump back to the server for each refresh of the content. This makes everything within an application more dynamic and interactive for the user, as data can be retrieved asynchronously to help prevent a full-page reload, which could place an unnecessary demand on servers while reducing performance.

-How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
-Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and for machines to parse and generate. In contrast to JavaScript, a programming language used to create dynamic web content, JSON is just a form of data representation. (JSON.org) JSON unites the frontend and backend development because there is one format for exchanging data from the backend to the frontend: Backend data goes to the frontend in JSON format, and, similarly, it is also possible for the frontend to make a return to the backend in this same JSON format. A good example being our use of handlebars early on in the semester to create reusable webpage templates. 

Testing

Mainly for testing throughout the project we used POSTMAN to build our API. It allowed us to take advantage of the GET, POST, PUT, and DELETE methods. Earlty on in testing I ran into errors when trying to POST certain items. I had to debug my code and I found a small error in one of the TypeScript files. 

Reflection

I learned a ton from this class and it was a challenge for sure. A lot of it was written out and explained step by step but when you ran into problems you had to understand what you were doing to be able to find and fix the problem. Being able to upload each week to github and show progress will greatly benefit us in the future, showing potential employers that we have greated and tested a full stack project. 

