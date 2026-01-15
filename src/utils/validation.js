const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

export const validateEmail = (email) => {
    if(!email) return "Email is required";
    if(!emailPattern.test(email)) return "Please enter valid email address";
    return "";
}

export const validatePassword = (password) => {
    if(!password) return "Password is required";
    if(!passwordPattern.test(password)) return "Invalid password format!";
    return "";
}

export const validateRegisterForm = ({name, email, password, confirmPassword}) => {
    const errors = {name: "", email: "", password: "", confirmPassword:""}
    if(!validateEmail(email)){
        errors.email = validateEmail(email);
    }
}