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

export const validateForm = (name, phone, gender) => {
    const newErrors = {};
    if(name.trim().length < 2){
        newErrors.name = "Name must be at least 2 characters";
    }
    if(!/^[6-9]\d{9}$/.test(phone)){
        newErrors.phone = "Enter a valid 10-digit mobile number";
    }
    if (!gender) {
        newErrors.gender = "Please select gender";
    }

    return newErrors;

}