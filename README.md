# Software and Music Portfolio

A modern, responsive portfolio website built with Next.js, featuring a dynamic project case study system and an integrated music showcase.

## Project Architecture

This project is a Next.js application using the App Router. It utilizes MDX for content management and Zod for data integrity.

### Directory Structure

* **/content/projects/**: Contains `.mdx` files for individual project case studies.
* **/src/app/**: Core routing and page components.
    * **/projects/**: The software portfolio listing page.
    * **/projects/[slug]/**: Dynamic route for individual project case studies.
    * **/music/**: The music portfolio page.

* **/src/components/**: Modular UI elements.
    * **/ui/**: Low-level reusable components (Cards, Icons, Video players).
    * **/projects/**: Page specific components.

* **/src/lib/**: Utility functions and data fetching logic (e.g., MDX parsing and Zod schemas).

* **/src/data/**: Static JSON data files for music tracks and general skillsets.

* **/public/**: Static assets including project thumbnails, PDFs, and audio files.

## Core Technologies

* **Framework**: Next.js (App Router)
* **Styling**: Tailwind CSS
* **Content**: MDX (via `next-mdx-remote`)
* **Validation**: Zod (Schema-based frontmatter validation)
* **Icons**: Lucide-react and custom SVG components

## Key Systems

### Music Showcase

The music page utilizes a centralized JSON data structure (`src/data/music.json`) to manage track listings. It features a custom `TrackCard` component designed to handle audio previews and external streaming links.

### Project Case Studies

Projects are authored in MDX. The system uses a centralized library in `src/lib/mdx.js` to parse file system content. Data integrity is enforced via a Zod schema to ensure all projects have the required metadata (Title, Date, Demo Image) before rendering.

### Responsive Filtering

The software portfolio includes a client-side filtering system. It extracts unique tags from the project metadata to allow users to sort projects by technology or category.

## Development

### Prerequisites

* Node.js
* npm

### Installation

```bash
npm install

```

### Running Locally

```bash
npm run dev

```

### Build and Deployment

The site is designed for static optimization.

```bash
npm run build

```

## Maintenance Guidelines

1. **Adding Projects**: Create a new `.mdx` file in `/content/projects/`. Ensure the frontmatter matches the schema defined in `src/lib/mdx.js`.
2. **Updating Music**: Modify `src/data/music.json` to add new tracks or update existing streaming links.
3. **UI Consistency**: Use the custom MDX components defined in `src/components/mdx-components.js` to maintain visual consistency across all case studies.
