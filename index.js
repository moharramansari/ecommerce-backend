const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoute");
const blogRoute = require("./routes/blogRoute");
const productCategoryRoute = require("./routes/prodCategoryRoute");
const blogCategoryRoute = require("./routes/blogCatRoute");
const brandRoute = require("./routes/brandRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/blog", blogRoute);
app.use("/api/category", productCategoryRoute);
app.use("/api/blogcategory", blogCategoryRoute);
app.use("/api/brand", brandRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening at the PORT ${PORT}`);
});
