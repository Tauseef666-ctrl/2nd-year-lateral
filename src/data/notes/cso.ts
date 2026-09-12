import type { ChapterNote } from '../../types';

export const CSO_NOTES: ChapterNote[] = [
  {
    moduleId: 'cso-m1',
    title: 'Module 1 · Structure of Computers',
    sections: [
      {
        h: '1.1 Functional Units',
        items: [
          'A computer is built of **five functional units**: input unit, memory unit, arithmetic & logic unit (ALU), output unit, control unit.',
          '**CPU** = ALU + control unit + registers; it fetches, decodes and executes instructions.',
          '**Memory hierarchy** (fast→slow, expensive→cheap): registers → cache (L1/L2/L3) → primary (RAM) → secondary (SSD/HDD).',
          '**Von Neumann model** — stored-program computer: program and data in the same memory; sequential fetch–execute.',
          '**Harvard model** — separate instruction/data memories (used in some microcontrollers) for speed/parallelism.',
        ],
      },
      {
        h: '1.2 Primary vs Secondary Storage',
        items: [
          '**Primary (RAM/ROM/cache)**: fast, volatile (RAM), directly accessed by CPU; byte/word addressable.',
          '**Secondary (disk/SSD)**: non-volatile, high capacity, cheap, slower; used for bulk storage.',
          '**Units**: bit, byte(8b), word; KB/MB/GB/TB; access time & cost trade-off.',
          '**Associative vs direct-mapped vs set-associative cache** mapping (overview).',
        ],
      },
      {
        h: '1.3 Number Systems & Codes',
        items: [
          'Binary, octal, decimal, hexadecimal conversions (base 2/8/10/16) — division/multiplication method.',
          '**Binary arithmetic**: add/subtract; **1’s & 2’s complement** for negative numbers; overflow detection.',
          '**BCD**, **Excess-3**, **Gray code**, ASCII / UNICODE (character codes).',
          'Fixed-point and floating-point representation (IEEE 754 overview — sign, exponent, mantissa).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Draw and explain the five functional units of a computer.',
          'Convert (2F.A)₁₆, (57)₈, (101101)₂ to decimal and vice versa.',
          'Subtract using 1’s/2’s complement with a worked example.',
          'Differences: RAM vs ROM, Von Neumann vs Harvard, primary vs secondary storage.',
        ],
      },
    ],
  },
  {
    moduleId: 'cso-m2',
    title: 'Module 2 · Logic Gates & Simplification',
    sections: [
      {
        h: '2.1 Basic Gates',
        items: [
          '**AND, OR, NOT** — symbols, truth tables and Boolean expressions.',
          '**Derived gates**: NAND, NOR (universal — any gate can be built from them alone), XOR (=1 for odd 1s), XNOR.',
          '**Boolean laws**: commutative, associative, distributive, identity, complement, **De Morgan’s** — `(A·B)‾ = A‾ + B‾`, `(A+B)‾ = A‾·B‾`.',
          '**Universal gate realisation**: show AND/OR/NOT using only NAND and only NOR.',
        ],
      },
      {
        h: '2.2 Boolean Algebra & Canonical Forms',
        items: [
          'Write **minterms** (product term, `m`, function=1 row) and **maxterms** (sum term, `M`, function=0 row).',
          '**SOP** — sum of products; **POS** — product of sums; canonical vs non-canonical forms.',
          'Simplify expressions using Boolean laws step-by-step.',
        ],
      },
      {
        h: '2.3 Karnaugh Map (K-Map)',
        items: [
          '**K-map** — 2,3,4 variable grids; cells ordered by Gray code (only 1 bit changes between neighbours).',
          'Group 1s in powers of two (1,2,4,8…) with **wraparound merging**; every 1 must be covered, each group as large as possible.',
          'Read the simplified **SOP** from groups; POS by grouping 0s.',
          'Don’t-care terms (X) usable to enlarge groups.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Realise AND/OR/NOT from NAND gates only (circuit diagram).',
          'Simplify F(A,B,C)=Σm(0,1,2,4,5,6) using K-map → write SOP and POS.',
          'Prove De Morgan’s laws with truth tables.',
          'State the difference between minterm/maxterm and canonical/non-canonical.',
        ],
      },
    ],
  },
  {
    moduleId: 'cso-m3',
    title: 'Module 3 · Combinational Circuits',
    sections: [
      {
        h: '3.1 Arithmetic Circuits',
        items: [
          '**Half adder** — sum = A⊕B, carry = A·B; **full adder** — adds 3 bits with carry-in.',
          '**n-bit ripple carry adder** — cascade of full adders; **half/full subtractor** and binary subtraction.',
          '**Parallel adder/subtractor**, carry-lookahead concept (carry generated/propagated) to reduce delay.',
        ],
      },
      {
        h: '3.2 Functional Blocks',
        items: [
          '**Decoder** — n inputs, 2ⁿ outputs (one active); 3:8 decoder built from 2:4s; used for memory & code conversion (BCD→7-seg).',
          '**Encoder / priority encoder** — reverse of decoder.',
          '**Multiplexer (MUX)** — selects one of 2ⁿ data lines by n select lines; 2:1, 4:1, 8:1; implementing functions with MUX.',
          '**Demultiplexer (DEMUX)** — routes one input to one of 2ⁿ outputs.',
          '**Code converters**: BCD→Excess-3, binary→Gray, Gray→binary, 7-segment display driver.',
        ],
      },
      {
        h: '3.3 Designing Combinational Logic',
        items: [
          'Design flow: truth table → K-map simplify → logic diagram.',
          'Examples: 4-bit parity generator/checker, magnitude comparator, majority circuit.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Design full adder (truth table, K-map, circuit) — classic 8-marker.',
          'Explain 4:1 MUX with circuit; how a 3:8 decoder is made from two 2:4s.',
          'Design BCD→Excess-3 converter using K-maps.',
          'Difference between decoder and demultiplexer; MUX vs encoder.',
        ],
      },
    ],
  },
  {
    moduleId: 'cso-m4',
    title: 'Module 4 · Microprocessor Architecture (8085)',
    sections: [
      {
        h: '4.1 8085 Basics',
        items: [
          '**8085** — 8-bit microprocessor, 40-pin IC, +5 V, ~3 MHz clock; address 16-bit (64 KB), data 8-bit multiplexed on AD0-AD7.',
          '**Registers**: A (accumulator), B,C,D,E,H,L (BC/DE/HL pairs), stack pointer SP (16-bit), program counter PC (16-bit), flags: S Z AC P CY.',
          '**ALU** + timing & control; **interrupts** (RST 7.5, 6.5, 5.5, TRAP, INTR); **serial I/O** SID/SOD.',
        ],
      },
      {
        h: '4.2 Instruction Set & Addressing',
        items: [
          '**Instruction groups**: data transfer (MOV, LDA, STA), arithmetic (ADD, SUB, INR, DCR), logical (ANA, ORA, XRA, CMP), branch (JMP, JZ, CALL, RET), stack & machine control.',
          '**Addressing modes**: immediate, register, direct, indirect (register-pair like MOV A, M), implied.',
          'Sample handwritten code: 8-bit add with carry, largest of N numbers, multiplication by repeated addition.',
        ],
      },
      {
        h: '4.3 Timing & Interfacing',
        items: [
          '**Machine cycles / T-states**: opcode fetch, memory read/write, I/O — instruction execution time = Σ T-states × clock period.',
          'Memory mapped vs I/O mapped I/O; simple chip-select decoding (8085↔μP interfacing with 74LS138).',
          '`8255` PPI as parallel port (intro); `8251` serial; `8259` interrupt controller (overview).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Draw the internal architecture/register set of 8085 and state functions.',
          'Write an assembly program to add two 8-bit numbers and store result (with comments).',
          'Explain addressing modes with one example each.',
          'Explain opcode fetch machine cycle; classify instructions by group.',
        ],
      },
    ],
  },
  {
    moduleId: 'cso-m5',
    title: 'Module 5 · Memory & Digital Interfacing',
    sections: [
      {
        h: '5.1 Memory Basics',
        items: [
          '**RAM (SRAM vs DRAM)** — SRAM uses flip-flops (fast, costly), DRAM uses capacitors with refresh (dense, cheap).',
          '**ROM, PROM, EPROM, EEPROM, Flash** — programming erasability differences.',
          '**Cache memory** — small fast memory near CPU; hit/miss, locality of reference; direct, associative, set-associative.',
          '**Virtual memory & paging** (concept): page table maps virtual→physical; MMU does address translation.',
        ],
      },
      {
        h: '5.2 Memory Interfacing',
        items: [
          '**Memory map**: EPROM + RAM arrangement on 8085 bus; chip select via the high address lines (decoder).',
          'Address decoding example: 8 KB EPROM (2764) + 8 KB RAM (6264) with 74LS138 3:8 decoder.',
          'Compute address ranges given decoder inputs; data & control bus connections (RD., WR., MEM/R).',
        ],
      },
      {
        h: '5.3 Digital I/O & Applications',
        items: [
          '**8255 PPI modes** 0/1/2, control word format for I/O configuration.',
          '**8253 Timer** for delay generation/counting; **8257 DMA** — direct memory access without CPU.',
          '**Interrupt-based I/O vs polling** — efficiency comparison; RST interrupts and vectored address.',
          'Keyboard/display interfacing, stepper motor & ADC/DAC interfacing basics.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Design a memory interface (EPROM+RAM) for 8085 showing decoder, bus connections and address ranges.',
          'SRAM vs DRAM; cache mapping types (table).',
          'Explain 8255 control word and set a mode-0 configuration example.',
          'Write short notes on DMA controller and vectored interrupts.',
        ],
      },
    ],
  },
];