import type { Product } from '@/types';
import { Rating } from './rating';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  variant?: 'default' | 'compact';
}

export function ProductCard({ product, className, variant = 'default' }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={cn('group cursor-pointer', className)}>
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
          <span className="text-4xl">🪑</span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
              NEW
            </span>
          )}
          {product.isSale && discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className={cn(
          'font-medium text-primary group-hover:text-primary/70 transition-colors',
          variant === 'compact' ? 'text-sm' : 'text-base'
        )}>
          {product.name}
        </h3>

        <Rating rating={product.rating} />

        <div className="flex items-center gap-2">
          <span className={cn(
            'font-semibold',
            variant === 'compact' ? 'text-sm' : 'text-lg'
          )}>
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {variant !== 'compact' && (
          <p className="text-xs text-muted-foreground">
            ({product.reviewCount} reviews)
          </p>
        )}
      </div>
    </div>
  );
}