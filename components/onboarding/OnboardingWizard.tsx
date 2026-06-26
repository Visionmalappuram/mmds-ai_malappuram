"use client";

import { useState } from "react";
import { OnboardingData } from "./types";
import Step1Profile from "./steps/Step1Profile";
import Step3Interests from "./steps/Step3Interests";
import Step2Hobbies from "./steps/Step2Hobbies";
import Step4CareerGoals from "./steps/Step4CareerGoals";
import Step5DreamGoals from "./steps/Step5DreamGoals";
import Step6Completion from "./steps/Step6Completion";
import { useRouter } from "next/navigation";
export default function OnboardingWizard() {

  const router = useRouter();

  const [step, setStep] = useState(1);

  const [data, setData] = useState<OnboardingData>({
    firstName: "",
    lastName: "",
    className: "",
    school: "",
    language: "English",

    interests: [],
    hobbies: [],
    careerGoals: [],

    dreamGoal: "",
    learningStyle: "",
    learningBarrier: "",
  });

  const updateData = (
    newData: Partial<OnboardingData>
  ) => {
    setData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1Profile
            data={data}
            updateData={updateData}
          />
        );
        case 2:
            return (
                <Step2Hobbies
                data={data}
                updateData={updateData}
                />
            );
        case 3:
            return (
                <Step3Interests
                data={data}
                updateData={updateData}
                />
            );
        case 4:
            return (
                <Step4CareerGoals
                data={data}
                updateData={updateData}
                />
            );
        case 5:
            return (
                <Step5DreamGoals
                data={data}
                updateData={updateData}
                />
            );
        case 6:
            return (
              <Step6Completion
                data={data}
                onGoToPassport={() =>
                  router.push("/passport")
                }
              />
            );
            

      default:
        return (
          <div>
            <h2 className="text-2xl font-bold">
              Step {step}
            </h2>

            <p className="mt-2 text-white/60">
              This step will be built next.
            </p>
          </div>
        );
    }
  };

  return (
  <div className="w-full">
    <div className="mb-6">
      <p className="text-sm text-cyan-300">
        Step {step} of 6
      </p>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-cyan-400 transition-all duration-300"
          style={{
            width: `${(step / 6) * 100}%`,
          }}
        />
      </div>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      {renderStep()}
    </div>

    <div className="mt-8 flex items-center justify-between">
      <button
        onClick={prevStep}
        disabled={step === 1}
        className="rounded-xl border border-white/10 px-5 py-2 disabled:opacity-30"
      >
        Previous
      </button>

      {step !== 6 && (
        <button
          onClick={nextStep}
          className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-black"
        >
          Continue
        </button>
      )}
    </div>
  </div>
);
}