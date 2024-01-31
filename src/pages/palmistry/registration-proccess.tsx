import Birthday from "@/features/registration-steps/birthday";
import ColorYouLike from "@/features/registration-steps/color-you-like";
import Decisions from "@/features/registration-steps/decisions";
import Gender from "@/features/registration-steps/gender";
import GuidancePlan from "@/features/registration-steps/guidance-plan";
import PalmsHold from "@/features/registration-steps/palms-hold";
import RelationshipStatus from "@/features/registration-steps/relationship-status";
import ResonatedElement from "@/features/registration-steps/resonated-element";
import Welcome from "@/features/registration-steps/welcome";
import Wish from "@/features/registration-steps/wish";

export const REGISTRETION_PROCCESS = [
  {
    page: "/palmistry/welcome",
    component: <Welcome />,
    step: 0,
  },
  {
    page: "/palmistry/gender",
    component: <Gender />,
    step: 1,
  },
  {
    page: "/palmistry/birthday",
    component: <Birthday />,
    step: 2,
  },
  {
    page: "/palmistry/palms-hold",
    component: <PalmsHold />,
    step: 3,
  },
  {
    page: "/palmistry/wish",
    component: <Wish />,
    step: 4,
  },
  {
    page: "/palmistry/relationship-status",
    component: <RelationshipStatus />,
    step: 5,
  },
  {
    page: "/palmistry/resonated-element",
    component: <ResonatedElement />,
    step: 6,
  },
  {
    page: "/palmistry/color-you-like",
    component: <ColorYouLike />,
    step: 7,
  },
  {
    page: "/palmistry/decisions",
    component: <Decisions />,
    step: 8,
  },
  {
    page: "/palmistry/guidance-plan",
    component: <GuidancePlan />,
    step: 9,
  },
];
