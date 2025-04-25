function formatData(data) {
    return JSON.stringify(data, null, 2);
}

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

module.exports = { formatData, formatDate }; 