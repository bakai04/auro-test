import { useRouter } from "next/router";
import React from "react";

import { REGISTRETION_STEPS } from "@/features/registration-progress/config";
import { useRegistrationSteps } from "@/shared/hook/use-registration-steps";
import { Icons } from "@/shared/ui";

import { PreviosButtonWrapper, Wrapper } from "./styled";

export const Header = () => {
  const router = useRouter();
  const isFirstPage = router.pathname.includes(REGISTRETION_STEPS[0].page);
  const { prevPage } = useRegistrationSteps();

  return (
    <Wrapper>
      {!isFirstPage && (
        <PreviosButtonWrapper onClick={prevPage}>
          <Icons.ArrowLeft />
        </PreviosButtonWrapper>
      )}
      <Icons.Logo />
    </Wrapper>
  );
};
