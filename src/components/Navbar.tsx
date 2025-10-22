import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/contexts/WalletContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Wallet } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { isConnected, connectWallet, userData } = useWallet();
  const { cart } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))]" />
            <span className="text-xl font-bold">StacksMarket</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link to="/">
              <Button
                variant={isActive('/') ? 'secondary' : 'ghost'}
                className="font-medium"
              >
                Home
              </Button>
            </Link>
            <Link to="/explore">
              <Button
                variant={isActive('/explore') ? 'secondary' : 'ghost'}
                className="font-medium"
              >
                Explore
              </Button>
            </Link>
            <Link to="/profile">
              <Button
                variant={isActive('/profile') ? 'secondary' : 'ghost'}
                className="font-medium"
              >
                Profile
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>

          {isConnected ? (
            <Button variant="outline" className="gap-2">
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">
                {formatAddress(userData?.profile?.stxAddress?.mainnet || '')}
              </span>
            </Button>
          ) : (
            <Button onClick={connectWallet} variant="hero" className="gap-2">
              <Wallet className="h-4 w-4" />
              <span className="hidden sm:inline">Connect Wallet</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
