import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  Activity,
  Target,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#C62828] via-[#E74C4C] to-[#F7A0A0] px-8 lg:px-16 py-16 lg:py-24 rounded-b-[3rem]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 flex flex-col gap-6">
            <span className="self-start text-xs font-semibold tracking-wide text-white/90 bg-white/20 px-4 py-1.5 rounded-lg">
              BEYOND ROASTS & TOASTS
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Your Guava
              <br />
              Knows
              <br />
              <span className="font-caveat text-guava-yellow text-6xl lg:text-7xl">
                What&apos;s Next!
              </span>
            </h1>

            <p className="text-base text-white/85 leading-relaxed max-w-md">
              The predictive cafe engine with a pulse. We don&apos;t just count
              beans, we forecast the future of your muffins, cold brews, and
              everything in between.
            </p>

            <div className="flex gap-4 pt-2">
              <Link
                href="/signup"
                className="px-8 py-3 bg-guava-green hover:bg-guava-green/90 text-white font-semibold text-sm rounded-lg transition-colors"
              >
                Taste the Future
              </Link>
              <Link
                href="/how-it-works"
                className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold text-sm rounded-lg border border-white/30 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-120 h-80 lg:h-95 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop"
              alt="Cozy coffee shop interior"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-guava-yellow/25 rounded-full blur-3xl" />
      </section>

      {/* Food Image Strip */}
      <section className="px-8 lg:px-16 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-48 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop"
              alt="Fresh muffins"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=300&fit=crop"
              alt="Croissants"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
              alt="Latte art"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop"
              alt="Sandwiches"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="px-8 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text leading-tight">
              Predicting the Munchies & More
            </h2>
            <p className="text-guava-text-muted text-sm mt-3 leading-relaxed">
              Your Guava analyses patterns faster than you can flip a grilled
              cheese. From urban sourdough to vegan brownies, we know exactly how
              many to prep.
            </p>
          </div>
          <TrendingUp className="text-guava-red w-12 h-12" strokeWidth={2} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 p-8 bg-guava-red-light border-2 border-guava-red-soft rounded-2xl shadow-lg shadow-guava-red/10 hover:shadow-xl hover:shadow-guava-red/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-red rounded-2xl flex items-center justify-center shadow-md shadow-guava-red/30">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-guava-text">
              The Muffin Metric
            </h3>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Our algorithm predicts your muffin sales down to the last
              blueberry. Never overbake or underbake your expectations again.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 bg-guava-green-light border-2 border-guava-green-soft rounded-2xl shadow-lg shadow-guava-green/10 hover:shadow-xl hover:shadow-guava-green/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-green rounded-2xl flex items-center justify-center shadow-md shadow-guava-green/30">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-guava-text">
              Sandwich Strategy
            </h3>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              AI picks between cheese and pickle for your customers before they
              even decide to order lunch.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 bg-guava-yellow-light border-2 border-guava-yellow/30 rounded-2xl shadow-lg shadow-guava-yellow/10 hover:shadow-xl hover:shadow-guava-yellow/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-yellow rounded-2xl flex items-center justify-center shadow-md shadow-guava-yellow/30">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-guava-text">
              The Pastry Pulse
            </h3>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Monitor your pastry sales data in a heartbeat. Track peaks and dips
              in croissant demand throughout the day.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/features"
            className="group flex items-center gap-2 text-sm font-semibold text-guava-red hover:text-guava-red/80 transition-colors"
          >
            See all features
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-4 lg:mx-8 px-8 lg:px-16 py-20 bg-linear-to-br from-[#2E7D21] via-guava-green to-[#6DBF5A] rounded-[2.5rem]">
        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            The Science of the Sip
          </h2>
          <p className="text-sm text-white/80 leading-relaxed max-w-xl">
            Our data isn&apos;t just numbers, it&apos;s the rhythm of every
            neighbourhood. We read the city, the weather, the events to keep
            your staff ahead of the rush.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <div className="flex flex-col items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-14 py-8 rounded-2xl">
              <span className="text-5xl font-extrabold text-white">
                94%
              </span>
              <span className="text-xs font-medium text-white/70">
                Prediction Accuracy
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-14 py-8 rounded-2xl">
              <span className="text-5xl font-extrabold text-guava-yellow">
                30%
              </span>
              <span className="text-xs font-medium text-white/70">
                Less Food Waste
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-14 py-8 rounded-2xl">
              <span className="text-5xl font-extrabold text-guava-green-soft">
                200+
              </span>
              <span className="text-xs font-medium text-white/70">
                Cafes on Board
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 lg:mx-8 px-8 lg:px-16 py-20 bg-linear-to-br from-[#C62828] via-guava-red to-[#E74C4C] rounded-[2.5rem] my-12">
        <div className="flex flex-col items-center text-center gap-5">
          <span className="font-caveat text-2xl text-guava-yellow font-bold">
            psst... your cafe called
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Ready to Know What&apos;s Next?
          </h2>
          <p className="text-base text-white/85 leading-relaxed max-w-lg">
            Join cafes across South Africa already using Your Guava to predict
            sales, reduce waste, and boost profits.
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
