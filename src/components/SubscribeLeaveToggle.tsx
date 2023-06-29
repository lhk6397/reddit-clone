import { FC } from "react";
import { Button } from "./ui/Button";

interface SubscribeLeaveToggleProps {}

const SubscribeLeaveToggle: FC<SubscribeLeaveToggleProps> = ({}) => {
  const isSubsribed = false;
  return (
    <Button className="w-full mt-1 mb-4">
      {isSubsribed ? "Leave community" : "Join to post"}
    </Button>
  );
};

export default SubscribeLeaveToggle;
