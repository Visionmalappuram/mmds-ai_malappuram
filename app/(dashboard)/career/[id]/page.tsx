import { careerJourneys } from "@/lib/careerJourneys";
import ScrollTimeline from "./ScrollTimeline"; // Importing your new Client Component

export default async function CareerJourneyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const career = careerJourneys[id as keyof typeof careerJourneys];

  if (!career) {
    return (
      <main className="p-10 text-white">
        Career not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="uppercase tracking-[0.2em] text-slate-500 mb-4">
          Career Journey
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Become a {career.title}
        </h1>

        <p className="text-slate-400 mb-12">
          {career.description}
        </p>

        {/* Using the new interactive timeline and passing the data to it */}
        <ScrollTimeline timeline={career.timeline} />

      </div>
    </main>
  );
}