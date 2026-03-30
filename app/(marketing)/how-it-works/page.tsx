import Image from "next/image";
import Link from "next/link";
import {
  Plug,
  CreditCard,
  Upload,
  Shield,
  CloudSun,
  CalendarDays,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#C62828] via-[#E74C4C] to-[#F7A0A0] px-8 lg:px-16 py-16 lg:py-20 rounded-b-[3rem]">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs font-semibold tracking-wide text-white/90 bg-white/20 px-4 py-1.5 rounded-lg">
            HOW IT WORKS
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            From Yoco to
            <br />
            <span className="font-caveat text-guava-yellow text-5xl lg:text-6xl">
              Tomorrow&apos;s Game Plan
            </span>
          </h1>
          <p className="text-base text-white/85 leading-relaxed max-w-lg">
            Three simple steps to turn your sales data into daily predictions
            your team can act on.
          </p>
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-guava-yellow/25 rounded-full blur-3xl" />
      </section>

      {/* The 3 Steps */}
      <section className="px-8 lg:px-16 py-20">
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text">
            Three Steps to Smarter Sales
          </h2>
          <p className="text-sm text-guava-text-muted max-w-md">
            No complex setup. No data science degree needed. Just connect, wait,
            and start preparing smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="flex flex-col gap-5 p-10 bg-guava-red-light border-2 border-guava-red-soft rounded-2xl shadow-lg shadow-guava-red/10 hover:shadow-xl hover:shadow-guava-red/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-guava-red rounded-2xl flex items-center justify-center shadow-md shadow-guava-red/30">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-guava-text">
              Connect Your Yoco
            </h3>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Link your Yoco account or upload a CSV export. We&apos;ll pull in
              your transaction history securely. The whole process takes under
              two minutes and your data is encrypted end-to-end.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs font-medium text-guava-red bg-white px-3 py-1 rounded-lg">API link</span>
              <span className="text-xs font-medium text-guava-red bg-white px-3 py-1 rounded-lg">CSV upload</span>
              <span className="text-xs font-medium text-guava-red bg-white px-3 py-1 rounded-lg">Encrypted</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-10 bg-guava-green-light border-2 border-guava-green-soft rounded-2xl shadow-lg shadow-guava-green/10 hover:shadow-xl hover:shadow-guava-green/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-guava-green rounded-2xl flex items-center justify-center shadow-md shadow-guava-green/30">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-guava-text">
              We Crunch the Data
            </h3>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Our engine cross-references your sales with weather forecasts,
              local events, and neighbourhood trends to build your personalised
              demand forecast. The more data we get, the sharper it becomes.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs font-medium text-guava-green bg-white px-3 py-1 rounded-lg">Weather</span>
              <span className="text-xs font-medium text-guava-green bg-white px-3 py-1 rounded-lg">Events</span>
              <span className="text-xs font-medium text-guava-green bg-white px-3 py-1 rounded-lg">Trends</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-10 bg-guava-yellow-light border-2 border-guava-yellow/30 rounded-2xl shadow-lg shadow-guava-yellow/10 hover:shadow-xl hover:shadow-guava-yellow/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-guava-yellow rounded-2xl flex items-center justify-center shadow-md shadow-guava-yellow/30">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-guava-text">
              Predict & Prepare
            </h3>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Get daily predictions on what to stock, bake, and brew. Align your
              purchases with real demand and stop wasting money on stock that
              sits on the shelf. Your dashboard updates every morning.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs font-medium text-guava-yellow bg-white px-3 py-1 rounded-lg">Daily forecasts</span>
              <span className="text-xs font-medium text-guava-yellow bg-white px-3 py-1 rounded-lg">Smart prep lists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Yoco Integration Detail */}
      <section className="px-8 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-120 h-100 rounded-3xl overflow-hidden border-2 border-guava-green-soft shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
              alt="Point of sale terminal in a cafe"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <span className="self-start text-xs font-semibold tracking-wide text-guava-green bg-guava-green-light px-4 py-1.5 rounded-lg">
              POWERED BY YOCO
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text leading-tight">
              Your Till Data,
              <br />
              Supercharged
            </h2>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Yoco is the backbone of thousands of South African cafes. Your
              Guava plugs directly into Yoco&apos;s API to pull transaction-level
              data — every item sold, every time stamp, every payment method.
              That granular detail is what makes our forecasts so accurate.
            </p>

            <div className="flex flex-col gap-5 pt-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-guava-green-light rounded-lg flex items-center justify-center shrink-0">
                    <CreditCard className="w-4 h-4 text-guava-green" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-guava-green">
                    Direct API Connection
                  </span>
                </div>
                <p className="text-xs text-guava-text-muted leading-relaxed pl-11">
                  Authenticate once and your data flows automatically. No manual
                  exports, no copy-pasting.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-guava-red-light rounded-lg flex items-center justify-center shrink-0">
                    <Upload className="w-4 h-4 text-guava-red" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-guava-red">
                    CSV Fallback
                  </span>
                </div>
                <p className="text-xs text-guava-text-muted leading-relaxed pl-11">
                  Prefer manual control? Upload your Yoco CSV exports anytime
                  and we&apos;ll process them instantly.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-guava-yellow-light rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4 text-guava-yellow" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-guava-yellow">
                    Bank-Grade Security
                  </span>
                </div>
                <p className="text-xs text-guava-text-muted leading-relaxed pl-11">
                  Your data is encrypted in transit and at rest. We never store
                  card numbers or customer personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Feeds the Forecast */}
      <section className="px-8 lg:px-16 py-20">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text">
            What Feeds the Forecast
          </h2>
          <p className="text-sm text-guava-text-muted max-w-lg leading-relaxed">
            Your Guava doesn&apos;t rely on gut feel. We combine multiple data
            sources to give you predictions you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-4 p-8 bg-guava-red-light border-2 border-guava-red-soft rounded-2xl shadow-lg shadow-guava-red/10 hover:shadow-xl hover:shadow-guava-red/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-red rounded-2xl flex items-center justify-center shadow-md shadow-guava-red/30">
              <Plug className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-base font-bold text-guava-text">Sales Data</h3>
            <p className="text-xs text-guava-text-muted leading-relaxed text-center">
              Every transaction from your Yoco till, broken down by item, time,
              and day.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 bg-guava-green-light border-2 border-guava-green-soft rounded-2xl shadow-lg shadow-guava-green/10 hover:shadow-xl hover:shadow-guava-green/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-green rounded-2xl flex items-center justify-center shadow-md shadow-guava-green/30">
              <CloudSun className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-base font-bold text-guava-text">Weather</h3>
            <p className="text-xs text-guava-text-muted leading-relaxed text-center">
              Hyperlocal weather forecasts that affect what people crave — iced
              lattes or hot chocolate.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 bg-guava-yellow-light border-2 border-guava-yellow/30 rounded-2xl shadow-lg shadow-guava-yellow/10 hover:shadow-xl hover:shadow-guava-yellow/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-yellow rounded-2xl flex items-center justify-center shadow-md shadow-guava-yellow/30">
              <CalendarDays className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-base font-bold text-guava-text">Events</h3>
            <p className="text-xs text-guava-text-muted leading-relaxed text-center">
              Local events, public holidays, and school terms that shift foot
              traffic patterns.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 bg-guava-green-light border-2 border-guava-green-soft rounded-2xl shadow-lg shadow-guava-green/10 hover:shadow-xl hover:shadow-guava-green/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-green rounded-2xl flex items-center justify-center shadow-md shadow-guava-green/30">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-base font-bold text-guava-text">Trends</h3>
            <p className="text-xs text-guava-text-muted leading-relaxed text-center">
              Neighbourhood-level demand trends that help you spot shifts before
              they hit.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 lg:mx-8 px-8 lg:px-16 py-20 bg-linear-to-br from-[#C62828] via-guava-red to-[#E74C4C] rounded-[2.5rem] mb-12">
        <div className="flex flex-col items-center text-center gap-5">
          <span className="font-caveat text-2xl text-guava-yellow font-bold">
            sounds good, right?
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Ready to Connect Your Yoco?
          </h2>
          <p className="text-base text-white/85 leading-relaxed max-w-lg">
            Set up takes less than two minutes. Start getting daily predictions
            from your very first week.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/signup"
              className="group flex items-center gap-2 px-9 py-3 bg-guava-green hover:bg-guava-green/90 text-white font-bold text-sm rounded-lg transition-colors"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#"
              className="px-9 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold text-sm rounded-lg border border-white/30 transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
