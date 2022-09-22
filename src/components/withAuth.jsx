import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"


export default function withAuth(Component) {
    return function ( props ) {
        const { login, setLogin } = useContext(AuthContext);

        return (
            <Component login={login} setLogin={setLogin} {...props} >
            </Component>
        )
    }
}