// src/hooks/useColorLoop.ts

import { useState, useCallback } from 'react';

const colors = ['blue.100', 'green.100', 'yellow.100', 'red.100', 'purple.100'];

export const useColorLoop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getNextColor = useCallback(() => {
    const color = colors[currentIndex];
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    return color;
  }, [currentIndex]);

  return getNextColor;
};
