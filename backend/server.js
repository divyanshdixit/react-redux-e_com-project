const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

app.use(jsonServer.defaults());
// app.use(jsonServer.bodyParser());

// rewrite routes
app.use(auth.rewriter(require("./routes.json")));

// Enable auth
app.use(auth);

// to get the user:

// app.get("/profile", (req, res) => {
//   console.log(req.user);
//   if (!req.user) {
//     return res.status(401).json({
//       message: "Token valid but user not attached",
//     });
//   }
//   const userId = req.user.sub;
//   console.log(userId);
//   const email = req.user.email;
//   const user = app.db.get("users").find({ email }).value();

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   return res.status(200).json(user);
// });

// get all users:

// Get all users
// app.get("/users", (req, res) => {
//   const users = app.db.get("users").value();
//   res.json(users);
// });

// app.use("/products", (req, res, next) => {
//   if (req.method === "GET") return next();

//   if (!req.headers.authorization) {
//     return res.status(401).json({ message: "Missing token" });
//   }
//   next();
// });

// crud router:
app.use(router);

app.listen(8000, () => {
  console.log("🚀 Backend running at http://localhost:8000");
});

// /refresh-token
