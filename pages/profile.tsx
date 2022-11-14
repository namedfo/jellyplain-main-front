// components
import Header from "../components/Header";
import Sidebar from "../components/profile/Sidebar";
import { useTypedSelector } from "../hooks/useTypedSelector";
// layouts
import Container from "../layouts/Container";

export default function Profile() {

    const { isAuth } = useTypedSelector(state => state.user)

    return (
        <Container>
            <Header />
            <div className="pt-0 sm:pt-[50px] h-full">
                {isAuth && (
                    <Sidebar />
                )}
            </div>
        </Container>
    )
}