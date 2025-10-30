import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bitcoin, ShieldCheck, Zap } from 'lucide-react';
import smlogo from '@/assets/smlogo.png';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-[hsl(var(--primary)/0.03)] to-background py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#fc6432] bg-primary/5 px-4 py-2 text-sm font-medium text-[#fc6432]">
              <Bitcoin className="h-4 w-4" />
              Stacks-Powered Marketplace
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Buy and Sell with
              <span className="block bg-gradient-to-r from-[#fc6432] to-[#fc6432] bg-clip-text text-transparent">
                Stacks Blockchain
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure, decentralized marketplace powered by Bitcoin's security. 
              Connect your Stacks wallet and start trading today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/explore">
                <Button variant="hero" size="lg" className="gap-2 w-full sm:w-auto">
                  Explore Products
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Start Selling
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fc6432/0.1] rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-glow)]">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#fc6432] to-[#fc6432] flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Bitcoin Security</h3>
              <p className="text-muted-foreground">
                Built on Stacks, inheriting Bitcoin's unmatched security and finality
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-glow)]">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#fc6432] to-[#fc6432] flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Instant Transactions</h3>
              <p className="text-muted-foreground">
                Fast and efficient trading with smart contract escrow protection
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-glow)]">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#fc6432] to-[#fc6432] flex items-center justify-center">
                <Bitcoin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">True Ownership</h3>
              <p className="text-muted-foreground">
                Your keys, your assets. Complete control over your transactions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center space-y-6 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#fc6432] to-[#fc6432] text-primary-foreground shadow-[var(--shadow-glow)]">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Trading?</h2>
            <p className="text-lg opacity-90">
              Join our growing community of Bitcoin-powered traders
            </p>
            <Link to="/explore">
              <Button variant="secondary" size="lg" className="gap-2">
                Browse Products
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src={smlogo} alt="StacksMarket Logo" className="h-8 w-8" />
              <span className="font-semibold">StacksMarket</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 StacksMarket. Powered by Bitcoin & Stacks.
            </p>
            <div className="flex gap-4">
              <a href="https://stacks.co" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Stacks.co
              </a>
              <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Bitcoin.org
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
