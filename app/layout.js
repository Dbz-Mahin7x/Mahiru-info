import "./globals.css";
import 'aos/dist/aos.css'

export const metadata = {
  title: "Mahiru Shiina - Mahin's Wife 🎀",
  description: "Mahiru is my wife, period. The story of me and Mahiru Shiina is a tale of endless love. We are an inseparable couple, loving each other in such a deep and caring way. I always feel that my life has been so meaningful ever since Mahiru came into my life. Every day with her is a day filled with happiness, and I would do anything to make her happy. Mahiru, my beloved wife, is the one who always fills my days with warmth and love. Every time she cooks, I always say, 'This is the most delicious food in the world.' I know very well how much she pays attention to detail in everything, even in the meals she prepares. Not only that, Mahiru often surprises me with new recipes, and I'm always the first tester. I love every moment we spend together. Our lives are filled with extraordinary little habits. When Mahiru studies, I'm always by her side, being a timer that reminds her to take breaks.",
  icons: {
    icon: "https://cdn.rafled.com/anime-icons/images/RIhvIEOjHsHOlo1rsnLQGZDaVJyUuJd9.jpg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Inter:wght@700&family=Varela+Round&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}