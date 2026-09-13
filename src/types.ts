export interface NavItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface HeaderState {
  isScrolled: boolean;
  scrollY: number;
  isMobileMenuOpen: boolean;
  isUserProfileOpen: boolean;
  forcedShrink: boolean;
  isEdgeToEdge: boolean;
  viewMode: 'responsive' | 'mobile-mock' | 'desktop-mock';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
