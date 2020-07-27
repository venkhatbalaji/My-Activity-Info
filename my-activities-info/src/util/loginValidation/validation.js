export const isValid = (userName, password) => {
    if (userName && password) {
        if (userName.toLowerCase() === 'venkhat' && password.toLowerCase() === 'venkhat') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}