"use strict";

const express = require("express");
const axios = require("axios");
const handlebars = require("handlebars");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
require("dotenv").config();

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World from NodeJS",
    env: process.env,
  });
});

app.get("/pdf", async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/url-to-pdf`,
      {
        url: "https://mauju-invoice-staging.herokuapp.com/pdf/iT5u5sQgcv",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
        responseType: "arraybuffer",
      }
    );

    const pdf = response.data;

    res.contentType("application/pdf");
    res.send(pdf);
  } catch (error) {
    console.log(error);

    res.json(error);
  }
});

app.get("/png", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "receipt.html");
    const source = fs.readFileSync(filePath, "utf-8").toString();
    const template = handlebars.compile(source);
    const html = template({
      date: moment("2022-09-01T00:00:00.000Z").format("Do MMMM YYYY"),
      time: moment("2022-09-01T00:00:00.000Z").format("h:mm:ss a"),
      payment_amount: "$10000",
      payment_metode: "BRI",
      total_transactions: `$10000`,
      reference_id: "dahbdahjbd",
      note: "sdauydsagsu",
    });

    const response = await axios.post(
      `${process.env.API_URL}/html-to-png`,
      {
        html,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "image/png",
        },
        responseType: "arraybuffer",
      }
    );

    const png = response.data;

    res.contentType("image/png");
    res.send(png);
  } catch (error) {
    console.log(error);

    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
