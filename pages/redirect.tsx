import { useRouter } from "next/router";
// layouts
import Container from "../layouts/Container";

export default function Redirect() {

    const router = useRouter()
    console.log(router.asPath.split("=").join().split("&"))
    return (
        <Container>
            <div className="w-full h-full flex items-center justify-center">
                Auth in process...
            </div>
        </Container>
    )
}