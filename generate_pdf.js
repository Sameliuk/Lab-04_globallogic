const fs = require("fs")
const puppeteer = require("puppeteer")

;(async () => {
    const html = fs.readFileSync("report.html", "utf8")
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] })
    const page = await browser.newPage()

    await page.setContent(html, { waitUntil: "networkidle0" })
    await page.pdf({ path: "report.pdf", format: "A4" })

    await browser.close()
    console.log("PDF successfully created.")
})()
