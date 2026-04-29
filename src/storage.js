function getLocalStorage(key) {
    return localStorage.getItem(key);
};

function setLocalStorage(key, value) {
    if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
    }
    localStorage.setItem(key, value);
};

export { getLocalStorage, setLocalStorage };