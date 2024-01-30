import React from "react";

import { RegistrationProgress } from "@/features/registration-progress";
import { Wrapper } from "@/pages/palmistry/styled";
import { Button, Text } from "@/shared/ui";
import Flex from "@/shared/ui/flex/Flex";
import { Header } from "@/widgets/header";
import { Layout } from "@/widgets/layout";

const Gender = () => {
  // // Используйте useState для отслеживания выбранного пола
  // const [gender, setGender] = useState(1);
  //
  // // Используйте useEffect для чтения значения из локального хранилища при загрузке компонента
  // useEffect(() => {
  //     // Получите текущее состояние из localStorage
  //     const currentState = JSON.parse(localStorage.getItem('state')) || { state: {} };
  //
  //     // Установите значение пола из локального хранилища или оставьте его пустым
  //     if (currentState && currentState.state && currentState.state.gender !== undefined) {
  //         setGender(currentState.state.gender || 1);
  //     }
  // }, []);
  // // Пустой массив зависимостей гарантирует, что useEffect выполнится только при монтировании компонента
  //
  // const handleButtonClick = (selectedGender) => {
  //     // Получите текущее состояние из localStorage
  //     const currentState = JSON.parse(localStorage.getItem('state')) || { state: {} };
  //
  //     // Обновите состояние с выбранным полом
  //     currentState.state.gender = selectedGender;
  //
  //     // Сохраните обновленное состояние в localStorage
  //     localStorage.setItem('state', JSON.stringify(currentState));
  //
  //     // Обновите состояние с выбранным полом
  //     setGender(selectedGender);
  // };

  return (
    <Layout>
      <Header />
      <RegistrationProgress page={1} percent={11} />
      <Wrapper>
        <Flex
          justifyContent={"center"}
          gap={"24px"}
          flex={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text variant={"heading1"} color={"midnightBlack"}>
            What’s your gender?
          </Text>
          <Text
            variant={"caption2"}
            textCenter
            color={"midnightBlack"}
            lineHeight={"line28"}
          >
            In Palmistry, everyone is a blend of masculine and feminine, so it
            helps to know yours.
          </Text>
          <Flex
            justifyContent={"center"}
            gap={"12px"}
            flex={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            {/* Передайте соответствующий пол в функцию handleButtonClick */}
            <Button type="button">Male</Button>
            <Button type="button">Female</Button>
          </Flex>
        </Flex>
      </Wrapper>
    </Layout>
  );
};

export default Gender;
