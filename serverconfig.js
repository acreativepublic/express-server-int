



// [START app]
const path = require('path');
const express = require('express');

module.exports = {

server: function () {
const app = express(),
            DIST_DIR = __dirname + '/dist',
            HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})
// [END app]
}
}
