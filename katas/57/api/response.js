const { formatData } = require('../utils/format');

function handleResponse(res) {
    const data = res.data;
    return formatData(data);
}

module.exports = { handleResponse }; 