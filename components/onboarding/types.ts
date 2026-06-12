export interface OnboardingData {
  // Step 1
  firstName: string;
  lastName: string;
  className: string;
  school: string;
  language: "English" | "Malayalam";

  // Step 2
  interests: string[];

  // Step 3
  hobbies: string[];

  // Step 4
  careerGoals: string[];

  // Step 5
  dreamGoal: string;
  weeklyHours: string;
}