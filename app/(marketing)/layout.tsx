import Link from "next/link";
import Image from "next/image";
import logo from "./assets/long your guava.png";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-guava-cream">
      <nav className="flex items-center justify-between px-8 lg:px-16 py-2.5">
        <Link href="/">
          <Image src={logo} alt="Your Guava" width={80} height={32} className="object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm font-medium text-guava-text hover:text-guava-red transition-colors">
            Features
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium text-guava-text hover:text-guava-red transition-colors">
            How It Works
          </Link>
          <Link href="/about" className="text-sm font-medium text-guava-text hover:text-guava-red transition-colors">
            About
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-guava-text hover:text-guava-red transition-colors">
            Pricing
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-guava-green hover:text-guava-green/80 transition-colors">
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold text-white bg-guava-green hover:bg-guava-green/90 px-6 py-2 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="bg-guava-text px-8 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-70">
            <Image src={logo} alt="Your Guava" width={100} height={40} className="object-contain" />
            <p className="text-sm text-white/50 mt-3 leading-relaxed">
              The predictive engine for coffee shops. Know what&apos;s brewing before your customers do.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-guava-red tracking-wider">PRODUCT</span>
              <Link href="/features" className="text-sm text-white/60 hover:text-white/90 transition-colors">Features</Link>
              <Link href="/how-it-works" className="text-sm text-white/60 hover:text-white/90 transition-colors">How It Works</Link>
              <Link href="/pricing" className="text-sm text-white/60 hover:text-white/90 transition-colors">Pricing</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-guava-red tracking-wider">INTEGRATIONS</span>
              <Link href="/features#integrations" className="text-sm text-white/60 hover:text-white/90 transition-colors">Yoco</Link>
              <Link href="/features#integrations" className="text-sm text-white/60 hover:text-white/90 transition-colors">Xero</Link>
              <Link href="/features#integrations" className="text-sm text-white/60 hover:text-white/90 transition-colors">Sage One</Link>
              <Link href="/features#integrations" className="text-sm text-white/60 hover:text-white/90 transition-colors">QuickBooks</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-guava-red tracking-wider">COMPANY</span>
              <Link href="/about" className="text-sm text-white/60 hover:text-white/90 transition-colors">Our Story</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors">Blog</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-guava-red tracking-wider">LEGAL</span>
              <Link href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors">Privacy</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white/90 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; 2025 Your Guava. Born in Cape Town, South Africa.
          </p>
          <p className="text-xs text-white/30">
            Built by Shaun Schoeman & Danny Havenga
          </p>
        </div>
      </footer>
    </div>
  );
}
