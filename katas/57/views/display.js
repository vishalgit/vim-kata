const { formatData } = require('../utils/format');

class DataView {
    render(rawData) {
        const formatted = formatData(rawData);
        document.getElementById('output').innerHTML = formatted;
    }
}

module.exports = DataView; 