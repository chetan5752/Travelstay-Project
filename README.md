# 🏠 Major Project: Airbnb Clone

A full-stack web application inspired by **Airbnb**, built using **Node.js**, **Express**, **MongoDB**, and **EJS** templating.  
This project enables users to create, view, and review listings, complete with authentication, image uploads (via Cloudinary), and map integration (via Mapbox).

---

## 🚀 Tech Stack

**Frontend:**
- HTML5, CSS3 (Custom styling)
- JavaScript (Vanilla JS)
- EJS templating engine

**Backend:**
- Node.js (v20.12.1)
- Express.js
- MongoDB (via Mongoose ODM)
- Cloudinary (for image storage)
- Mapbox SDK (for maps and location)

**Authentication & Security:**
- Passport.js (Local Strategy)
- Express-Session & Connect-Mongo
- Joi for server-side validation
- Connect-Flash for messaging

---

## 📂 Project Structure

```
├── .gitignore
├── app.js                  # Main entry point of the application
├── cloudConfig.js          # Cloudinary configuration
├── controllers/            # Route logic for listings, users, and reviews
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── init/
│   ├── data.js             # Sample data seeding
│   └── index.js            # Database initialization
├── middleware.js           # Custom Express middleware
├── models/                 # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/                 # Static files (CSS, JS)
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       ├── map.js
│       └── script.js
├── routes/                 # Express routers
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── schema.js               # Joi validation schemas
├── utils/                  # Utility files
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/                  # EJS templates
│   ├── error.ejs
│   ├── include/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layout/
│   │   ├── boilerplate.ejs
│   │   └── logo.png
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   └── users/
│       ├── login.ejs
│       └── signup.ejs
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/chetan5752/Travelstay-Project
cd Travelstay-Project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
MONGO_URL=mongodb://localhost:27017/airbnb-clone
SECRET=session_secret_key
```

### 4. Initialize Database (Optional)
To seed sample listings:
```bash
node init/data.js
```

### 5. Run the App
```bash
npm start
```

Then visit  
👉 `http://localhost:3000`

---

## 💡 Features

- 🧭 User authentication (Sign up, Login, Logout)
- 🏘️ Create, view, edit, and delete property listings
- 🗺️ Interactive map integration (Mapbox)
- 📷 Upload and manage listing images (Cloudinary)
- 💬 Add and manage reviews
- ⚠️ Flash messages and error handling
- 🧩 MVC project structure for scalability

---

## 🧰 Scripts

| Command | Description |
|----------|-------------|
| `npm start` | Start the server |
| `npm install` | Install dependencies |
| `nodemon app.js` | Run the main server |
| `node init/data.js` | Seed database with sample data |

---

## 📸 Screenshots (Optional)

You can include screenshots of:
- Homepage  
- Listing page  
- Map integration  
- Review system  

---

## 📜 License

This project is licensed under the **ISC License** — feel free to use and modify it as needed.

---
