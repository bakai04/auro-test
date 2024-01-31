import { useParams } from "next/navigation";
import React, { useMemo } from "react";

import { RegistrationProgress } from "@/features/registration-progress";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";

import { REGISTRETION_PROCCESS } from "./registration-proccess";

const Palmistry = () => {
  const params = useParams();

  const currentStep = useMemo(() => {
    return REGISTRETION_PROCCESS.find((step) =>
      step.page.includes(params?.step as string),
    );
  }, [params]);

  return (
    <Layout>
      <Header />
      <RegistrationProgress
        page={currentStep?.step || 0}
        percent={(currentStep?.step || 0) * 11}
      />
      {currentStep?.component}
    </Layout>
  );
};

export default Palmistry;
