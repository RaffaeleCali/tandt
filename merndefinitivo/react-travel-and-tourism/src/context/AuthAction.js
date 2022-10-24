

export const LoginStart = (userCredential)=>({
    type:"LOGIN_START",
});
export const LoginSuccess = (user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
});
export const LoginFailure = ()=>({
    type:"LOGIN_FAILURE",
});
export const Follow = (userId) =>({
    type: "FOLLOW",
    payload: userId,
});
export const UnFollow = (userId) =>({
    type: "UNFOLLOW",
    payload:userId,
});
export const LogOut = ()=>({
    type:"LOGOUT",
});

