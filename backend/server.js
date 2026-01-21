const jsonServer = require("json-server");
const auth = require("json-server-auth");
const jwt = require('jsonwebtoken')

const app = jsonServer.create();
const router = jsonServer.router("db.json");

const JWT_SECRET = "secret"; // or use process.env.JWT_SECRET

app.set("secret", JWT_SECRET);

app.db = router.db;

app.use(jsonServer.defaults());
app.use(jsonServer.bodyParser);

// Enable auth
app.use(auth);

// rewrite routes
app.use(auth.rewriter(require("./routes.json")));


// crud router:
app.use(router);

app.listen(8000, () => {
  console.log("🚀 Backend running at http://localhost:8000");
});
