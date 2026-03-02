import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Emir Ulusoy — Software Developer',
  description:
    'Software Developer with a background in game programming, backend development, cloud infrastructure, and CI/CD automation. Based in Stockholm.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
