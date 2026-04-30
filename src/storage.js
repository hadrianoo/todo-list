function getLocalStorage(key) {
    if (localStorage.getItem(key) !== null) {
        const raw = localStorage.getItem(key);
        return JSON.parse(raw);
    }
};

function setLocalStorage(key, value) {
    const string = JSON.stringify(value);
    localStorage.setItem(key, string);
};

export { getLocalStorage, setLocalStorage };