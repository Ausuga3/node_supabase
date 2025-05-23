function handleError(error) {
    console.error('Error:', error.message);
    return {
        success: false,
        message: error.message,
    };
}

function formatData(data) {
    return JSON.stringify(data, null, 2);
}

module.exports = {
    handleError,
    formatData,
};