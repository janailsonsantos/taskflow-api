import express from "express"

const app = express()
const PORT = 3333

app.use(express.json())

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})