import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js Rendering Demo</title>

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
