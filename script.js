const portfolioURL = "https://portfolio-lovat-eta-40.vercel.app/";

const qr = new QRious({
  element: document.getElementById("qr"),
  value: portfolioURL,
  size: 250,
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const qrCanvas = document.getElementById("qr");
  const image = qrCanvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = image;
  link.download = "portfolio-qr.png";
  link.click();
});

document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(portfolioURL).then(() => {
    alert("Portfolio URL copied to clipboard!");
  });
});
