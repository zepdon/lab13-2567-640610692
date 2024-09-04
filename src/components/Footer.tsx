import { footerProps } from "@lib/types";

export default function Footer(PersonalInfo:footerProps) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright @ {PersonalInfo.year} {PersonalInfo.fullName} {PersonalInfo.studentId}</p>
    </div>
  );
}
