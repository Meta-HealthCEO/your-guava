import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  Heart,
  Lightbulb,
  Target,
  Leaf,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#C62828] via-[#E74C4C] to-[#F7A0A0] px-8 lg:px-16 py-16 lg:py-20 rounded-b-[3rem]">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-xs font-semibold tracking-wide text-white/90 bg-white/20 px-4 py-1.5 rounded-lg">
            ABOUT US
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Born in Cape Town,
            <br />
            <span className="font-caveat text-guava-yellow text-5xl lg:text-6xl">
              Built for Cafes
            </span>
          </h1>
          <p className="text-base text-white/85 leading-relaxed max-w-lg">
            We&apos;re two friends who believe cafe owners deserve better tools
            than spreadsheets and guesswork.
          </p>
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-guava-yellow/25 rounded-full blur-3xl" />
      </section>

      {/* Our Story */}
      <section className="px-8 lg:px-16 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-120 h-100 rounded-3xl overflow-hidden border-2 border-guava-yellow/30 shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
              alt="Team collaboration"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <span className="self-start text-xs font-semibold tracking-wide text-guava-red bg-guava-red-light px-4 py-1.5 rounded-lg">
              OUR STORY
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text leading-tight">
              Two Friends, One Problem,
              <br />
              A Better Solution
            </h2>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Your Guava was founded in 2025 in Cape Town by finance systems
              engineer{" "}
              <span className="font-semibold text-guava-text">
                Shaun Schoeman
              </span>{" "}
              and entrepreneur{" "}
              <span className="font-semibold text-guava-text">
                Danny Havenga
              </span>
              . Friends with a shared passion for building solutions that
              actually work, they saw cafes guessing their way through stock and
              waste when the data to solve it was already in their tills.
            </p>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Shaun brought deep expertise in financial systems — the kind of
              rigour that keeps numbers honest. Danny brought the entrepreneurial
              grit — the willingness to knock on doors, listen to cafe owners,
              and turn frustrations into features. Together they built a platform
              that turns raw sales data into daily predictions cafe owners can
              act on — no spreadsheets, no gut feelings, just clarity.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-guava-red" />
                <span className="text-sm font-medium text-guava-text">
                  Cape Town, SA
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-guava-green" />
                <span className="text-sm font-medium text-guava-text">
                  Founded 2025
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-guava-red" />
                <span className="text-sm font-medium text-guava-text">
                  Built with purpose
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-8 lg:px-16 py-20">
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-guava-text">
            What Drives Us
          </h2>
          <p className="text-sm text-guava-text-muted max-w-lg leading-relaxed">
            Every feature we build, every line of code we write, comes back to
            these core beliefs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 p-8 bg-guava-red-light border-2 border-guava-red-soft rounded-2xl shadow-lg shadow-guava-red/10 hover:shadow-xl hover:shadow-guava-red/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-red rounded-2xl flex items-center justify-center shadow-md shadow-guava-red/30">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-guava-text">
              Simplicity First
            </h3>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              Cafe owners are busy. Our tools must be dead simple to use. If it
              takes more than two taps, we&apos;ve over-engineered it.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 bg-guava-green-light border-2 border-guava-green-soft rounded-2xl shadow-lg shadow-guava-green/10 hover:shadow-xl hover:shadow-guava-green/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-green rounded-2xl flex items-center justify-center shadow-md shadow-guava-green/30">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-guava-text">
              Data with Purpose
            </h3>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              We don&apos;t collect data for the sake of it. Every insight we
              surface is something you can act on today — not a dashboard you
              never open.
            </p>
          </div>

          <div className="flex flex-col gap-4 p-8 bg-guava-yellow-light border-2 border-guava-yellow/30 rounded-2xl shadow-lg shadow-guava-yellow/10 hover:shadow-xl hover:shadow-guava-yellow/20 hover:-translate-y-1 transition-all duration-300">
            <div className="w-14 h-14 bg-guava-yellow rounded-2xl flex items-center justify-center shadow-md shadow-guava-yellow/30">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-bold text-guava-text">
              Less Waste, More Good
            </h3>
            <p className="text-sm text-guava-text-muted leading-relaxed">
              South African cafes throw away tons of food every year. If our
              predictions can cut that even a fraction, we&apos;re doing
              something meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Cape Town */}
      <section className="mx-4 lg:mx-8 px-8 lg:px-16 py-20 bg-linear-to-br from-[#2E7D21] via-guava-green to-[#6DBF5A] rounded-[2.5rem]">
        <div className="flex flex-col items-center text-center gap-5">
          <MapPin className="w-10 h-10 text-white" />
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Proudly Cape Town
          </h2>
          <p className="text-base text-white/85 leading-relaxed max-w-xl">
            We&apos;re based in the Mother City — surrounded by some of the best
            coffee culture in Africa. It&apos;s where we prototype, test, and
            obsess over getting predictions right. Our neighbourhood cafes are
            our first users, our harshest critics, and our biggest fans.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 lg:mx-8 px-8 lg:px-16 py-20 bg-linear-to-br from-[#C62828] via-guava-red to-[#E74C4C] rounded-[2.5rem] my-12">
        <div className="flex flex-col items-center text-center gap-5">
          <span className="font-caveat text-2xl text-guava-yellow font-bold">
            come say howzit
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Want to Know More?
          </h2>
          <p className="text-base text-white/85 leading-relaxed max-w-lg">
            Whether you&apos;re a cafe owner, a potential partner, or just
            curious — we&apos;d love to chat.
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
