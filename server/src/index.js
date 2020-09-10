const app = require("express")();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const compress = require("compression");
const cors = require("cors");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const postRoutes = require("./routes/post.route");
mongoose.connect("mongodb://localhost:27017/twitter-clone-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", postRoutes);
http.listen(4000, (err) => {
  if (err) {
    console.log(err);
  }

  console.info("Server started on port %s.", 4000);
});
