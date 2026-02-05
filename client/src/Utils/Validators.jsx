import { isValidUsername } from "6pp";


export const UsernameValidator=(UserName)=>{
    if (!isValidUsername(UserName))
    return{isValid:false ,errorMessage:"UserName is Invalid"};
}