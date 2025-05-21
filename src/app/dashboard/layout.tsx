import { ThemeProviderDashboard } from '@/context/ThemeProviderDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: 'Dashboard - %s',
    default: 'Dashboard',
  },
  description: 'Área administrativa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProviderDashboard>{children}</ThemeProviderDashboard>;
}
