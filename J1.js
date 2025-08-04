const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const dummyData = {
  name: "Abhishek Pradhan",
  referralCode: "abhishek2025",
  donations: 3500,
  rewards: [
    "Bronze Badge",
    "Exclusive Webinars Access",
    "T-shirt",
    "Certificate of Excellence"
  ],
  leaderboard: [
    { name: "Anjali", donations: 4800 },
    { name: "Abhishek Pradhan", donations: 3500 },
    { name: "Ravi", donations: 2900 }
  ]
};

app.get('/api/user', (req, res) => {
  res.json(dummyData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
