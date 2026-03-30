import Link from "next/link";
import {
  Check,
  ArrowRight,
} from "lucide-react";

export default function PricingPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#C62828] via-[#E74C4C] to-[#F7A0A0] px-8 lg:px-16 py-16 lg:py-20 rounded-b-[3rem]">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs font-semibold tracking-wide text-white/90 bg-white/20 px-4 py-1.5 rounded-lg">
            PRICING
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-base text-white/85 leading-relaxed max-w-lg">
            Pick the plan that fits your cafe. No hidden fees, no long-term
            lock-ins. Start free and scale when you&apos;re ready.
          </p>
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-guava-yellow/25 rounded-full blur-3xl" />
      </section>

      {/* Pricing Cards */}
      <section className="px-8 lg:px-16 py-20">
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span className="font-caveat text-2xl text-guava-red font-bold">
            launching soon
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text">
            Choose Your Plan
          </h2>
          <p className="text-sm text-guava-text-muted max-w-md leading-relaxed">
            We&apos;re finalising our pricing. Here&apos;s a preview of what to
            expect. Sign up now to lock in early-bird rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Starter */}
          <div className="flex flex-col gap-6 p-8 bg-guava-red-light border-2 border-guava-red-soft rounded-2xl shadow-lg shadow-guava-red/10 hover:shadow-xl hover:shadow-guava-red/20 hover:-translate-y-1 transition-all duration-300">
            <div>
              <h3 className="text-lg font-bold text-guava-text">Starter</h3>
              <p className="text-xs text-guava-text-muted mt-1">
                Perfect for single-location cafes getting started
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-guava-text">Free</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-red shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Yoco CSV upload</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-red shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">7-day sales forecast</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-red shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Basic dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-red shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Email support</span>
              </div>
            </div>
            <Link
              href="/signup"
              className="mt-auto text-center px-6 py-3 bg-guava-red hover:bg-guava-red/90 text-white font-semibold text-sm rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Growth */}
          <div className="flex flex-col gap-6 p-8 bg-guava-green-light border-2 border-guava-green-soft rounded-2xl shadow-lg shadow-guava-green/10 hover:shadow-xl hover:shadow-guava-green/20 hover:-translate-y-1 transition-all duration-300 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-wide text-white bg-guava-green px-4 py-1 rounded-lg">
              MOST POPULAR
            </span>
            <div>
              <h3 className="text-lg font-bold text-guava-text">Growth</h3>
              <p className="text-xs text-guava-text-muted mt-1">
                For cafes ready to optimise and reduce waste
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-guava-text">TBA</span>
              <span className="text-sm text-guava-text-muted">/month</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-green shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Direct Yoco API connection</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-green shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">30-day demand forecast</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-green shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Weather &amp; event data</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-green shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Inventory management</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-green shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Low-stock alerts</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-green shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Priority support</span>
              </div>
            </div>
            <Link
              href="/signup"
              className="mt-auto text-center px-6 py-3 bg-guava-green hover:bg-guava-green/90 text-white font-semibold text-sm rounded-lg transition-colors"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Pro */}
          <div className="flex flex-col gap-6 p-8 bg-guava-yellow-light border-2 border-guava-yellow/30 rounded-2xl shadow-lg shadow-guava-yellow/10 hover:shadow-xl hover:shadow-guava-yellow/20 hover:-translate-y-1 transition-all duration-300">
            <div>
              <h3 className="text-lg font-bold text-guava-text">Pro</h3>
              <p className="text-xs text-guava-text-muted mt-1">
                Multi-location cafes and franchises
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-guava-text">TBA</span>
              <span className="text-sm text-guava-text-muted">/month</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-yellow shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Everything in Growth</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-yellow shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Multi-location dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-yellow shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Automated reordering</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-yellow shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Xero / Sage / QuickBooks sync</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-yellow shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Supplier management</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-guava-yellow shrink-0" strokeWidth={3} />
                <span className="text-sm text-guava-text-muted">Dedicated account manager</span>
              </div>
            </div>
            <Link
              href="/signup"
              className="mt-auto text-center px-6 py-3 bg-guava-yellow hover:bg-guava-yellow/90 text-guava-text font-semibold text-sm rounded-lg transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 lg:mx-8 px-8 lg:px-16 py-20 bg-linear-to-br from-[#C62828] via-guava-red to-[#E74C4C] rounded-[2.5rem] mb-12">
        <div className="flex flex-col items-center text-center gap-5">
          <span className="font-caveat text-2xl text-guava-yellow font-bold">
            early birds get the best rates
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Sign Up Now, Pay Later
          </h2>
          <p className="text-base text-white/85 leading-relaxed max-w-lg">
            Create your free account today and be first in line when our paid
            plans launch. No credit card required.
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
