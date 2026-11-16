<div align="center">

<img src="assets/home%20assets/Untitled__2_-removebg-preview.png" alt="MAATE Learning Solutions logo" width="320">

# MAATE Learning Solutions

**A responsive static website for a soft-skills, grooming and corporate training institute. Built for a real client and live in production.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37?style=for-the-badge)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Client Project](https://img.shields.io/badge/Client_Project-Live-brightgreen?style=for-the-badge)

[Features](#features) · [Tech Stack](#tech-stack) · [Getting Started](#getting-started) · [Project Structure](#project-structure)

</div>

---

## Overview

This is a static website I built for a client, MAATE Learning Solutions, and it is live in production. The site presents the institute's training services for corporate professionals and college students, shows photo galleries of past sessions and student testimonials, and has a contact form that sends enquiries by email. It is written in plain HTML, CSS and JavaScript, with no build step or framework.

## Features

- **Home page** (`index.html`)
  - Hero section and an "About Us" dropdown in the navbar
  - Overview of the services offered (soft-skill, college, corporate and POSH training)
  - Downloadable PDF brochure ("Learn more about our learning sessions")
  - Six auto-playing photo slideshows of past sessions (e.g. College to Corporate Training, LinkedIn Workshop, Staff Training at UCO Bank) with previous/next controls
- **Services page** (`services.html`): training programmes grouped into *Corporate Training* and *For Educational Institutions*, each with an image card
- **Testimonials page** (`testimonials.html`): flip cards for nine participants. Clicking a card enlarges it and flips it to show the full testimonial, and a **Back** button returns it.
- **Contact page** (`contact_us.html`): enquiry form (name, phone, email, company, subject, question) that sends messages through [EmailJS](https://www.emailjs.com/) without a backend
- Shared footer with quick links, contact details and a LinkedIn link
- Separate stylesheets for each page
- Meta descriptions and a favicon on every page, and session photos resized for faster loading

## Tech Stack

| Area | Technology |
| ---- | ---------- |
| Markup | HTML5 |
| Styling | CSS3 (one stylesheet per page) |
| Scripting | Vanilla JavaScript (slideshows, dropdown, flip cards) |
| Icons | Font Awesome 5 (CDN) |
| Contact form | EmailJS browser SDK (CDN) |

## Getting Started

### Prerequisites

- A modern web browser
- *(Optional)* a local static server, such as the VS Code Live Server extension or Python

### Run locally

```bash
git clone https://github.com/Swayam7024/MAATE.git
cd MAATE
```

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

### Contact form configuration

`contact_us.html` initialises EmailJS with a public key and sends messages through a service ID and template ID. To use your own EmailJS account, replace these three values in `contact_us.html`.

## Project Structure

```
MAATE/
├── index.html              # Home page
├── services.html           # Services page
├── testimonials.html       # Testimonials (flip cards)
├── contact_us.html         # Contact form (EmailJS)
├── neha.js                 # About Us dropdown and photo slideshows
├── testimonials.js         # Flip-card behaviour for the testimonials page
├── css/
│   ├── neha.css            # Home page styles
│   ├── services.css
│   ├── testimonials.css
│   └── contact_us.css
└── assets/
    ├── home assets/        # Logo, session photos, service images, PDF brochure
    └── testimonials/       # Testimonial portrait photos
```

## Future Improvements

- Serve the photos in WebP format with `srcset` for even faster page loads
- Add Open Graph tags for nicer link previews on social media
- Add descriptive `alt` text to all images and improve keyboard accessibility of the flip cards

## Author

**Swayam Khantwal**: [github.com/Swayam7024](https://github.com/Swayam7024)

## License

© 2026 Swayam Khantwal. All rights reserved.

The content, images and branding on this website belong to the client, MAATE Learning Solutions. They may not be reused without the client's permission.
