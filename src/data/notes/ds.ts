import type { ChapterNote } from '../../types';

export const DS_NOTES: ChapterNote[] = [
  {
    moduleId: 'ds-m1',
    title: 'Module 1 · Introduction to Data Structures',
    sections: [
      {
        h: '1.1 Basic Concepts',
        items: [
          '**Data structure** = a way of organising and storing data to support efficient access and modification; chosen based on the operations needed.',
          '**Data types**: primitive (int, float, char, bool) vs **abstract data types (ADT)** — a data structure + operations defined on it, independent of implementation.',
          '**Algorithm** — finite sequence of steps; analysis measures **time** (count of basic operations) and **space** (memory) complexity.',
          '**Asymptotic notation**: **O (Big-Oh, upper bound)**, **Ω (Omega, lower bound)**, **Θ (Theta, tight bound)**.',
          'Common complexities: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ).',
        ],
      },
      {
        h: '1.2 Classifications',
        items: [
          '**Linear** (elements in a sequence): array, stack, queue, linked list.',
          '**Non-linear** (hierarchical/interconnected): tree, graph.',
          '**Static vs dynamic**: fixed-size arrays vs resizeable dynamic allocation.',
          '**Primitive ADTs in C**: stack, queue, list implemented with arrays or pointers.',
          'Operations relevant per structure: insert, delete, search, traverse, modify.',
        ],
      },
      {
        h: '1.3 Complexity Analysis Basics',
        items: [
          'Best case, **average case**, worst case of an algorithm; Big-Oh describes growth of operations.',
          'Constant/loops: single loop O(n), nested loops O(n²), halving loop O(log n).',
          'Space complexity includes auxiliary plus input storage.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define data structure and ADT; classify linear vs non-linear.',
          'Explain Big-Oh, Omega, Theta with examples and order them.',
          'Compute complexity of sum-of-n / matrix-add code snippets.',
          'Why is complexity analysis important before implementing?',
        ],
      },
    ],
  },
  {
    moduleId: 'ds-m2',
    title: 'Module 2 · Linear Data Structures — Stacks & Queues',
    sections: [
      {
        h: '2.1 Stack',
        items: [
          '**Stack** = LIFO (Last In First Out); base: TOP; operations **PUSH** (overflow) and **POP** (underflow), plus PEEK/Top and isEmpty.',
          '**Array implementation**: `top` index; push → `arr[++top]=x`, pop → `arr[top--]`.',
          '**Linked implementation** — head as top; avoids overflow detection.',
          '**Applications**: function call stack (recursion), expression evaluation (postfix), **infix→postfix conversion**, parsing brackets, undo/redo, backtracking.',
          '**Expression conversion** — operators pushed on stack by precedence; Polish (prefix) vs postfix evaluation with operand stack.',
        ],
      },
      {
        h: '2.2 Queue',
        items: [
          '**Queue** = FIFO (First In First Out); FRONT/REAR; **enqueue** at rear, **dequeue** from front; overflow/underflow.',
          '**Circular queue** — wraps around to reuse empty slots; rear = (rear+1)%size when full check applies.',
          '**Priority queue** — elements ordered by priority (min/max heap implementation).',
          '**Deque** — insert/delete at both ends.',
          '**Array vs linked implementations** for queue.',
        ],
      },
      {
        h: '2.3 Applications & Numericals',
        items: [
          'Applications: job scheduling, print spool, breadth-first traversal, CPU process queues, buffering.',
          'Convert **infix to postfix** using operator precedence & associativity — worked numeric examples.',
          'Evaluate a postfix expression step-by-step using a stack.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Convert infix `A+B*(C-D)/E` to postfix showing stack snapshots.',
          'Implement stack/queue in C (array version) — very common 6–8 marker.',
          'Difference between stack and queue; circular queue reuse logic.',
          'Prioritise: what is a priority queue and where is it used?',
        ],
      },
    ],
  },
  {
    moduleId: 'ds-m3',
    title: 'Module 3 · Linked Lists',
    sections: [
      {
        h: '3.1 Singly Linked List',
        items: [
          '**Linked list** = sequence of **nodes** each storing data + pointer to next; advantages over arrays: dynamic size, easy insert/delete at known node (no shifting).',
          'Node definition in C: `struct node { int data; struct node *next; }`.',
          '**Operations**: create, traverse, insert at beginning/middle/end, delete (first/last/value), search, counting, reversal.',
          '**Insert at head** — `new->next = head; head = new;` insert at end — walk to tail.',
          '**Delete by value** — keep `prev` pointer; unlink and `free`.',
          '**Reverse** — three pointers (prev, curr, next).',
        ],
      },
      {
        h: '3.2 Doubly & Circular Lists',
        items: [
          '**Doubly linked list**: each node has `prev` and `next`; easier backward traversal & deletion; extra pointer overhead.',
          '**Circular linked list**: tail → head; useful for round-robin scheduling; no NULL terminators.',
          'Compare singly vs doubly vs circular (memory, traversal direction, deletion ease).',
        ],
      },
      {
        h: '3.3 Complexity & Comparison',
        items: [
          'Access/search O(n) (no index); insert/delete O(1) at a known node vs O(n) to find it.',
          'Array vs linked list comparison: random access, cache locality, memory, insertion/deletion.',
          'Linked list applications: polynomial representation, adjacency lists in graphs, LRU cache.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Write full C code to insert a node at the beginning and delete from the end of a linked list.',
          'Compare array vs linked list (table of 5 points).',
          'Explain and program linked list reversal.',
          'Doubly and circular list diagrams with insertion logic at head/tail.',
        ],
      },
    ],
  },
  {
    moduleId: 'ds-m4',
    title: 'Module 4 · Sorting & Searching',
    sections: [
      {
        h: '4.1 Sorting Algorithms',
        items: [
          '**Bubble sort** — repeated adjacent swaps; O(n²) worst/avg, O(n) best (optimised with swap flag); stable.',
          '**Selection sort** — repeatedly select the min and place at the front; O(n²) always; **not stable**.',
          '**Insertion sort** — build sorted part by inserting each element; O(n²) worst, O(n) best (nearly sorted); stable; good for small data.',
          '**Merge sort** — divide & conquer, O(n log n) always; needs O(n) extra space; stable.',
          '**Quick sort** — partition around a pivot; O(n log n) avg, O(n²) worst (sorted input with bad pivot); in-place; not stable.',
          '**Heap sort** — build max-heap then extract; O(n log n); stable? no.',
        ],
      },
      {
        h: '4.2 Searching',
        items: [
          '**Linear search** — O(n), works on unsorted data.',
          '**Binary search** — O(log n) on sorted data; iterative or recursive; compare mid, search left/right half.',
          'Binary search termination and off-by-one care; first/last occurrence variants.',
        ],
      },
      {
        h: '4.3 Comparison & Stability',
        items: [
          'Stability: **stable** preserves equal-element order (bubble, insertion, merge) vs unstable (selection, quick, heap).',
          'In-place vs extra-space; best for small arrays (insertion) vs huge arrays (merge).',
          'Rank by complexity: O(n²) group vs O(n log n) group vs O(n) best cases.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Sort a given array by bubble / selection / insertion / quick / merge — show pass-by-pass (classic 8-marker).',
          'Write binary search code (iterative) and trace on `[2,5,8,12,16,23]`.',
          'Explain quick sort partitioning with the Lomuto/Hoare step on an example.',
          'Compare sorting algorithms on time, space and stability.',
        ],
      },
    ],
  },
  {
    moduleId: 'ds-m5',
    title: 'Module 5 · Trees & Graphs',
    sections: [
      {
        h: '5.1 Trees & Binary Trees',
        items: [
          '**Tree** = non-linear, hierarchical; root, nodes, edges, leaf, parent/child, sibling, height/depth, level.',
          '**Binary tree** — each node ≤ 2 children; **BST** property: left subtree < node < right subtree; allows O(log n) search when balanced.',
          '**Traversals**: in-order (LNR), pre-order (NLR), post-order (LRN) — recursion and iterative with stack; level-order (BFS with queue).',
          '**Properties**: max nodes at level `i` = 2^i; max nodes in tree of height h = 2^(h+1)−1; full/complete/perfect/balanced trees.',
          '**Heap** = complete binary tree with heap property (min/max); used for priority queues & heap sort.',
          '**BST operations**: insert, search, delete (3 cases — leaf, one child, two children → in-order successor).',
        ],
      },
      {
        h: '5.2 Graphs',
        items: [
          '**Graph G=(V,E)**; directed/undirected, weighted; **adjacency matrix** (O(V²) space) vs **adjacency list** (O(V+E)).',
          '**DFS** — stack (or recursion); explores deep; used for connectivity, cycle detection, topological sort.',
          '**BFS** — queue; explores level by level; used for shortest path in unweighted graphs.',
          '**MST**: **Prim’s** (grow one tree) and **Kruskal’s** (sort edges, union-find) — both O(E log E).',
          '**Shortest path**: **Dijkstra** (non-negative weights) vs Bellman-Ford (negative), Floyd-Warshall (all pairs).',
        ],
      },
      {
        h: '5.3 Applications',
        items: [
          'BST: dictionary, symbol table; heaps: priority queues; graphs: networks, social graphs, routing, web crawlers.',
          'Expression trees; Huffman coding tree; parse trees.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Given a BST, show insert/delete (successor case) step-by-step.',
          'Traverse the given tree in in/pre/post order — 4-marker.',
          'DFS vs BFS traversal order on a small graph; adjacency matrix vs list.',
          'Prim’s vs Kruskal’s on a weighted graph; difference table.',
        ],
      },
    ],
  },
];