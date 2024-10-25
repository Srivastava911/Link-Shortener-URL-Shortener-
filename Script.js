document.getElementById('shortenBtn').addEventListener('click', function() {
    const fullUrl = document.getElementById('fullUrl').value;
    if (!fullUrl) {
        alert('Please enter a URL.');
        return;
    }
    const shortCode = Math.random().toString(36).substring(2, 8);
    const shortUrl = `${window.location.origin}/${shortCode}`;
    document.getElementById('output').innerHTML = `
        Shortened URL: <a href="${fullUrl}" id="shortUrl" target="_blank">${shortUrl}</a>
    `;
    const urlMapping = {
        shortCode: fullUrl
    };

    console.log("Mapping: ", urlMapping);
});
