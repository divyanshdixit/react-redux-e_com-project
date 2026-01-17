const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

app.db = router.db;

app.use(jsonServer.defaults());
app.use(jsonServer.bodyParser);

// rewrite routes
app.use(auth.rewriter(require("./routes.json")));

// Enable auth
app.use(auth);

// crud router:
app.use(router);

// register user:

// app.post("/register", (req, res) => {
//   const { email, password, name } = req.body;

//   if (!email || !password || !name) {
//     return res.status(400).json({
//       message: "Name, email and password are required"
//     });
//   }

//   const users = app.db.get("users").value();

//   const userExists = users.find((u) => u.email === email);
//   if (userExists) {
//     return res.status(409).json({
//       message: "User already exists"
//     });
//   }

//   const newUser = {
//     id: Date.now(),
//     name,
//     email,
//     password
//   };

//   app.db.get("users").push(newUser).write();

//   return res.status(201).json({
//     message: "User added successfully!",
//     user: newUser
//   });
// });

// for login user:
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = app.db
//     .get("users")
//     .find({ email, password })
//     .value();

//   if (!user) {
//     return res.status(401).json({
//       message: "Invalid email or password"
//     });
//   }

//   // json-server-auth will auto-generate token
//   res.json({
//     accessToken: auth.sign({ email: user.email }, app.get("secret")),
//     user
//   });
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



app.listen(8000, () => {
  console.log("🚀 Backend running at http://localhost:8000");
});


// /refresh-token