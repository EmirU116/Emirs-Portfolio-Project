import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
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
