import { useState, useCallback, useEffect } from 'react';

export interface UseCarouselOptions<T> {
  items: T[];
  initialIndex?: number;
  autoRotate?: boolean;
  autoRotateInterval?: number;
  onChange?: (index: number, item: T) => void;
}

export interface UseCarouselReturn<T> {
  currentIndex: number;
  currentItem: T;
  setCurrentIndex: (index: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
  autoRotate: boolean;
  setAutoRotate: (enabled: boolean) => void;
  totalItems: number;
}

export function useCarousel<T>({
  items,
  initialIndex = 0,
  autoRotate = false,
  autoRotateInterval = 4500,
  onChange,
}: UseCarouselOptions<T>): UseCarouselReturn<T> {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);

  const currentItem = items[currentIndex];

  const handleSetIndex = useCallback(
    (index: number) => {
      const clampedIndex = ((index % items.length) + items.length) % items.length;
      setCurrentIndex(clampedIndex);
      onChange?.(clampedIndex, items[clampedIndex]);
    },
    [items, onChange]
  );

  const goToNext = useCallback(() => {
    handleSetIndex(currentIndex + 1);
  }, [currentIndex, handleSetIndex]);

  const goToPrev = useCallback(() => {
    handleSetIndex(currentIndex - 1);
  }, [currentIndex, handleSetIndex]);

  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(goToNext, autoRotateInterval);
    return () => clearInterval(interval);
  }, [isAutoRotating, autoRotateInterval, goToNext]);

  return {
    currentIndex,
    currentItem,
    setCurrentIndex: handleSetIndex,
    goToNext,
    goToPrev,
    autoRotate: isAutoRotating,
    setAutoRotate: setIsAutoRotating,
    totalItems: items.length,
  };
}

export interface UseTabNavigationOptions {
  tabs: string[];
  initialTab?: number;
  onChange?: (tabIndex: number, tabId: string) => void;
}

export interface UseTabNavigationReturn {
  activeTab: number;
  activeTabId: string;
  setActiveTab: (index: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
  totalTabs: number;
}

export function useTabNavigation({
  tabs,
  initialTab = 0,
  onChange,
}: UseTabNavigationOptions): UseTabNavigationReturn {
  const [activeTab, setActiveTabState] = useState(initialTab);

  const setActiveTab = useCallback(
    (index: number) => {
      const clampedIndex = ((index % tabs.length) + tabs.length) % tabs.length;
      setActiveTabState(clampedIndex);
      onChange?.(clampedIndex, tabs[clampedIndex]);
    },
    [tabs, onChange]
  );

  const goToNext = useCallback(() => {
    setActiveTab(activeTab + 1);
  }, [activeTab, setActiveTab]);

  const goToPrev = useCallback(() => {
    setActiveTab(activeTab - 1);
  }, [activeTab, setActiveTab]);

  return {
    activeTab,
    activeTabId: tabs[activeTab],
    setActiveTab,
    goToNext,
    goToPrev,
    totalTabs: tabs.length,
  };
}

export interface UsePaginationOptions {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
  onChange?: (page: number) => void;
}

export interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
  startIndex: number;
  endIndex: number;
}

export function usePagination({
  totalItems,
  itemsPerPage,
  initialPage = 0,
  onChange,
}: UsePaginationOptions): UsePaginationReturn {
  const [currentPage, setCurrentPageState] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const setCurrentPage = useCallback(
    (page: number) => {
      const clampedPage = Math.max(0, Math.min(page, totalPages - 1));
      setCurrentPageState(clampedPage);
      onChange?.(clampedPage);
    },
    [totalPages, onChange]
  );

  const goToNext = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage, setCurrentPage]);

  const goToPrev = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [currentPage, setCurrentPage]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return {
    currentPage,
    totalPages,
    setCurrentPage,
    goToNext,
    goToPrev,
    startIndex,
    endIndex,
  };
}