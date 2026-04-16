import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lp.egconcursaai.com"),
  title: {
    default: "Concursa AI – Inteligencia Artificial para Concurso Publico | Seja Aprovado com IA",
    template: "%s | Concursa AI",
  },
  description:
    "A primeira Inteligencia Artificial feita para concurso publico. Gere resumos, simulados, flashcards e planeje seus estudos com IA. Seja aprovado no proximo concurso.",
  keywords: [
    "inteligencia artificial concurso publico",
    "IA para concurso",
    "estudar para concurso com IA",
    "planejador de estudos",
    "simulados com IA",
    "flashcards concurso",
    "concursa ai",
    "preparacao concurso publico",
    "aprovacao concurso",
  ],
  authors: [{ name: "EG Educacao Digital" }],
  creator: "Concursa AI",
  publisher: "EG Educacao Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lp.egconcursaai.com/",
    siteName: "Concursa AI",
    title: "Concursa AI – Inteligencia Artificial para Concurso Publico",
    description:
      "A primeira IA feita para concurseiros. Resumos, simulados, flashcards e planejamento inteligente.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Concursa AI - Inteligencia Artificial para Concurso Publico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concursa AI – Inteligencia Artificial para Concurso Publico",
    description:
      "A primeira IA feita para concurseiros. Resumos, simulados, flashcards e planejamento inteligente.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lp.egconcursaai.com/",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0c0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} bg-bg-dark`}>
      <head>
        <link rel="canonical" href="https://lp.egconcursaai.com/" />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Concursa AI",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "197.00",
                priceCurrency: "BRL",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "O que e o Concursa AI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "O Concursa AI e a primeira inteligencia artificial desenvolvida exclusivamente para concurso publico. Ele gera resumos, flashcards, simulados personalizados, planeja seus estudos e identifica padroes de questoes da sua banca.",
                  },
                },
                {
                  "@type": "Question",
                  name: "O Concursa AI funciona para qualquer concurso?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. O Concursa AI identifica os padroes de qualquer banca do Brasil e gera conteudo personalizado para o concurso que voce esta se preparando.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Preciso ter experiencia com tecnologia para usar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nao. O Concursa AI foi pensado para ser simples e intuitivo. Basta fazer login e comecar a usar as ferramentas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quanto tempo leva para ver resultados?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Desde o primeiro dia voce ja consegue gerar resumos, flashcards e simulados. A maioria dos usuarios reporta melhora significativa em menos de 2 semanas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qual o valor do Concursa AI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "O Concursa AI esta disponivel por apenas 3x de R$73,51, com acesso a todas as ferramentas incluidas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Como recebo o acesso apos a compra?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Imediatamente apos a confirmacao do pagamento, voce recebe o acesso no seu e-mail.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Concursa AI",
              url: "https://lp.egconcursaai.com",
              logo: "https://lp.egconcursaai.com/images/logomarca.png",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
