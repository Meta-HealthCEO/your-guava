import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  Activity,
  Target,
  Plus,
  CheckCircle,
  RefreshCw,
  Bell,
  Package,
  ArrowRight,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#C62828] via-[#E74C4C] to-[#F7A0A0] px-8 lg:px-16 py-16 lg:py-20 rounded-b-[3rem]">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs font-semibold tracking-wide text-white/90 bg-white/20 px-4 py-1.5 rounded-lg">
            FEATURES
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Everything Your Cafe Needs
          </h1>
          <p className="text-base text-white/85 leading-relaxed max-w-lg">
            From demand prediction to inventory management, Your Guava gives you
            the tools to run a smarter, leaner cafe.
          </p>
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-guava-yellow/25 rounded-full blur-3xl" />
      </section>

      {/* Predicting the Munchies */}
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
      </section>

      {/* Cloud-Sourced Sales */}
      <section className="px-8 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-120 h-100 rounded-3xl overflow-hidden border-2 border-guava-green-soft shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop"
              alt="Iced coffee drink"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text leading-tight">
              Cloud-Sourced Sales
            </h2>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Whether the sun peeks out, the heat is set to fry, or frost
              lingers over the winter pavements, Your Guava cross-references
              weather data and event calendars to keep your cafe thriving.
            </p>

            <div className="flex flex-col gap-5 pt-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-guava-red-light rounded-lg flex items-center justify-center shrink-0">
                    <Plus className="w-4 h-4 text-guava-red" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-guava-red">
                    Reduced Food Waste
                  </span>
                </div>
                <p className="text-xs text-guava-text-muted leading-relaxed pl-11">
                  Order just the right stock. Stop tossing what didn&apos;t sell.
                  Keep your margins fresh and your bins empty.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-guava-green-light rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-guava-green" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-guava-green">
                    Profit Builder
                  </span>
                </div>
                <p className="text-xs text-guava-text-muted leading-relaxed pl-11">
                  See which items are your real revenue drivers and double down
                  on what works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Inventory */}
      <section className="px-8 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-120 h-100 rounded-3xl overflow-hidden border-2 border-guava-red-soft shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
              alt="Cafe counter with pastries and baked goods"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text leading-tight">
              Smart Inventory,
              <br />
              Zero Guesswork
            </h2>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Your Guava doesn&apos;t just predict sales — it manages your stock.
              Our intelligent inventory system tracks every bag of beans, every
              tray of croissants, and every bottle of oat milk so you never run
              dry or over-order.
            </p>

            <div className="flex flex-col gap-5 pt-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-guava-green-light rounded-lg flex items-center justify-center shrink-0">
                    <RefreshCw className="w-4 h-4 text-guava-green" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-guava-green">
                    Automated Reordering
                  </span>
                </div>
                <p className="text-xs text-guava-text-muted leading-relaxed pl-11">
                  Set your thresholds and let Your Guava reorder from your
                  suppliers automatically. Wake up to a fully stocked kitchen,
                  every morning.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-guava-yellow-light rounded-lg flex items-center justify-center shrink-0">
                    <Bell className="w-4 h-4 text-guava-yellow" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-guava-yellow">
                    Low-Stock Alerts
                  </span>
                </div>
                <p className="text-xs text-guava-text-muted leading-relaxed pl-11">
                  Get notified before you run out of anything. No more
                  mid-service dashes to the shops.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-guava-red-light rounded-lg flex items-center justify-center shrink-0">
                    <Package className="w-4 h-4 text-guava-red" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-guava-red">
                    Supplier Management
                  </span>
                </div>
                <p className="text-xs text-guava-text-muted leading-relaxed pl-11">
                  Keep all your supplier details, pricing, and lead times in one
                  place. Compare costs and switch with a click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="px-8 lg:px-16 py-20">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="text-xs font-semibold tracking-wide text-guava-green bg-guava-green-light px-4 py-1.5 rounded-lg">
            PLAYS WELL WITH OTHERS
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text">
            Integrations That Just Work
          </h2>
          <p className="text-sm text-guava-text-muted max-w-lg leading-relaxed">
            Your Guava plugs straight into the tools you already use. Pull in
            sales data, push out forecasts, and keep your books in sync —
            automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-4 p-8 bg-guava-green-light border-2 border-guava-green-soft rounded-2xl shadow-lg shadow-guava-green/10 hover:shadow-xl hover:shadow-guava-green/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-[#13B5EA] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-xl">Y</span>
            </div>
            <h3 className="text-base font-bold text-guava-text">Yoco</h3>
            <p className="text-xs text-guava-text-muted leading-relaxed text-center">
              Import your card transaction data directly. The heart of your
              sales predictions.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 bg-guava-red-light border-2 border-guava-red-soft rounded-2xl shadow-lg shadow-guava-red/10 hover:shadow-xl hover:shadow-guava-red/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-[#13B5EA] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-lg">xero</span>
            </div>
            <h3 className="text-base font-bold text-guava-text">Xero</h3>
            <p className="text-xs text-guava-text-muted leading-relaxed text-center">
              Sync your forecasts and inventory costs directly to your Xero
              accounts.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 bg-guava-yellow-light border-2 border-guava-yellow/30 rounded-2xl shadow-lg shadow-guava-yellow/10 hover:shadow-xl hover:shadow-guava-yellow/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-[#2CA01C] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-sm">sage</span>
            </div>
            <h3 className="text-base font-bold text-guava-text">Sage One</h3>
            <p className="text-xs text-guava-text-muted leading-relaxed text-center">
              Push purchase orders and expense data straight into Sage for
              seamless bookkeeping.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 bg-guava-green-light border-2 border-guava-green-soft rounded-2xl shadow-lg shadow-guava-green/10 hover:shadow-xl hover:shadow-guava-green/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-[#2CA01C] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-sm">QB</span>
            </div>
            <h3 className="text-base font-bold text-guava-text">QuickBooks</h3>
            <p className="text-xs text-guava-text-muted leading-relaxed text-center">
              Connect your QuickBooks account for automated invoicing and
              financial reporting.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 lg:mx-8 px-8 lg:px-16 py-20 bg-linear-to-br from-[#C62828] via-guava-red to-[#E74C4C] rounded-[2.5rem] mb-12">
        <div className="flex flex-col items-center text-center gap-5">
          <span className="font-caveat text-2xl text-guava-yellow font-bold">
            ready to get started?
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            See It All in Action
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
