import app from "./app.js";
import cloudinary from "cloudinary";
import cors from "cors"; // Import CORS middleware

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Enable CORS for the server
app.use(
  cors({
    origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO], // Allowed frontend URLs
    methods: ["GET", "POST", "DELETE", "PUT"], // Allowed HTTP methods
    credentials: true, // Include credentials in requests
  })
);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
