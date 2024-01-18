import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";
import MyOrganization from "@/widgets/my-organization/my-organization";

export default function Home() {
    return (
        <>
            <Header />
            <MyOrganization />
        </>
    );
}
