import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import logo from "@/assets/images/Leo-iconAU.png";
import { REGISTRETION_PROCCESS } from "@/shared/constant/registration-proccess";
import { useRegistrationSteps } from "@/shared/hook/use-registration-control";
import { Icons } from "@/shared/ui";

import { PreviosButtonWrapper, Wrapper } from "./styled";

export const Header = () => {
  const router = useRouter();
  const isFirstPage = router.pathname.includes(
    REGISTRETION_PROCCESS[0]?.page as string,
  );
  const { prevPage } = useRegistrationSteps();

  return (
    <Wrapper>
      {!isFirstPage && (
        <PreviosButtonWrapper onClick={prevPage}>
          <Icons.ArrowLeft />
        </PreviosButtonWrapper>
      )}
      <Image src={logo} height={"70"} alt={logo} />
    </Wrapper>
  );
};
