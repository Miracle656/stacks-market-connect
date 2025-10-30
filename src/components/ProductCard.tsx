import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart, Product } from '@/contexts/CartContext';
import { useWallet } from '@/contexts/WalletContext';
import { toast } from '@/hooks/use-toast';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isConnected } = useWallet();

  const handleAddToCart = () => {
    if (!isConnected) {
      toast({
        title: "Connect wallet",
        description: "Please connect your wallet to add items to cart",
        variant: "destructive",
      });
      return;
    }
    addToCart(product, quantity);
    setQuantity(1);
  };

  const handleBuyNow = () => {
    if (!isConnected) {
      toast({
        title: "Connect wallet",
        description: "Please connect your wallet to purchase",
        variant: "destructive",
      });
      return;
    }
    console.log('Buy now - Escrow contract call placeholder:', {
      product: product.id,
      quantity,
      totalPrice: product.price * quantity,
    });
    toast({
      title: "Purchase initiated",
      description: "Escrow contract call would be triggered here",
    });
  };

  const incrementQuantity = () => {
    if (quantity < product.units) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-[var(--shadow-glow)] group">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#fc6432]">{product.price} STX</span>
          <span className="text-sm text-muted-foreground">{product.units} available</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (val >= 1 && val <= product.units) {
                setQuantity(val);
              }
            }}
            className="w-20 text-center"
            min={1}
            max={product.units}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={incrementQuantity}
            disabled={quantity >= product.units}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1 gap-2" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
        <Button className="flex-1 bg-[#fc6432]" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
