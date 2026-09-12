import type { ChapterNote } from '../../types';

export const FOSS_NOTES: ChapterNote[] = [
  {
    moduleId: 'foss-m1',
    title: 'Module 1 · Introduction to FOSS',
    sections: [
      {
        h: '1.1 Concepts',
        items: [
          '**FOSS = Free and Open Source Software**; “Free” refers to freedom (not price) — **four freedoms** (Stallman): 0 run anywhere, 1 study & modify (source available), 2 redistribute copies, 3 distribute modified versions.',
          '**Open Source Definition** (OSI) — 10 criteria: free redistribution, source code, derived works, no discrimination, license must not restrict other software...',
          '**Free Software Foundation (FSF)** vs **Open Source Initiative (OSI)** — philosophical (ethical) vs pragmatic (development-method) positions.',
          '**Copyleft** — license requires derivatives to be released under the same license (GPL); **permissive** licenses allow proprietary derivatives (MIT, BSD, Apache).',
        ],
      },
      {
        h: '1.2 Benefits & Ecosystem',
        items: [
          'Lower cost, no lock-in, security via many eyeballs, rapid innovation, community support.',
          'Government adoption (Digital India, NFS) to cut licensing and build sovereignty.',
          '**Business models**: support/subscription (Red Hat), SaaS, dual-licensing, donations.',
          'Contribution model: issue trackers (GitHub/GitLab), pull requests, code review, mailing lists.',
        ],
      },
      {
        h: '1.3 Licensing in Practice',
        items: [
          '**GPL / LGPL / AGPL**, **MIT / BSD / Apache** — rights and obligations (provide source, retain notices).',
          'Compatibility concerns when mixing licenses; choosing a license for your own project.',
          'Using FOSS in commercial products — what must be preserved.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the four freedoms and the difference between free and open source.',
          'Compare copyleft vs permissive licenses with examples of each.',
          'List five benefits of FOSS for governments/education with examples (Linux, LibreOffice, Moodle, VLC).',
          'Short notes: FSF, OSI, GPL, Apache, copyleft.',
        ],
      },
    ],
  },
  {
    moduleId: 'foss-m2',
    title: 'Module 2 · Basics of Linux',
    sections: [
      {
        h: '2.1 Linux Essentials',
        items: [
          '**Linux** — Unix-like kernel (Linus Torvalds, 1991); **GNU/Linux** distribution = kernel + GNU tools + shell + applications.',
          '**Distributions**: Ubuntu/Debian (apt), Fedora/RHEL (dnf/yum), Arch (pacman), openSUSE (zypper).',
          '**Kernel role**: process scheduling, memory management, device drivers, file systems, networking.',
          '**Shell** — command line interpreter (Bash default); command structure `command options arguments`.',
        ],
      },
      {
        h: '2.2 Commands & File System',
        items: [
          'Navigation/listing: `pwd, ls -l, cd, mkdir, rmdir, cp, mv, rm -r, touch, cat, less, head/tail`.',
          'File ops & permissions: `chmod` (r/w/x, octal 755/644), `chown`, `chgrp`; **root vs normal user**; `sudo`.',
          '**FHS layout**: `/bin, /sbin, /etc, /home, /var, /usr, /tmp, /dev, /proc, /mnt`.',
          'Text tools: `grep, sed, awk, cut, sort, uniq, wc, diff`; searching: `find, locate`, piping `|` and redirection `>`, `>>`, `2>`.',
          'Processes: `ps, top, kill, jobs, fg, bg, nohup, &`; package mgmt: `apt install/update/remove`, `dpkg`.',
        ],
      },
      {
        h: '2.3 Getting Started Practically',
        items: [
          'Booting to shell, GUI vs CLI; editors: `nano`, `vi/vim` modes.',
          'Environment variables `$PATH`, `export`; shell scripts (shebang `#!/bin/bash`, variables, if/for).',
          'Simple shell script: backup files or greet based on arguments.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'List 10 Linux commands with their use (short note).',
          'Explain file permissions and write a `chmod` command for 755.',
          'Write a shell script to print numbers 1–10 or copy files matching a pattern.',
          'Describe the FHS directory purpose of `/etc`, `/var`, `/home`, `/dev`.',
        ],
      },
    ],
  },
  {
    moduleId: 'foss-m3',
    title: 'Module 3 · Programming Tools & Techniques',
    sections: [
      {
        h: '3.1 Toolchain',
        items: [
          '**Editor** → **compiler** (`gcc`) → **linker**; debugging with `gdb`; build with `make` and Makefiles (targets, dependencies, recipes).',
          '**Version control (Git)**: `init, add, commit, push/pull, branch, merge, clone, status, log, diff`; working tree vs index vs HEAD.',
          '**Processes & scripting** in shell for automation; scheduling with `cron`.',
        ],
      },
      {
        h: '3.2 Open Standards & Interoperability',
        items: [
          '**Standards**: POSIX (OS interface), LSB, open document formats **ODF**, open protocols (TCP/IP, HTTP).',
          'Portability: write once run on many platforms; avoiding proprietary lock-in.',
          '**Web stack**: Apache/Nginx, PHP/Node/Python, MySQL — as open tools powering the web.',
        ],
      },
      {
        h: '3.3 Quality & Collaboration',
        items: [
          'Code reviews, testing (unit), documentation, bug tracking.',
          'Continuous integration (GitHub Actions/GitLab CI) in FOSS projects.',
          'Release process: versioning (SemVer), changelogs.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write a simple C program compile/run with gcc and a Makefile skeleton.',
          'Explain Git workflow with 8 essential commands and their purpose.',
          'What is POSIX and why does open standards matter for FOSS?',
          'List GNU tools you used in a build (gcc, make, gdb, ld).',
        ],
      },
    ],
  },
  {
    moduleId: 'foss-m4',
    title: 'Module 4 · FOSS Case Studies',
    sections: [
      {
        h: '4.1 Infrastructure & Languages',
        items: [
          '**Linux kernel** — largest collaborative FOSS project; **Apache/Nginx** web servers power most sites.',
          '**MySQL/MariaDB, PostgreSQL** — open databases; **Python, PHP, Node.js, Go** — open languages & runtimes.',
          '**GNU/Linux in cloud & mobile**: Android (Linux kernel), cloud servers.',
        ],
      },
      {
        h: '4.2 Desktop & Education',
        items: [
          '**LibreOffice** — ODF office suite; **GIMP/Inkscape** — graphics; **Firefox** — browser; **VLC** — media.',
          'Education: **Moodle** LMS, **Jupyter**, R — open teaching/research tools.',
          'India case: **Bharat Operating System Solutions (BOSS)** Linux, e-governance run on postgres/apache stacks.',
        ],
      },
      {
        h: '4.3 Industry / Course Usage',
        items: [
          '**GitHub/GitLab** — open collaboration platforms; `git` is the industry VCS.',
          'Companies building business on FOSS: Red Hat/IBM, SUSE, Canonical (Ubuntu), Elastic, GitLab.',
          'Contribute lifecycle: fork → branch → PR → review → merge; real cv examples.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Pick any 2 FOSS projects and explain their history, licence and impact.',
          'Explain how open standards benefit Indian e-governance (ODF, Linux servers).',
          'Short notes: LibreOffice, Moodle, BOSS Linux, Apache.',
          'How would you contribute to an open-source project on GitHub? Step list.',
        ],
      },
    ],
  },
];