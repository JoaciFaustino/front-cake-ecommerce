<p id="title" align="center">
  <a href="#title" style="overflow: hidden;">
    <img width="80" height="80" style="border-radius: 999px;" src="./public/images/logo-readme.png">
  </a>
  <h1 align="center" style="font-weight: bold;">Cake E-commerce</h1>
</p>

<p align="center">
  <a href="#features">Features</a> • 
  <a href="#technologies">Technologies</a> • 
  <a href="#started">Getting Started</a> • 
  <a href="#usage">Usage</a> • 
  <a href="#support">Support</a> • 
  <a href="#license">License</a>
</p>

<p align="center">
  <b>Cake E-commerce is a platform designed to manage a fictional online cake store, inspired by the world of confectionery. This project was born from a mix of curiosity and personal connection, making it both a learning experience and a tribute to the art of baking. 👨‍🍳🍰</b>
</p>

<h2 id="features">✨ Features</h2>

- 🛍️ Product Management – Intuitive and easy-to-use pages for creation, update, and deletion of cakes, as well as management of cake types, categories, frostings, and fillings. All routes are properly protected so that only admins can access them.

- 🔍 Menu - A full menu page listing all cakes for sale, with pagination, search, and multiple sorting and filtering options.

- 🛒 Order Management – Management of delivery dates and order statuses with advanced filtering and sorting options. Admin users have full order visibility, while individual users can access their own. This system focuses on order management and does not include payment features.

- 👤 User Authentication – Registration, login, and protected route handling using JWT (JSON Web Tokens), with role-based access control to manage sessions and restrict access to specific routes.

- 🎨 Cake customization - A dedicated page where clients can customize each cake according to its own specific rules before the purchase.

- 📦 Cart System – Add, remove, and update items in the shopping cart.

<h2 id="technologies">🧪 Technologies</h2>

This project was developed with the following technologies:

- [Next](https://nextjs.org/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)

Project Dependencies:

- [@hookform/resolvers](https://react-hook-form.com/)
- [@uidotdev/usehooks](https://usehooks.com/)
- [axios](https://axios-http.com/)
- [next](https://www.npmjs.com/package/next)
- [nuqs](https://nuqs.47ng.com/)
- [react](https://www.npmjs.com/package/react)
- [react-currency-mask](https://www.npmjs.com/package/react-currency-mask)
- [react-datepicker](https://www.npmjs.com/package/react-datepicker)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-dropzone](https://react-dropzone.js.org/)
- [react-hook-form](https://react-hook-form.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [sharp](https://www.npmjs.com/package/sharp)
- [use-mask-input](https://www.npmjs.com/package/use-mask-input)
- [zod](https://zod.dev/)

Dev Dependencies:

- [@types/node](https://www.npmjs.com/package/@types/node)
- [@types/react](https://www.npmjs.com/package/@types/react)
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
- [sass](https://www.npmjs.com/package/sass)
- [typescript](https://www.npmjs.com/package/typescript)

<h2 id="started">🚀 Getting started</h2>
<h3>Prerequisites</h3>

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com)

<h3>API</h3>

Clone, install, and run the API by following the instructions in this repository: [api-cake-ecommerce](https://github.com/JoaciFaustino/api-cake-ecommerce?tab=readme-ov-file#-getting-started). Once the API is running locally, set the `API_PROTOCOL`, `API_HOST`, and `API_PORT` variables in your `.env.local` file. (see the section [Config .env variables]("#env-config"))

<h3>Cloning</h3>

To clone the project, follow the steps below:

```bash
# Clone the project
$ git clone https://github.com/JoaciFaustino/front-cake-ecommerce.git

# Access the project folder
$ cd front-cake-ecommerce
```

<h3 id="env-config">Config .env variables</h3>

Use the `.env.local.example` file as a reference to create your own `.env.local` configuration file in the root of the project.

- **`API_PROTOCOL`**: The protocol used by your API.
- **`API_HOST`**: The host of your API.
- **`API_PORT`**: The HTTP port of your API.

<h3>Starting</h3>

To run it, follow the steps below:

```bash
# Install dependencies
npm install

# Run the project
npm run dev
```

<h2 id="usage">💡 Usage</h2>

- To access the admin dashboard pages:

  1. Go to the `/login` route and log in using the credentials below:  
     ![credentials](/public/images/credentials.png)

  2. After logging in, click the user profile icon in the header, then select **"Admin Dashboard"**:  
     ![dashboard tutorial image](/public/images/dashboard-tutorial.png)

<h2 id="support">💖 Support</h2>

To morally and mentally support the project, make sure to leave a ⭐️!

<h2 id="license">📃 License</h2>

This project is under [MIT](./LICENSE) license
