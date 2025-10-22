import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useWallet } from '@/contexts/WalletContext';
import { toast } from '@/hooks/use-toast';

interface ListItemModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ListItemModal = ({ open, onOpenChange }: ListItemModalProps) => {
  const { isConnected } = useWallet();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    units: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      toast({
        title: "Connect wallet",
        description: "Please connect your wallet to list items",
        variant: "destructive",
      });
      return;
    }

    console.log('List item - Smart contract call placeholder:', formData);
    toast({
      title: "Item listed",
      description: "Your item has been listed successfully",
    });

    // Reset form
    setFormData({ name: '', description: '', price: '', units: '' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>List Item for Sale</DialogTitle>
          <DialogDescription>
            Add your item to the marketplace. Fill in all details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Product name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your item..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price (STX)</Label>
              <Input
                id="price"
                type="number"
                placeholder="0.00"
                step="0.01"
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="units">Units</Label>
              <Input
                id="units"
                type="number"
                placeholder="0"
                min="1"
                value={formData.units}
                onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" variant="hero" size="lg">
            List Item
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ListItemModal;
