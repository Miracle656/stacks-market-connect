import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/sampleProducts';

const Explore = () => {
  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Explore Products</h1>
          <p className="text-xl text-muted-foreground">
            Discover digital goods and services on the Stacks blockchain
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
