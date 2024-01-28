import { DateForm } from "@/features/date-form";
import { RegistrationProgress } from "@/features/registration-progress";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";

export default function Home() {
    return (
        <Layout>
            <Header />
            <RegistrationProgress />
            <DateForm />
        </Layout>
    );
}
