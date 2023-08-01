export interface AuthProp {
    setUser : (role : string|null) => void,
    unsetUser : () => void
}