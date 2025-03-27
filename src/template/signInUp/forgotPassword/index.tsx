import { useState } from "react"
import { SendEmail } from "./flow/sendEmail";
import { TypeCode } from "./flow/typeCode";
import { NewPassword } from "./flow/newPassword";

interface PasswordFlowProps {
    onComplete: () => void;
}

export function PasswordFlow({ onComplete }: PasswordFlowProps) {
    const [step, setStep] = useState<"sendEmail" | "typecode" | "newPassword" | "landpage">("sendEmail");

    const handleChangeStep = (step: "sendEmail" | "typecode" | "newPassword" | "landpage") => {
        setStep(step);
    }
    
    if (step === "landpage") {
        onComplete();
    }

    return (
        <>
            {step === "sendEmail" && <SendEmail onClick={() => handleChangeStep("typecode")} />}
            {step === "typecode" && <TypeCode onClick={() => handleChangeStep("newPassword")} />}
            {step === "newPassword" && <NewPassword onClick={() => handleChangeStep("landpage")} />}
        </>
    );
}