import { DateForm } from "@/features/date-form";

export default function Birthday() {
  // useEffect(() => {
  //   const currentState = JSON.parse(localStorage.getItem("state") || "");
  //   if (!currentState) {
  //     const localState = {
  //       state: {
  //         funnel: "",
  //         routes: [
  //           "welcome",
  //           "gender",
  //           "birthday",
  //           "palms-hold",
  //           "wish",
  //           "relationship-status",
  //           "resonated-element",
  //           "color-you-like",
  //           "decisions",
  //           "guidance-plan",
  //           "scan-info",
  //           "upload",
  //           "scan-photo",
  //           "email",
  //           "subscription-plan",
  //           "paywall",
  //         ],
  //         relationship: 2,
  //         gender: 2,
  //         name: "",
  //         birthday: {
  //           year: {
  //             value: "",
  //             displayValue: "",
  //           },
  //           month: {
  //             value: "",
  //             displayValue: "",
  //           },
  //           day: {
  //             value: "",
  //             displayValue: "",
  //           },
  //         },
  //         photoData: null,
  //         emailUser: "",
  //         gtagClientId: null,
  //         planCodeData: {
  //           planCode: "",
  //           count: 0,
  //         },
  //         wish: 1,
  //         resonatedElement: "",
  //         colorYouLike: "",
  //         decision: "",
  //       },
  //       version: 0,
  //     };
  //     localStorage.setItem("state", JSON.stringify(localState.state));
  //   }
  // }, []);
  return <DateForm />;
}
