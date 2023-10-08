import { useCallback, useLayoutEffect, useState } from 'react';

const debounce = (limit: number, callback: () => void) => {
  let timeoutId: number | undefined;
  return (...args: unknown[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, limit, args);
  };
};

function getDimensionObject(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    x: rect.x,
    y: rect.y,
    right: rect.right,
    bottom: rect.bottom
  };
}

export default function useBoundingRect(limit?: number) {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
    top: number;
    left: number;
    x: number;
    y: number;
    right: number;
    bottom: number;
  } | null>(null);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  const ref = useCallback((node: HTMLDivElement) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if ('undefined' !== typeof window && node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );

      measure();

      const listener = debounce(limit ? limit : 100, measure);

      window.addEventListener('resize', listener);
      window.addEventListener('scroll', listener);
      return () => {
        window.removeEventListener('resize', listener);
        window.removeEventListener('scroll', listener);
      };
    }
  }, [node, limit]);

  return [ref, dimensions, node] as const;
}
