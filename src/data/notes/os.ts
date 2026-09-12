import type { ChapterNote } from '../../types';

export const OS_NOTES: ChapterNote[] = [
  {
    moduleId: 'os-m1',
    title: 'Module 1 · Overview of Operating System',
    sections: [
      {
        h: '1.1 Introduction & Objectives',
        items: [
          'An **operating system (OS)** is system software that acts as an intermediary between the user and computer hardware, managing resources and providing a convenient interface.',
          'Main objectives: **convenience, efficiency, extensibility** and fair resource sharing.',
          'The OS runs in **kernel mode (privileged)** and gives applications **user mode** via **system calls** (the only legal entry into the kernel).',
          'The OS provides: **process, memory, file, device** and **security management**.',
        ],
      },
      {
        h: '1.2 Evolution & Types of OS',
        items: [
          '**Batch OS** — jobs grouped into batches, processed one after another with no user interaction mid-run.',
          '**Multiprogramming OS** — many jobs held in memory; CPU switches to another job when one waits for I/O (**CPU utilisation** increases).',
          '**Multitasking (Time-sharing)** — CPU time sliced among jobs, each user feels the system is theirs alone (interactive).',
          '**Real-time OS** — guarantees response within a deadline (hard real-time for safety-critical, soft real-time for multimedia).',
          '**Distributed OS** — multiple machines over a network appear as one system to the user.',
          '**Mobile OS** — Android/iOS, optimised for touch, sensors and battery.',
        ],
      },
      {
        h: '1.3 OS Structure & Services',
        items: [
          '**Services provided**: program execution, I/O operations, file-system manipulation, communication, error detection, resource allocation, accounting, protection.',
          '**System calls** are grouped as: process control, file management, device management, information maintenance and communication.',
          '**Layered structure** — each layer uses only the layer below it (simple, but poor performance).',
          '**Monolithic kernel** — all services in one address space (fast, less robust); **microkernel** — minimal kernel, services run as processes (robust, slower).',
          '**Dual-mode operation (User/Kernel)** handled by a **mode bit**; privileged instructions only in kernel mode.',
        ],
      },
      {
        h: '1.4 Boot, Shell & CLI',
        items: [
          '**Booting** — POST → BIOS/UEFI → boot loader (GRUB) → kernel loaded into memory → init system starts daemons/services.',
          '**Shell** — a command interpreter that wraps the kernel; **CLI** (bash, CMD, PowerShell) vs **GUI** (Windows/desktop environments).',
          'Common Linux commands: `ls`, `cd`, `cp`, `mv`, `rm`, `mkdir`, `chmod`, `ps`, `grep`, `top`; redirection `>` and pipes `|`.',
          '**User mode vs kernel mode**: user requests (open file, read, fork) become system calls that trap into the kernel.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare batch vs time-sharing vs real-time with **response time** and **CPU sharing** as the differentiators.',
          'System-call flow: user program → library → kernel trap → dispatch → return to user.',
          'Monolithic vs microkernel — one table of advantages/disadvantages is a very common 2-marker.',
          'Define operating system and state any **four functions** (resource allocation, process mgmt, memory mgmt, file mgmt).',
        ],
      },
    ],
  },
  {
    moduleId: 'os-m2',
    title: 'Module 2 · Process Management',
    sections: [
      {
        h: '2.1 Process Concepts',
        items: [
          'A **process** is a program in execution — it has a **text (code), data, heap and stack** section.',
          '**Process Control Block (PCB)** stores: PID, program counter, register state, memory limits, list of open files, scheduling info.',
          'Process states: **new → ready → running → waiting/blocked → terminated**, plus the transient ready-suspend/block-suspend states for swapping.',
          '**Context switch** saves the state of the running process and loads the next — a fixed overhead in CPU time.',
          'A process is a program **in execution**; a **thread** is the smallest unit of CPU utilisation within a process.',
        ],
      },
      {
        h: '2.2 Scheduling Algorithms',
        items: [
          '**FCFS** — non-preemptive, convoy effect, average waiting time high; formula: WT = start – arrival.',
          '**SJF/SRTF** — shortest job first (non-preemptive) / shortest remaining time first (preemptive); optimal average WT but requires future knowledge (**starvation**).',
          '**Round Robin** — every process gets a fixed **time quantum** (q); preemptive; **response time** excellent; performance depends on choosing q.',
          '**Priority scheduling** — lower priority may starve; solved by **aging**.',
          '**Multilevel queue / feedback queue** — processes move between queues based on CPU burst history (used in practical kernels).',
          'Metrics: **turnaround time = completion – arrival**, **waiting time = turnaround – burst**, **throughput**, **CPU utilisation**.',
        ],
      },
      {
        h: '2.3 Synchronization & Deadlock',
        items: [
          '**Race condition** — multiple processes touching shared data; solutions come from **mutual exclusion**.',
          '**Critical section problem** requirements: mutual exclusion, progress, bounded waiting.',
          '**Semaphores** — counting & binary (mutex); **wait()/signal()**; used to solve **Producer–Consumer**, **Reader–Writer**, **Dining Philosophers**.',
          '**Deadlock**: 4 necessary conditions — mutual exclusion, hold-and-wait, no preemption, circular wait.',
          'Deadlock handling: **prevention / avoidance** (Banker’s algorithm — safe state, safety sequence), **detection & recovery** (kill, rollback, resource preemption).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Numericals: compute waiting & turnaround time for FCFS, SJF, RR, priority — always draw the **Gantt chart**.',
          'State the four deadlock conditions and how **Banker’s algorithm** avoids deadlock (can request matrix work: Need = Max – Allocation).',
          'Differences: process vs thread, preemptive vs non-preemptive scheduling, mutex vs semaphore.',
          'Write the **producer–consumer** algorithm using semaphores (empty, full, mutex).',
        ],
      },
    ],
  },
  {
    moduleId: 'os-m3',
    title: 'Module 3 · Memory Management',
    sections: [
      {
        h: '3.1 Address Binding & Contiguous Allocation',
        items: [
          'Binding of instructions/data to physical memory can happen at **compile, load or run time**; run-time binding needs base/limit registers (dynamic relocation).',
          '**Logical (virtual) address** vs **physical address**; the **MMU** converts logical → physical using a relocation register.',
          '**Continuous allocation**: single partition, **fixed partitions** (internal fragmentation) or **dynamic partitions** (external fragmentation → solved by **compaction**).',
          '**Paging** removes external fragmentation by splitting memory into fixed **frames** and processes into fixed **pages**; cost is **internal fragmentation** (last page).',
          '**Page table** maps page → frame; each entry holds the frame number + status bits (valid/invalid, present, dirty).',
          '**TLB** (translation lookaside buffer) caches recent page-table entries; **effective access time** accounts for TLB hit/miss ratio.',
        ],
      },
      {
        h: '3.2 Segmentation & Virtual Memory',
        items: [
          '**Segmentation** divides a program into **logical segments** (code, data, stack) — external fragmentation returns, but segment table has base + limit (no internal fragmentation).',
          '**Virtual memory** lets a process run larger than physical memory using **demand paging** (pages loaded only on access → page fault).',
          '**Page replacement algorithms**: FIFO (Belady’s anomaly), **Optimal** (look ahead, theoretical), **LRU** (least recently used via counters/stack).',
          '**Thrashing** — excessive paging when degree of multiprogramming is too high; handled by **working-set model** and **page fault frequency** control.',
          '**Allocation policies**: fixed (min # of frames per process) vs dynamic; local vs global replacement.',
        ],
      },
      {
        h: '3.3 Framing Formulas & Terms',
        items: [
          'Page size = frame size; **logical address** split into (page number, offset); **physical address** = (frame number, offset).',
          'Effective access time = (1–h)·(access) + h·(tlb) where h is the **TLB hit ratio** — plus page-fault penalty term.',
          'Belady’s anomaly shows FIFO can give MORE faults with MORE frames; LRU & Optimal never show it.',
          'Terms: **swap in/out, swap space, backing store, page fault, dirty bit, resident set, working set**.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Numerical: given logical address, page size, page table → find physical address.',
          'Given a reference string, work out page faults for FIFO, LRU, Optimal (frame counts 3 and 4 for Belady).',
          'Page table entry content list and TLB steps are frequent 2-markers.',
          'Differentiate paging vs segmentation (at least 4 points) and internal vs external fragmentation.',
        ],
      },
    ],
  },
  {
    moduleId: 'os-m4',
    title: 'Module 4 · I/O System & Disk Scheduling',
    sections: [
      {
        h: '4.1 I/O Hardware & Interrupts',
        items: [
          'I/O devices connect via **buses** (PCIe, USB); each controller has **registers** (status, control, data) communicated by **port I/O** or **memory-mapped I/O**.',
          '**Polling** — CPU repeatedly checks status bit (busy-wait, wastes CPU vs **programmed I/O**).',
          '**Interrupt-driven I/O** — device raises interrupt; ISR runs; saves CPU when awaiting device.',
          '**DMA (Direct Memory Access)** — controller transfers data blocks straight to memory, interrupts only at end of a block (bulk transfers).',
          'Interrupts: **maskable vs non-maskable**, **trap** (software interrupt from a system call or error/exception).',
          '**Device drivers** — kernel modules that talk to controllers via a uniform **device-independent interface**.',
        ],
      },
      {
        h: '4.2 Disk Structure & Scheduling',
        items: [
          'Disk: **platters, tracks, sectors, cylinders, seek time, rotational latency, transfer time**; access time = seek + rotational + transfer.',
          '**FCFS** — simplest, no starvation but poor scheduling.',
          '**SSTF** — closest request first; short seeks, possible **starvation** far from head.',
          '**SCAN** — head sweeps to one end then back (elevator); **C-SCAN** — only one direction, then wraps; **LOOK/C-LOOK** — go only as far as the furthest pending request.',
          'Compare algorithms on: **total head movement, variance, starvation, predictability** (C-SCAN & C-LOOK are most uniform).',
        ],
      },
      {
        h: '4.3 Blocking/Non-blocking & Buffering',
        items: [
          '**Blocking I/O** — process waits until I/O completes; **non-blocking** — returns immediately, status polled later; **asynchronous** — process notified via signal/callback.',
          '**Buffering** — spooling (queues of output for slow devices like printers), double buffering smooths producer–consumer speed mismatch.',
          '**Polling vs interrupts vs DMA** trade-off: polling simplest but wasteful; interrupts better; DMA best for large transfers.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Numerical: total head movement for FCFS, SSTF, SCAN, C-SCAN given a request queue and initial head position.',
          'Explain DMA with a block diagram and why it beats interrupt-driven I/O for bulk transfers.',
          'State and defend which disk scheduling algorithm has no starvation and uniform waiting.',
          'Explain spooling with the printer example and how buffering is achieved.',
        ],
      },
    ],
  },
  {
    moduleId: 'os-m5',
    title: 'Module 5 · File Management',
    sections: [
      {
        h: '5.1 Files & Directory Structure',
        items: [
          '**File** is a named collection of related information kept in **secondary storage**; attributes: name, identifier, type, location, size, protection, timestamps.',
          '**File operations**: create, open, read, write, seek, delete, truncate — each has an open-file table entry (open handles).',
          '**Access methods**: sequential (tape-like), direct/random (index by record), indexed sequential.',
          '**Directory structures**: single-level, two-level (one per user), tree, and **acyclic graph** (shared subdirectories with links) → naming and traversal differences.',
          "**Path names**: absolute `/a/b/f`, relative `../b`; **mount points** attach file systems to the tree.",
        ],
      },
      {
        h: '5.2 File System Implementation',
        items: [
          '**Contiguous allocation** — one block chain per file, excellent sequential access, causes external fragmentation & limited file growth.',
          '**Linked allocation** — each block points to next; no fragmentation, but slow random access and pointer overhead.',
          '**Indexed allocation (FAT-less)** — an index block holds pointers to all data blocks; supports direct access; big files need multi-level index.',
          '**FAT / FAT32 / NTFS / ext4** — FAT table grows with disk; ext4 uses extents + journals.',
          '**Free space management**: bit vector, linked list, **grouping & counting**; **dirty data & crash recovery** via journaling/log-structured writes.',
        ],
      },
      {
        h: '5.3 Protection & Security',
        items: [
          '**Access control**: owner, group, others (UNIX `rwx` bits), or **ACLs** per user.',
          '**Protection domains** (user/process domain pairing) and the **access matrix** (subject × object) with copy/owner rights propagation.',
          '**Authentication** (password, biometrics, multi-factor) then **authorization** (who may access what).',
          '**Encryption** at rest and in transit; **backup** strategies (full, incremental, differential) for durability.',
          'Security defences: least privilege, permission revocation lists, intrusion detection, sandboxing.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare contiguous vs linked vs indexed allocation (fragmentation, access speed, growth, overhead).',
          'Directory structure diagrams — draw single, two-level, tree (labelled) — common 4-marker.',
          'Convert UNIX `rwxr-x---` into octal and state who can do what.',
          'Explain mounting, the access matrix, and how ACLs differ from UNIX permissions.',
        ],
      },
    ],
  },
];