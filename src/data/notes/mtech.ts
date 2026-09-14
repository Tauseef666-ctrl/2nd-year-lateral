import type { ChapterNote } from '../../types';

export const MTECH_NOTES: ChapterNote[] = [
  {
    moduleId: 'mtech-m1',
    title: 'Module 1 · Introduction to Multimedia',
    sections: [
      {
        h: '1.1 Multimedia Foundations',
        items: [
          '**Multimedia** = integrated presentation of two or more media types: text, graphics, audio, video, animation — delivered interactively via a computer.',
          '**Media types**: **text** (fonts, hypertext), **graphics/images** (bitmap vs vector), **audio** (sampled sound), **video** (moving frames), **animation** (synthetic motion).',
          '**Characteristics**: digitised media, compression needed, interactivity, virtual reality, synchronicity between streams (lip-sync).',
          '**Hypermedia/hypertext**: nodes + links for non-linear navigation (WWW, HTML, authoring tools).',
          '**Applications**: e-learning, entertainment (games), digital presentations, advertising, simulators, telemedicine, CAD/CAM visualisation, information kiosks.',
          '**MM system presentational choices**: off-line (CD/DVD) vs online (streaming); storage and bandwidth constraints shape the design.',
        ],
      },
      {
        h: '1.2 Hardware & Software Components',
        items: [
          '**Hardware**: fast CPU, large RAM, **sound card** (ADC/DAC + mixer), **graphics card** (GPU acceleration), high-capacity storage, CD/DVD, capture devices (scanner, digital camera, microphone, tablet), output (monitor, speakers, projector).',
          '**Audio capture**: **sampling rate** (44.1 kHz CD quality) + **quantisation** (bit depth 8/16 bit) determine fidelity and file size.',
          '**Video capture**: frame rate (fps), resolution, colour depth; capture cards do analog→digital conversion.',
          '**Software categories**: text processors, image editors (Photoshop, GIMP), audio tools (Audacity), video editors (Premiere), animation tools (Blender), authoring systems.',
          '**Authoring paradigms**: programming-based, flowline/icon-based, timeline-based, card/script-based — choose per content type.',
          'Multimedia project lifecycle: planning → design → authoring → testing → delivery.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define multimedia; classify the media types.',
          'List hardware and software requirements for a multimedia system.',
          'What is hypertext vs hypermedia?',
          'Explain sampling and quantisation in digitising audio.',
          'Describe the stages of a multimedia production.',
        ],
      },
    ],
  },
  {
    moduleId: 'mtech-m2',
    title: 'Module 2 · Basic Compression Techniques',
    sections: [
      {
        h: '2.1 Lossy vs Lossless Compression',
        items: [
          '**Compression** removes redundancy/senseless data to reduce storage and bandwidth. Ratio = original size / compressed size.',
          '**Lossless**: output decompresses to exact original — used for text, executables, medical data (ZIP, PNG, GIF, Huffman, RLE).',
          '**Lossy**: some acceptable quality loss for much better ratios — used for audio/video/images (JPEG, MPEG, MP3).',
          '**Redundancy types**: spatial, temporal, inter–intra-frame, statistical, psycho-acoustic/perceptual.',
          'Metric: trade-off among **compression ratio, quality (PSNR) and speed**; lossy works by perceptual irrelevance.',
        ],
      },
      {
        h: '2.2 Algorithms & Standards',
        items: [
          '**Run-Length Encoding (RLE)** — represent runs of repeated values (e.g., 000013 = run) — simple, lossless, great for flat-colour images.',
          '**Huffman coding** — variable-length codes, shorter codes for frequent symbols; entropy-based, lossless; yields prefix-free codes.',
          '**JPEG** (image): DCT → quantisation (lossy) → zig-zag scan → RLE + Huffman/arithmetic; colour space YCbCr; quality factor trades size.',
          '**MPEG** (video): I/P/B frames — Intra (spatial), Predicted (motion estimation), Bi-directional; inter-frame temporal redundancy; GoP structure.',
          '**MP3 (audio)**: perceptual/psycho-acoustic coding — mask out inaudible frequencies; layered MPEG audio (layer III = MP3).',
          'Vector quantisation, LZW and fractals as additional techniques (theory-level).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare lossy and lossless compression with examples.',
          'Explain the JPEG encoding pipeline step by step.',
          'Describe I, P and B frames in MPEG.',
          'How does RLE compress and when is it effective?',
          'Short notes on Huffman coding; calculate simple bits saved.',
        ],
      },
    ],
  },
  {
    moduleId: 'mtech-m3',
    title: 'Module 3 · Content Development & Distribution',
    sections: [
      {
        h: '3.1 DTP Tools & Design',
        items: [
          '**DTP (Desktop Publishing)**: CorelDRAW, Adobe InDesign/PageMaker, QuarkXPress, Publisher — combine text + graphics into print/publish-ready documents.',
          '**Core tasks**: page layout, margins/columns, master pages, typography (fonts, kerning, leading, tracking), image import (TIFF/EPS/PNG), colour models (CMYK for print, RGB for screen), colour separation.',
          '**CorelDRAW basics**: vector drawing — shapes, bezier curves, text tool, fills/outlines, effects (contour, blend, extend), export to PDF/HTML.',
          'Design principles: contrast, alignment, proximity, balance, consistency; proofing before printing.',
        ],
      },
      {
        h: '3.2 Animation & Special Effects',
        items: [
          '**Animation** = rapid display of frames creating motion (24 fps film, 30 fps video); **2D** (frame-by-frame, tweening) vs **3D** (modelling, rigging, rendering).',
          '**Tools**: Adobe Animate (Flash), Blender, Autodesk Maya/3ds Max, Toon Boom; **tweening**: keyframes + in-between interpolation.',
          '**Special effects (VFX)**: chroma key (green screen), compositing, motion graphics, particles, morphing, motion capture.',
          '**CGI pipeline**: modelling → texturing → lighting → animation → rendering → compositing.',
          '**Distribution channels**: web (HTML5/video players), CD/DVD, broadcast, OTT/streaming; DRM and rights management.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'What is DTP? Name tools and core features used in page layout.',
          'Explain 2D tweening vs frame-by-frame animation.',
          'List the steps of a basic 3D animation pipeline.',
          'How is green-screen / chroma-key effect produced?',
          'Describe multimedia distribution methods on the web.',
        ],
      },
    ],
  },
  {
    moduleId: 'mtech-m4',
    title: 'Module 4 · Introduction to Digital Imaging',
    sections: [
      {
        h: '4.1 Digital Images',
        items: [
          '**Pixel** = smallest picture element; image = 2D grid of pixels (raster) — width × height × colour depth gives file size.',
          '**Resolution & DPI**: screen vs print sharpness; megapixels of capture devices.',
          '**Colour models**: RGB (additive, screen), CMYK (subtractive, print), HSL/HSV, grayscale, indexed colour.',
          '**Colour depth**: 1-bit (B/W), 8-bit (256 greys/colours), 24-bit true colour (16.7 M colours), 32-bit (with alpha).',
          '**Raster vs Vector**: raster = pixel-based, photo-realistic, loses quality on scaling; vector = paths/primitives, infinitely scalable, small files (logos, fonts).',
          'Formats: BMP (raw, large), JPEG (lossy photo), PNG (lossless, alpha), GIF (256-colour animation), TIFF (print), SVG/PDF (vector).',
        ],
      },
      {
        h: '4.2 Graphic Design Workflow',
        items: [
          '**Design process**: brief → research → wireframe/sketch → digital comp (Photoshop/Illustrator/Canva/Corel) → review → final export.',
          '**Principles**: hierarchy, balance, contrast, repetition, white space, alignment, colour psychology; grids and golden ratio.',
          '**Typography**: choose fonts for readability, create a scale, contrast pairs; ensure consistent spacing.',
          '**Export & delivery**: resolution for print (300 DPI) vs web (72 DPI, WebP/PNG), colour profiles; accessibility (contrast ratios), alt text.',
          'Tools: Photoshop (photomanipulation), Illustrator (vector), CorelDRAW (layout/vector), Canva/Figma (UI/social).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Calculate the file size of an uncompressed image given dimensions and depth.',
          'Differentiate raster and vector graphics; give formats for each.',
          'Explain RGB and CMYK colour models and their use.',
          'Name the GUI photo-editing steps to resize and crop an image.',
          'Describe essential design principles for a poster/logo.',
        ],
      },
    ],
  },
];