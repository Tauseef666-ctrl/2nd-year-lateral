export interface QuizQuestion {
  id: string;
  subjectId: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

const q = (
  subjectId: string,
  question: string,
  options: string[],
  answerIndex: number,
  explanation: string,
): QuizQuestion => ({ id: `${subjectId}-${question.slice(0, 24).replace(/[^a-z0-9]/gi, '-').toLowerCase()}`, subjectId, question, options, answerIndex, explanation });

export const QUIZ_BANK: QuizQuestion[] = [
  q(
    'os',
    'Which CPU scheduling algorithm always picks the process with the smallest burst time?',
    ['Round Robin', 'Shortest Job First (SJF)', 'FCFS', 'Priority scheduling'],
    1,
    'SJF selects the shortest-remaining (or next-shortest) job to minimise average waiting time.',
  ),
  q(
    'os',
    'Which of these is NOT one of the four Coffman conditions for deadlock?',
    ['Mutual exclusion', 'Hold and wait', 'No preemption', 'Preemptive scheduling'],
    3,
    'The four conditions are mutual exclusion, hold and wait, no preemption, and circular wait. Preemption being allowed actually breaks deadlock.',
  ),
  q(
    'os',
    'Demand paging loads a page into memory only when…',
    ['The machine boots', 'It is requested (page fault)', 'Another process exits', 'The disk is idle'],
    1,
    'With demand paging, a page is brought in only when a reference to it causes a page fault.',
  ),
  q(
    'dbms',
    'Which normal form removes transitive dependencies?',
    ['1NF', '2NF', '3NF', 'BCNF'],
    2,
    '3NF requires that no non-prime attribute depends transitively on the primary key.',
  ),
  q(
    'dbms',
    'Which SQL clause is used to filter rows after GROUP BY aggregation?',
    ['WHERE', 'HAVING', 'ORDER BY', 'LIMIT'],
    1,
    'HAVING filters groups, while WHERE filters rows before grouping.',
  ),
  q(
    'dbms',
    'A primary key must be…',
    ['Unique and not null', 'Numeric', 'Short', 'Indexed by default'],
    0,
    'A primary key uniquely identifies rows, so it must be unique across the table and never NULL.',
  ),
  q(
    'cn',
    'Which protocol resolves an IPv4 address to a MAC address on a LAN?',
    ['DNS', 'DHCP', 'ARP', 'ICMP'],
    2,
    'ARP (Address Resolution Protocol) maps IP addresses to link-layer (MAC) addresses in IPv4 networks.',
  ),
  q(
    'cn',
    'At which OSI layer does TCP operate?',
    ['Physical', 'Data link', 'Network', 'Transport'],
    3,
    'TCP is a transport-layer protocol providing reliable, connection-oriented delivery.',
  ),
  q(
    'cn',
    'Which device connects different networks and forwards packets based on IP addresses?',
    ['Hub', 'Switch', 'Router', 'Repeater'],
    2,
    'A router operates at the network layer and forwards packets between different networks.',
  ),
  q(
    'web',
    'Which HTML element creates a hyperlink?',
    ['<a>', '<link>', '<href>', '<url>'],
    0,
    'The anchor element <a> with an href attribute creates hyperlinks in HTML.',
  ),
  q(
    'web',
    'Which tag is used to style or embed JavaScript in modern HTML pages?',
    ['<style> for CSS and <script> for JS', '<css>', '<js>', '<code>'],
    0,
    'CSS goes inside <style>, and JavaScript inside <script>.',
  ),
  q(
    'cprog',
    'Which operator is used to access the value pointed to by a pointer?',
    ['&', '*', '#', '->'],
    1,
    'The dereference operator * gives the value stored at the address held by a pointer.',
  ),
  q(
    'cprog',
    'Arrays in C are passed to functions…',
    ['By value', 'By reference (decay to pointer)', 'By copy', 'Cannot be passed'],
    1,
    'When passed, an array name decays to a pointer to its first element, so changes affect the original.',
  ),
  q(
    'ds',
    'What is the worst-case time complexity of bubble sort?',
    ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
    2,
    'In the worst case bubble sort compares and swaps every pair, giving O(n²).',
  ),
  q(
    'ds',
    'Which data structure follows Last-In-First-Out (LIFO)?',
    ['Stack', 'Queue', 'Tree', 'Graph'],
    0,
    'A stack pushes and pops from the same end, giving LIFO order.',
  ),
  q(
    'ds',
    'A binary search tree must satisfy which property for every node?',
    ['Left subtree smaller, right subtree larger', 'All leaves at same depth', 'Nodes in sorted input order', 'Height of log n'],
    0,
    'In a BST, every node’s left subtree holds smaller keys and the right subtree holds larger keys.',
  ),
  q(
    'se',
    'The V-Model is associated with…',
    ['Incremental delivery', 'Verification & validation phases per development step', 'Agile sprints', 'Only testing documents'],
    1,
    'The V-Model pairs each development phase with a corresponding verification/validation phase.',
  ),
  q(
    'py',
    'Which keyword defines a function in Python?',
    ['func', 'function', 'def', 'lambda only'],
    2,
    'Functions are defined with def, and lambda creates anonymous expressions.',
  ),
];

export const getQuizzesForSubject = (subjectId: string): QuizQuestion[] =>
  QUIZ_BANK.filter((x) => x.subjectId === subjectId);

export const QUIZ_SUBJECT_IDS = [...new Set(QUIZ_BANK.map((x) => x.subjectId))];