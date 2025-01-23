  
export   const checkValidData =(email,password) =>{
    const isEmailValid= /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const isPasswordValid= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()-+=])(?=\S+$).{8,20}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}