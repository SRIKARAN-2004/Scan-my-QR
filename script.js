// Initialize html5-qrcode for camera scan
function onScanSuccess(decodedText, decodedResult) {
  document.getElementById('result').innerText = `Scanned Code: ${decodedText}`;
}

function onScanError(errorMessage) {
  // Optional: console.log(errorMessage);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", 
  { fps: 10, qrbox: 250 },
  /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanError);

// Image upload scanning
document.getElementById('qr-input-file').addEventListener('change', function(e) {
  if (e.target.files.length == 0) return;

  const file = e.target.files[0];
  const html5QrCode = new Html5Qrcode(/* element id */ "reader");

  html5QrCode.scanFile(file, true)
    .then(decodedText => {
      document.getElementById('upload-result').innerText = `Scanned from Image: ${decodedText}`;
    })
    .catch(err => {
      document.getElementById('upload-result').innerText = `Error: ${err}`;
    });
});
