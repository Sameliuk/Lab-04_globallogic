const fs = require("fs")
const pdf = require("html-pdf")

const html = fs.readFileSync("report.html", "utf8")

pdf.create(html).toFile("report.pdf", (err, res) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log("PDF created:", res.filename)
})
