export const formatPrice = (priceStr) => {
  if (!priceStr) return '';
  const str = String(priceStr);
  
  // Format numbers with commas (e.g., 190000000 -> 190,000,000)
  const formatted = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  // If there's a number but no currency mentioned, append FCFA
  if (!formatted.toLowerCase().includes('fcfa') && !formatted.toLowerCase().includes('franc') && formatted.match(/\d/)) {
    return `${formatted} FCFA`;
  }
  
  return formatted;
};
