import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { REGISTRETION_STEPS } from "@/features/registration-progress/config";

export const useRegistrationSteps = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const activePage = REGISTRETION_STEPS.find((step) =>
      router.pathname.includes(step.page),
    );
    setCurrentPage(activePage?.step || 1);
  }, [router]);

  const nextPage = () => {
    const nextSteps = REGISTRETION_STEPS.find(
      (step) => step.step === currentPage + 1,
    );
    router.push(nextSteps.page);
  };

  const prevPage = () => {
    const nextSteps = REGISTRETION_STEPS.find(
      (step) => step.step === currentPage - 1,
    );
    router.push(nextSteps.page);
  };

  return {
    nextPage,
    prevPage,
  };
};
