import { useWallet } from '@/contexts/WalletContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Wallet, Package, ShoppingBag, LogOut } from 'lucide-react';

const Profile = () => {
  const { isConnected, userData, connectWallet, disconnectWallet } = useWallet();

  if (!isConnected) {
    return (
      <div className="container py-20">
        <div className="mx-auto max-w-md text-center space-y-6">
          <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))] flex items-center justify-center">
            <Wallet className="h-10 w-10 text-primary-foreground" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Connect Your Wallet</h1>
            <p className="text-muted-foreground">
              Connect your Stacks wallet to view your profile, listings, and purchase history
            </p>
          </div>
          <Button onClick={connectWallet} variant="hero" size="lg" className="gap-2">
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </Button>
        </div>
      </div>
    );
  }

  const address = userData?.profile?.stxAddress?.mainnet || '';

  // Mock data for listings and purchases
  const mockListings = [
    { id: '1', name: 'Digital Art #1', price: 10, units: 5 },
    { id: '2', name: 'NFT Collection', price: 25, units: 10 },
  ];

  const mockPurchases = [
    { id: '1', name: 'Bitcoin Art Collection', price: 15.5, date: '2025-01-15' },
    { id: '2', name: 'Web3 Startup Guide', price: 12.0, date: '2025-01-10' },
  ];

  return (
    <div className="container py-12">
      <div className="space-y-8">
        {/* Profile Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Your Profile</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Wallet className="h-4 w-4" />
              <code className="text-sm bg-secondary px-2 py-1 rounded">{address}</code>
            </div>
          </div>
          <Button onClick={disconnectWallet} variant="outline" className="gap-2">
            <LogOut className="h-4 w-4" />
            Disconnect
          </Button>
        </div>

        <Separator />

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{mockListings.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Purchases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{mockPurchases.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {mockListings.reduce((sum, item) => sum + item.price * item.units, 0)} STX
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Listings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Active Listings
            </CardTitle>
            <CardDescription>Items you have listed for sale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockListings.map((listing) => (
                <div
                  key={listing.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <div>
                    <p className="font-medium">{listing.name}</p>
                    <p className="text-sm text-muted-foreground">{listing.units} units available</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{listing.price} STX</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Purchase History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Purchase History
            </CardTitle>
            <CardDescription>Your past purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockPurchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <div>
                    <p className="font-medium">{purchase.name}</p>
                    <p className="text-sm text-muted-foreground">{purchase.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{purchase.price} STX</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
