const colors = ["#A6F7E2", "#B79BFF", "#FFE5A5", "#C7FFA5", "#F8A5FF"];

export const getCarouselCardColor = (index: number) => {
  return colors[index % colors.length];
};
