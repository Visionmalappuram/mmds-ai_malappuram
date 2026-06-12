import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { buddyMessages } from "@/lib/buddy";

export default function AIBuddyPage() {
  return (
    // FIX 1: Changed px-12 to px-4 md:px-12 for proper mobile spacing
    <main className="min-h-screen bg-[#0A0A0F] text-white px-4 md:px-12 py-10 relative z-0 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="relative max-w-[1200px] mx-auto">
        
        {/* Decorative Lights */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-purple-600/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-60 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

        {/* FIX 2: The Two-Column Desktop Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start pt-8 lg:pt-16">
          
          {/* Left Column: Header */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-20">
            <p className="uppercase tracking-[0.2em] text-[#8B8D98] text-xs sm:text-sm font-semibold mb-3">
              AI BUDDY
            </p>

            <h1
              className="
                text-[40px]
                sm:text-[48px]
                md:text-[56px]
                leading-[1.1]
                font-bold
                tracking-tight
                text-white
                mb-6
              "
            >
              Always-on.<br className="hidden lg:block" /> Always yours.
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg max-w-[400px] mx-auto lg:mx-0">
              Your personal mentor. Ask about scholarships, explore career paths, or get feedback on your ideas.
            </p>
          </div>

          {/* Right Column: Chat Interface */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            
            {/* Notice the max-w-[450px] here! This keeps it looking like an app on desktop */}
            <GlassCard className="overflow-hidden w-full max-w-[450px]">
              
              {/* Top Bar */}
              <div className="border-b border-white/5 px-6 py-5 flex items-center gap-4">
                <div
                  className="
                    h-10
                    w-10
                    rounded-full
                    bg-gradient-to-br
                    from-blue-500
                    to-blue-700
                    flex
                    items-center
                    justify-center
                    text-xl
                    shadow-[0_0_15px_rgba(59,130,246,0.4)]
                  "
                >
                  <span className="text-white text-lg">✦</span>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white leading-tight">
                    Buddy
                  </h2>
                  <p className="text-slate-400 text-sm font-medium">
                    Mentor Mode • Beta
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="px-4 sm:px-6 py-8 space-y-6 min-h-[400px] flex flex-col justify-end w-full">
                {buddyMessages.length > 0 ? (
                  buddyMessages.map((message, index) => (
                    <div
                      key={index}
                      // Added w-full here so it stretches side-to-side
                      className={`flex w-full ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`px-5 sm:px-6 py-3.5 text-[14px] sm:text-[15px] font-medium leading-relaxed ${
                          message.role === "user"
                            ? `
                            max-w-[85%] sm:max-w-[80%]
                            bg-gradient-to-r
                            from-blue-600
                            to-cyan-400
                            text-white
                            rounded-3xl
                            rounded-tr-sm /* Sharpens top-right corner */
                          `
                            : `
                            max-w-[85%] sm:max-w-[80%]
                            bg-[#1E1E2E]
                            border border-white/5
                            text-slate-200
                            rounded-3xl
                            rounded-tl-sm /* Sharpens top-left corner */
                          `
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center flex-1 w-full">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-4">
                      ✦
                    </div>
                    <p className="text-xl font-semibold text-white">Ask Buddy</p>
                    <p className="text-slate-400 mt-1">Your personal AI mentor</p>
                  </div>
                )}
              </div>

              {/* Input Area */}
              {/* FIX 3: Adjusted gap and padding for tiny screens */}
              <div className="p-4 sm:p-6 border-t border-white/5 bg-[#0F111A]/50 flex gap-2 sm:gap-3 items-center">
                <input
                  type="text"
                  placeholder="Ask about scholarships..."
                  className="
                    flex-1
                    rounded-full
                    bg-white/[0.05] backdrop-blur-xl
                    border
                    border-white/5
                    px-4
                    sm:px-6
                    py-3
                    sm:py-3.5
                    text-sm
                    text-white
                    placeholder-slate-400
                    outline-none
                    transition-all
                    focus:border-blue-500/50
                    focus:bg-[#252538]
                  "
                />

                <GlowButton className="rounded-full px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 font-medium flex items-center gap-2">
                  <svg 
                    className="w-4 h-4 hidden sm:block" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send</span>
                </GlowButton>
              </div>
            </GlassCard>

          </div>
        </div>
      </div>
    </main>
  );
}