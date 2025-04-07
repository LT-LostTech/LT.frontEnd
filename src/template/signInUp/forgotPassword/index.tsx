import { useState } from "react"
import { SendEmail } from "./flow/sendEmail";
import { TypeCode } from "./flow/typeCode";
import { NewPassword } from "./flow/newPassword";

interface PasswordFlowProps {
    onComplete: () => void;
    position: string;
    displayPhoto: string
}

export function PasswordFlow({ displayPhoto, onComplete, position }: PasswordFlowProps) {
    const [step, setStep] = useState<"sendEmail" | "typecode" | "newPassword" | "landpage">("sendEmail");

    const handleChangeStep = (step: "sendEmail" | "typecode" | "newPassword" | "landpage") => {
        setStep(step);
    }
    
    if (step === "landpage") {
        onComplete();
    }

    return (
        <>
            {step === "sendEmail" && <SendEmail displayPhoto={displayPhoto} onClick={() => handleChangeStep("typecode")} position={position} />}
            {step === "typecode" && <TypeCode displayPhoto={displayPhoto} onClick={() => handleChangeStep("newPassword")} position={position} />}
            {step === "newPassword" && <NewPassword displayPhoto={displayPhoto} onClick={() => handleChangeStep("landpage")} position={position} />}
        </>
    );
}