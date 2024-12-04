import localFont from "next/font/local";

const Roboto = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Roboto/Roboto-Thin.ttf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../../public/assets/fonts/Roboto/Roboto-LightItalic.ttf",
      weight: "200",
      style: "light italic",
    },
    {
      path: "../../public/assets/fonts/Roboto/Roboto-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/assets/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/assets/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/assets/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/assets/fonts/Roboto/Roboto-BoldItalic.ttf",
      weight: "800",
      style: "bold italic",
    },
    {
      path: "../../public/assets/fonts/Roboto/Roboto-Black.ttf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-Roboto",
});

export { Roboto };
