export const checkValidData = (email,password)=>{
	
const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const isValidPassword =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

if(!isValidEmail) return "Email is not correct";

if(!isValidPassword) return "password is not correct";

return null;
}