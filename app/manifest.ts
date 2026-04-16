import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Concursa AI",
    short_name: "Concursa AI",
    description: "A primeira Inteligencia Artificial feita para concurso publico",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0c0a",
    theme_color: "#0d0c0a",
    icons: [
      {
        src: "/images/logomarca.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logomarca.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
