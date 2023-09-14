import PDFParser from "pdf2json";

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", (errData) =>
  console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
  console.log("PDF text:", pdfParser.getRawTextContent());
});

pdfParser.loadPDF("./lorem-ipsum.pdf");
