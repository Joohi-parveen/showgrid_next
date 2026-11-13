/**
 * Header Scroll Interaction
 * Adds 'header-scrolled' class to .header when page is scrolled more than 20px.
 */
export function initHeaderScroll() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const header = document.querySelector('.header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  // Run immediately on initialization
  checkScroll();

  window.addEventListener('scroll', checkScroll, { passive: true });

  // Return cleanup function to prevent memory leaks and duplicate listeners
  return () => {
    window.removeEventListener('scroll', checkScroll);
  };
}
