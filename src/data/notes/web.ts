import type { ChapterNote } from '../../types';

export const WEB_NOTES: ChapterNote[] = [
  {
    moduleId: 'web-m1',
    title: 'Module 1 · Web Development Introduction',
    sections: [
      {
        h: '1.1 Web Basics',
        items: [
          'The **World Wide Web** is a system of interlinked hypertext documents accessed via the internet using **HTTP**.',
          '**Client–server model**: browser (client) requests, web server responds (Apache, Nginx, IIS).',
          '**URL anatomy**: `scheme://host:port/path?query#fragment` (e.g. `https://example.com:443/page?a=1#top`).',
          '**Domain names & DNS** resolve names → IP addresses; **hosting** provides the server/space.',
          '**Web browsers** render HTML/CSS/JS; rendering engines (Blink, Gecko, WebKit).',
        ],
      },
      {
        h: '1.2 HTTP Protocol',
        items: [
          '**Request/response**: methods GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH.',
          '**Status codes**: 200 OK, 201 Created, 301/302 redirects, 304 Not Modified, 400/401/403/404, 500/502/503.',
          '**Headers**: Content-Type, Content-Length, Set-Cookie, Cache-Control, Authorization.',
          '**HTTP vs HTTPS** — HTTPS adds TLS encryption (443 vs 80).',
          '**Statelessness** — solved by **cookies**, **sessions**, **tokens** (JWT).',
        ],
      },
      {
        h: '1.3 Web Development Stack',
        items: [
          '**Frontend**: HTML (structure), CSS (style), JavaScript (behaviour) — the three core languages.',
          '**Backend**: servers, logic, APIs (Node.js/PHP/Python/Java/.NET).',
          '**Database**: SQL (relational) and NoSQL; stored via backend.',
          '**Full-stack** = frontend + backend + database; **static vs dynamic** websites; **SPA vs MPA**; SSR (server-side rendering) vs CSR.',
          '**Version control (Git/GitHub)** and **deployment** of sites to web servers.',
          'Web standards body: **W3C/WHATWG**; validity via `<!DOCTYPE html>`.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define URL, DNS, HTTP and explain client–server with a diagram.',
          'List HTTP methods and common status code meanings.',
          'Difference between static and dynamic websites; frontend vs backend (short answer).',
          'Explain HTTPS handshake (why it is secure) in 4–5 lines.',
        ],
      },
    ],
  },
  {
    moduleId: 'web-m2',
    title: 'Module 2 · HTML Basics',
    sections: [
      {
        h: '2.1 Document Structure',
        items: [
          '`<!DOCTYPE html>` → `<html>` → `<head>` (meta, title, links, scripts) and `<body>`.',
          '**Elements & tags**: opening/closing tags, attributes (`href`, `src`, `alt`), self-closing tags (img, br, input).',
          '**Semantic elements**: header, nav, main, section, article, aside, footer, figure — better for SEO & accessibility.',
          '**Block vs inline elements**: div vs span, headings (`h1–h6`), lists (ul/ol/dl), p, a.',
          '**Comments** `<!-- -->`, **entities** `&amp;`, `&lt;`, `&nbsp;`.',
        ],
      },
      {
        h: '2.2 Multimedia & Tables',
        items: [
          '**Images**: `<img src alt width height loading>`; formats JPEG/PNG/GIF/SVG/WebP (use cases).',
          '**Audio/Video**: `<audio controls>`, `<video controls poster>` with `<source>` fallbacks.',
          '**Tables**: `<table><thead><tbody><tr><th><td>` plus `colspan`/`rowspan` — use for tabular data, not layout.',
          '**Links**: absolute & relative; anchor navigation (`#id`); `target="_blank"` opens new tab.',
        ],
      },
      {
        h: '2.3 Forms & Input',
        items: [
          '`<form action method>`: GET (visible params) vs POST (in body).',
          '**Input types**: text, password, email, number, date, radio, checkbox, file, hidden, submit, button, textarea, select/option.',
          '**Attributes**: `name` (sent to server), `required`, `placeholder`, `value`, `maxlength`, `pattern`, `readonly`, `disabled`.',
          '**Labels** (accessibility), **fieldsets/legends** (grouping).',
          '**Client-side validation**: HTML5 constraints + `required`; server must re-validate.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write the skeleton of a complete HTML5 page with semantic tags — classic 4-marker.',
          'Create a registration form with 6–8 different input types using POST.',
          'Difference between block and inline elements; list semantic tags.',
          'Explain GET vs POST with when each is appropriate.',
        ],
      },
    ],
  },
  {
    moduleId: 'web-m3',
    title: 'Module 3 · Cascading Style Sheets',
    sections: [
      {
        h: '3.1 Selectors & Specificity',
        items: [
          '**Ways to attach CSS**: external `<link>`, internal `<style>`, inline `style=""` (order & cascade rules).',
          '**Selectors**: element, class (`.`), id (`#`), attribute `[type=text]`, pseudo-classes `:hover :focus :nth-child`, pseudo-elements `::before ::after`.',
          '**Specificity**: inline > id > class > element; equal rules → last one wins; `!important` overrides (avoid).',
          '**Cascade & inheritance**: fonts/colors inherit; box properties do not.',
        ],
      },
      {
        h: '3.2 Box Model & Positioning',
        items: [
          '**Box model**: content → padding → border → margin; `box-sizing: border-box` includes padding in width.',
          '**Display**: block, inline, inline-block, none, flex, grid.',
          '**Positioning**: static, relative, absolute, fixed, sticky (offset relative to containing block).',
          '**Flexbox**: `display:flex`, main/cross axis, `justify-content`, `align-items`, `flex-wrap`, `flex: grow shrink basis` for layout.',
          '**Grid**: `grid-template-columns/rows`, gaps, areas — for two-dimensional layouts.',
        ],
      },
      {
        h: '3.3 Styling & Responsiveness',
        items: [
          '**Colors, units** (px, rem, em, %, vh/vw) — prefer rem for accessibility.',
          '**Typography**, gradients, shadows, borders, border-radius.',
          '**Responsive design**: media queries `@media (max-width: 768px)`, fluid grid, mobile-first.',
          '**Transitions/animations**: `transition`, `@keyframes`, `transform`.',
          '**CSS variables** `--var` and `var()`; fallbacks for browsers.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the CSS box model with a labelled diagram (4-marker).',
          'Compute specificity for `header nav a.active` vs `#nav a`.',
          'Difference between absolute and relative positioning; flex vs grid.',
          'Write a media query making a column layout stack on mobile.',
        ],
      },
    ],
  },
  {
    moduleId: 'web-m4',
    title: 'Module 4 · JavaScript',
    sections: [
      {
        h: '4.1 Language Basics',
        items: [
          '**JS** is a dynamic, interpreted, prototype-based, multi-paradigm language that runs in the browser (V8) and on servers (Node.js).',
          '**Variables**: `let` (block, mutable), `const` (block, immutable binding), `var` (function-scoped, avoid).',
          '**Data types**: number, string, boolean, null, undefined, object, symbol, bigint; `typeof` operator.',
          '**Operators**: arithmetic, comparison (`==` vs `===` — strict equality), logical, ternary, template literals `` ` ``.',
          '**Control flow**: if/else, switch, for, while, do-while.',
        ],
      },
      {
        h: '4.2 Functions & Arrays',
        items: [
          '**Function declarations vs expressions vs arrow functions** `() => {}` (lexical `this`).',
          '**Scopes**: global, function, block; **closures**; **hoisting** (var/function).',
          '**Arrays**: push/pop/shift/unshift, map, filter, reduce, forEach, slice/splice; spread `...`.',
          '**Objects**: `{key: value}`, dot/bracket access, destructuring, JSON.stringify/parse.',
          '**Strings**: template literals, methods (indexOf, substring, includes, split, replace).',
        ],
      },
      {
        h: '4.3 DOM, Events & Async',
        items: [
          '**DOM**: document tree; `document.getElementById/querySelectorAll`, create/append elements (`.innerHTML`, `.createElement`, `.textContent`).',
          '**Events**: `click`, `change`, `keyup`, `submit`; `addEventListener`; event object (target, preventDefault, stopPropagation).',
          '**Event delegation** — attach once to parent for dynamic children.',
          '**Async**: callbacks, **Promises** (resolve/reject, .then/.catch), **async/await**, `fetch()` for API calls.',
          '**LocalStorage/sessionStorage**, cookies for persistence; error handling with try/catch.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write a function that finds the largest number in an array using reduce/map.',
          'Explain `==` vs `===`, var vs let vs const (scope + hoisting).',
          'DOM manipulation: change the text/content of an element on button click (code).',
          'Compare callback, promise and async/await with a small fetch example.',
        ],
      },
    ],
  },
  {
    moduleId: 'web-m5',
    title: 'Module 5 · PHP & MySQL',
    sections: [
      {
        h: '5.1 PHP Basics',
        items: [
          '**PHP** is a server-side scripting language embedded in HTML (`<?php ?>`); runs on the web server (Apache), output becomes HTML.',
          'Variables `$x`, **superglobals**: `$_GET`, `$_POST`, `$_REQUEST`, `$_SESSION`, `$_COOKIE`, `$_SERVER`; `echo`/`print`.',
          '**Data types & operators** similar to JS/C; **arrays**: indexed, associative (`$arr["key"]`), multidimensional.',
          '**Control structures**: if/else, foreach, while — same loop logic as C.',
          '**Functions**: `function name(...)`, `return`, global/`static` variables, include/require (vs `_once`).',
        ],
      },
      {
        h: '5.2 Forms, Sessions & Server Interaction',
        items: [
          '**Form handling**: `$_POST["field"]`, `isset()`, `htmlspecialchars()` to prevent XSS.',
          '**Validation & sanitisation**: filter_var, trim, regex `preg_match`.',
          '**Sessions**: `session_start()`, `$_SESSION`, `session_destroy()` — track login state.',
          '**Cookies**: `setcookie(name, value, expire, path)`; `$_COOKIE`.',
          'File uploads `$_FILES`; **file handling**: fopen, fwrite, fgets, file_get_contents, file_put_contents.',
        ],
      },
      {
        h: '5.3 MySQL Connectivity (CRUD)',
        items: [
          '**mysqli** vs **PDO**; connect, `mysqli_query`, error handling.',
          '`SELECT ... WHERE ... ORDER BY`, `INSERT`, `UPDATE`, `DELETE`, `LIMIT` — with validation.',
          '**Prepared statements** (`prepare`, `bind_param`, `execute`) prevent **SQL injection** — always use them.',
          'Fetch rows: `fetch_assoc`, `fetch_all(MYSQLI_ASSOC)`; display as tables.',
          '**Project pattern**: form → validate → SQL (prepared) → success/error message; login using sessions.',
          'Security: hash passwords (`password_hash`), escape output, limit uploads.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write a complete PHP page that receives a form and saves it to MySQL (with prepared statements) — the big 8-marker.',
          'Explain `$_GET` vs `$_POST`; start/use/destroy a session with code.',
          'What is SQL injection and how do prepared statements stop it?',
          'Difference between include/require; cookie vs session.',
        ],
      },
    ],
  },
];