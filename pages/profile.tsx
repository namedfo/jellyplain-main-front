// components
import Header from "../components/Header";
import Sidebar from "../components/profile/Sidebar";
// layouts
import Container from "../layouts/Container";

export default function Profile() {
    return (
        <Container>
            <Header />
            <div className="pt-[50px]">
                <Sidebar />
            </div>
        </Container>
    )
}