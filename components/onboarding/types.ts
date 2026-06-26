export interface OnboardingData {
  // Step 1
  firstName: string;
  lastName: string;
  className: string;
  school: string;
  language: "English";

  // Step 2
  hobbies: string[];

  // Step 3
  interests: string[];

  // Step 4
  careerGoals: string[];

  // Step 5
  dreamGoal: string;
  learningStyle: string;
  learningBarrier: string;
}