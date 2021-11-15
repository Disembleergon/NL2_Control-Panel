const PORT = 4641;

const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const robot = require("robotjs");

// pressed button on control panel => button on keyboard
const actions = JSON.parse(fs.readFileSync("./actions.json").toString());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the NL2 Control Panel server!<br/>Have fun!</h1>");
});

app.post("/", (req, res) => {
  if (req.body.connectionTest) {
    console.log("Client connected.");
    return res.sendStatus(200);
  }

  robot.keyTap(actions[req.body.action]);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  // get ip-adress
  let ip = Object.values(require("os").networkInterfaces())
    .flat()
    .filter(
      ({ family, internal, address }) =>
        family === "IPv4" && !internal && address.includes("192.168")
    )
    .map(({ address }) => address);

  ip = ip[ip.length-1];

  console.log(`Server listening on port ${PORT}`);
  console.log(`IP-adress: ${ip}`);
  console.log(`website: ${ip}:3000`);
});
