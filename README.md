# 1Digit Resume

1Digit Resume is a private and professional resume builder that simplifies the process of creating, updating, and sharing your resume with complete data privacy.

## Features

**Resume Building**

- Real-time preview as you type
- Multiple export formats (PDF, JSON)
- Drag-and-drop section ordering
- Custom sections for any content type
- Rich text editor with formatting support

**Templates**

- Professionally designed templates
- A4 and Letter size support
- Customizable colors, fonts, and spacing
- Custom CSS for advanced styling

**Privacy & Security**

- Complete data privacy - your information stays on your device
- No account required for basic use
- Self-hosting available for full control
- No tracking, no ads, no hidden costs

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Docker (optional, for PDF export)

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Set up your environment variables by copying `.env.example` to `.env`
3. Start the development server:
   ```bash
   pnpm dev
   ```

### Docker Setup

For the full development experience with PDF export:

```bash
# Start PostgreSQL and Browserless
docker compose -f compose.dev.yml up -d postgres browserless
```

## Usage

1. Open your browser to `http://localhost:3001`
2. Create a new resume or choose a template
3. Fill in your details
4. Export to PDF or share your resume

## Self-Hosting

1Digit Resume can be self-hosted on your own infrastructure:

1. Build the application: `pnpm build`
2. Set up your PostgreSQL database
3. Configure environment variables
4. Deploy to your preferred hosting platform

## License

MIT License - see LICENSE file for details.

## Support

For support and inquiries, contact 1Digit Technology at contact@1digit.tech
