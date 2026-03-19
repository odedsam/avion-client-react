import { useEffect, useMemo, useState } from 'react';
import { ErrorMessage } from '@/components/feedback';
import { sortOptions } from '@/config';

import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { selectIsModalOpen } from '@/stores/modal/selectors';
import { openSortFilterModal } from '@/stores/modal/slice';
import {
  selectProductsError,
  selectProductsFilters,
  selectProductsLoading,
  selectProductsResponse,
  selectSortOption,
} from '@/stores/products/selectors';
import { Main, Section, Container } from '@/components/ui/Semantic';

import { fetchProducts } from '@/stores/products/thunks';
import { setSortSelection } from '@/stores/products';
import { buildProductFilterQuery } from '@/utils/buildProductFilterQuery';

import ProductCard from '@/features/products/ProductCard';
import FilterSortModal from '@/features/filter-sort/FilterSortModal';
import FilterSortBar from '@/features/filter-sort/FilterSortBar';
import ProductSkeleton from '@/features/products/ProductSkeleton';
import Button from '@/components/ui/Button';
import type { ProductCard as ProductCardData } from '@/types/products';

export default function Test() {
  const dispatch = useAppDispatch();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const products = useAppSelector(selectProductsResponse);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  const filters = useAppSelector(selectProductsFilters);
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const sortSelection = useAppSelector(selectSortOption);

  const itemCount = useMemo(() => products.total ?? products.products.length ?? 0, [products.products.length, products.total]);
  const filterQuery = useMemo(() => buildProductFilterQuery(selectedFilters), [selectedFilters]);
  const toggleModal = () => dispatch(openSortFilterModal(false));

  const handleSortChange = (selectedValue: string) => {
    dispatch(setSortSelection(selectedValue));
  };

  const handleShowResults = () => {
    toggleModal();
  };
  const handleFilterChange = (filtersObj: Record<string, string[]>) => setSelectedFilters(filtersObj);

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: 'ceramics',
        sort: sortSelection,
        filters: filterQuery,
      }),
    );
  }, [dispatch, filterQuery, sortSelection]);

  return (
    <Main className="w-full min-h-screen bg-white p-6">
      <Section>
        <FilterSortBar />
      </Section>

      <Section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {loading ? (
          <ProductSkeleton />
        ) : error ? (
          <ErrorMessage message="Error loading products." />
        ) : (
          (products.products as unknown as ProductCardData[]).map((product, idx: number) => (
            <ProductCard key={`${product.id}-${idx}`} product={product} />
          ))
        )}
      </Section>

      <Container className="flex justify-center items-center py-12">
        <Button className="text-center py-4 font-clash text-xl cursor-pointer px-8">Load More</Button>
      </Container>

      <FilterSortModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        sortOptions={sortOptions}
        onSortChange={handleSortChange}
        sortSelection={sortSelection}
        onFilterChange={handleFilterChange}
        filterGroups={filters}
        showAction={handleShowResults}
        itemCount={itemCount}
      />
    </Main>
  );
}
