import { useRouter } from "next/router";
// layouts
import Container from "../layouts/Container";

export default function Redirect() {

    const router = useRouter()
    const dirtyData = router.asPath.split(/[&\/=]/)
    const data = {
        access_token: dirtyData[2],
        expires_in: dirtyData[4],
        user_id: dirtyData[6]
    }

    console.log(data)
    return (
        <Container>
            <div className="w-full h-full flex items-center justify-center">
                Auth in process...
            </div>
        </Container>
    )
}