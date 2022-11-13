import { useEffect } from "react"
import $api from "../config"
// hooks
import useActions from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

export default function AuthWrapper({ children }: any) {
    const { isLoading } = useTypedSelector(state => state.user)

    const { setUser, setIsAuth } = useActions()

    useEffect(() => {
        (async () => {
            try {
                const res = await $api.get('https://jellyplainv2.herokuapp.com/auth')

                console.log(res)
            } catch (error) {
                
            }
        })()
    }, [])


    if (isLoading === "loading") {
        return <div>
            loading..
        </div>
    }
    

    return (
        <div>
            {children}
        </div>
    )
}