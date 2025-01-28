### `pptx-generator-pro`

---

### Overview

`pptx-generator-pro` is a modern and reusable solution for generating PowerPoint presentations dynamically using React and the powerful `pptxgenjs` library. This project is perfect for automating the creation of slide decks, reports, or pitch presentations using structured data. With customizable layouts, themes, and reusable components, you can save time and effort while maintaining a professional design.

---

### Features

- **Dynamic Slide Generation**: Automatically generate slides from structured JSON data.
- **Customizable Layouts**: Easily style and format slides with custom text, shapes, and themes.
- **Powerful Integration**: Built with React and TypeScript for maintainable, scalable development.
- **Automated File Downloads**: Exports `.pptx` files ready for download directly from the browser.
- **Reusable Components**: Modular design for easy integration into other projects.

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pptx-generator-pro.git
   cd pptx-generator-pro
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

### Usage

1. **Define Your Slide Data**:
   Create an array of slide objects, with each object containing a `title` and `body`. Example:

   ```ts
   export const slides = [
     {
       title: "Introduction",
       body: "This is an example of dynamically generated content for a PowerPoint slide.",
     },
     {
       title: "Features",
       body: "- Dynamic generation\n- Customizable layouts\n- Automated downloads",
     },
   ];
   ```

2. **Use the `DownloadButton` Component**:
   Import the `DownloadButton` component and pass the slide data as a prop:

   ```tsx
   import DownloadButton from "@/components/DownloadButton";
   import { slides } from "@/data/slides";

   export default function App() {
     return (
       <div className="container">
         <h1>Dynamic PowerPoint Generator</h1>
         <DownloadButton slides={slides} />
       </div>
     );
   }
   ```

3. **Generate and Download the Presentation**:
   Click the "Download PPTX" button to generate and download the `.pptx` file.

---

### File Structure

```
/app
  /components
    DownloadButton.tsx   # Core component for generating the PPTX file
  /data
    slides.ts            # Example data for slides
/pages
  index.tsx              # Main page demonstrating usage of the component
```

---

### Example: Generating a Presentation

```tsx
export const slides = [
  {
    title: "Welcome",
    body: "This presentation was dynamically generated using React and pptxgenjs!",
  },
  {
    title: "Why Use pptx-generator-pro?",
    body: `
- Save time by automating presentation creation.
- Generate slides dynamically from any dataset.
- Easily customize layouts, colors, and themes.
    `,
  },
  {
    title: "Get Started",
    body: "Clone the repo, define your slides, and use the <DownloadButton /> component!",
  },
];
```

---

### Dependencies

- **React**: Component-based UI framework.
- **TypeScript**: Adds type safety to the codebase.
- **pptxgenjs**: JavaScript library for generating PowerPoint presentations.

---

### Contributing

Contributions are welcome! If you find a bug or have a feature request, feel free to open an issue or submit a pull request.

---

### License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### Author

Created by **[Nitish Ahuja](https://github.com/nitishahuja)** – feel free to reach out for feedback or collaboration!
