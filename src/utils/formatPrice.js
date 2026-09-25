export const formatPrice = (priceStr) => {
  if (!priceStr) return '';
  const str = String(priceStr);
  
  // Strip out any existing "FCFA" / "Franc" text so we only format the number
  const numOnly = str.replace(/[^0-9]/g, '');
  if (!numOnly) return str; // If no digits, return as-is
  
  // Add commas every 3 digits
  return numOnly.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
