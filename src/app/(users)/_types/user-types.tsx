export interface LoginActionProps {
    userEmail: string,
    userPassword: string,
}

export interface SignupActionProps {
    userEmail: string,
    userPassword: string,
    userPasswordCheck: string,
    userFirstName: string,
    userLastName: string,
}