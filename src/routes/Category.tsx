import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { ErrorMessage } from '@/components/feedback';
import { sortOptions } from '@/config';
import { Container, Main, Section } from '@/components/ui/Semantic';

import ProductCard from '@/features/products/ProductCard';
import FilterSortModal from '@/features/filter-sort/FilterSortModal';
import FilterSortBar from '@/features/filter-sort/FilterSortBar';
import ProductSkeleton from '@/features/products/ProductSkeleton';
import Button from '@/components/ui/Button';
import type { ProductCard as ProductCardData } from '@/types/products';

import { useAppDispatch, useAppSelector } from '@/stores/core/hooks';
import { selectIsModalOpen, selectResultsNumber } from '@/stores/modal/selectors';
import { openSortFilterModal } from '@/stores/modal/slice';
import { selectProductsError, selectProductsFilters, selectProductsLoading, selectProductsResponse } from '@/stores/products/selectors';

import { fetchProducts } from '@/stores/products/thunks';
import { buildProductFilterQuery } from '@/utils/buildProductFilterQuery';

export default function Category() {
  const dispatch = useAppDispatch();
  const { category } = useParams<{ category: string }>();

  const [localSort, setLocalSort] = useState<string>('availability');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [page, setPage] = useState(1);

  const products = useAppSelector(selectProductsResponse);
  const loading = useAppSelector(selectProductsLoading);
  const error = useAppSelector(selectProductsError);
  const filters = useAppSelector(selectProductsFilters);
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const resultsNumber = useAppSelector(selectResultsNumber);

  const toggleModal = () => dispatch(openSortFilterModal(false));

  const fetchWithParams = useCallback(() => {
    const filterQuery = buildProductFilterQuery(selectedFilters);

    dispatch(
      fetchProducts({
        category,
        sort: localSort,
        page: 1,
        filters: filterQuery,
      }),
    );
    setPage(1);
  }, [dispatch, category, localSort, selectedFilters]);

  useEffect(() => {
    fetchWithParams();
  }, [fetchWithParams]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    const filterQuery = buildProductFilterQuery(selectedFilters);

    dispatch(
      fetchProducts({
        category,
        sort: localSort,
        page: nextPage,
        filters: filterQuery,
        append: true,
      }),
    );
    setPage(nextPage);
  };

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

      <Container fluid className="flex justify-center items-center py-12">
        <Button onClick={handleLoadMore} className="text-center py-4 font-clash text-xl cursor-pointer px-8">
          Load More
        </Button>
      </Container>

      <FilterSortModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        sortOptions={sortOptions}
        filterGroups={filters}
        onSortChange={setLocalSort}
        onFilterChange={(filtersObj) => setSelectedFilters(filtersObj)}
        sortSelection={localSort}
        itemCount={resultsNumber}
      />
    </Main>
  );
}
