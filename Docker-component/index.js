import express from "express";
import validator from "validator";
import path from "path"; 
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); 


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); 
});

app.post("/validate-email", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const isValid = validator.isEmail(email);
  res.json({ email, isValid });
});

app.listen(PORT, () => {
  console.log(`Email Validator API running on port ${PORT}`);
});
