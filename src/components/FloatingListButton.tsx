import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ListItemModal from './ListItemModal';

const FloatingListButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        variant="hero"
        size="lg"
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-[var(--shadow-glow)] hover:scale-110 p-0"
      >
        <Plus className="h-6 w-6" />
      </Button>
      <ListItemModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default FloatingListButton;
