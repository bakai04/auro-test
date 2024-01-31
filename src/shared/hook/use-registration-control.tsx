import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// eslint-disable-next-line import/no-cycle
import { REGISTRETION_PROCCESS } from "../constant/registration-proccess";

export const useRegistrationSteps = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const activePage = REGISTRETION_PROCCESS.find((step) =>
      step.page.includes(params?.step as string),
    );
    setCurrentPage(activePage?.step || 0);
  }, [params]);

  const nextPage = () => {
    const nextStep = REGISTRETION_PROCCESS.find(
      (step) => step?.step === currentPage + 1,
    );
    router.push(nextStep?.page || "");
  };

  const prevPage = () => {
    const prev = REGISTRETION_PROCCESS.find(
      (step) => step?.step === currentPage - 1,
    );
    router.push(prev?.page || "");
  };

  return {
    nextPage,
    prevPage,
  };
};
