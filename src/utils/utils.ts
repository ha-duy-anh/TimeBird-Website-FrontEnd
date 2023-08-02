import { NavigateFunction } from "react-router-dom"

export function hanldeNav(role : string, nav : NavigateFunction) {
    if (role.toLowerCase() === 'student') {
        nav('/student')
      } else if (role.toLowerCase() === 'superadmin') {
        nav('/admin')
    }
}
