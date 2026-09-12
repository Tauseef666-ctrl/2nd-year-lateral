import type { ChapterNote } from '../../types';

export const CN_NOTES: ChapterNote[] = [
  {
    moduleId: 'cn-m1',
    title: 'Module 1 · Introduction to Computer Networks',
    sections: [
      {
        h: '1.1 Basics & Uses',
        items: [
          'A **computer network** interconnects autonomous computers to **share resources and data** (printers, storage, internet, communication).',
          '**Components**: nodes (hosts), links (wired/wireless), switches, routers, protocols, ISP.',
          '**Uses**: resource sharing, communication (email, VoIP), e-commerce, remote access, distributed computing, cloud access.',
          '**Advantages** vs disadvantages (setup cost, security risk, dependency on links).',
        ],
      },
      {
        h: '1.2 Classifications',
        items: [
          'By **communication rule**: point-to-point vs broadcast.',
          'By **topology**: bus, star, ring, mesh, hybrid (pros/cons of each — star is most common in LANs).',
          'By **scale**: **PAN, LAN, MAN, WAN**, and internet = network of networks.',
          '**Client–server** vs **peer-to-peer (P2P)**: CS centralises control; P2P scales and is robust but hard to secure.',
        ],
      },
      {
        h: '1.3 Network Models',
        items: [
          '**OSI reference model** — 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application (mnemonic: **Please Do Not Throw Sausage Pizza Away**).',
          '**TCP/IP model** — 4 layers: Network Access, Internet, Transport, Application (often 5-layer when split).',
          'Layers **interact** via interfaces; **protocol** defines rules, **service** is layer-to-layer.',
          '**Encapsulation** — each layer adds a header (and sometimes trailer); **de-encapsulation** removes them at receiver.',
          'Compare OSI vs TCP/IP: OSI defines Session/Presentation separately; TCP/IP is implementation-based, less strict.',
          'Modern internet reality: **HTTP, DNS, TLS (App) | TCP, UDP (Transport) | IP, ICMP (Internet) | Ethernet/Wi-Fi (Access)**.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Draw the 7-layer OSI model and state the main function of each layer — classic 4/8-marker.',
          'Define topology and compare bus vs star vs ring.',
          'KWAN — differentiate LAN, MAN, WAN with geographic area examples.',
          'Explain encapsulation with a data flow from application to physical.',
        ],
      },
    ],
  },
  {
    moduleId: 'cn-m2',
    title: 'Module 2 · Data Communication & Communication Methods',
    sections: [
      {
        h: '2.1 Data Transmission',
        items: [
          '**Data communication components**: sender, receiver, message, medium, protocol.',
          '**Analog vs digital signals**; baseband (digital on wire) vs broadband (modulated analog on shared media).',
          '**Transmission modes**: **simplex** (one-way), **half-duplex** (push-to-talk), **full-duplex** (telephone).',
          '**Serial vs parallel** transmission; **synchronous vs asynchronous** (start/stop bits) framing.',
        ],
      },
      {
        h: '2.2 Encoding & Modulation',
        items: [
          '**Line coding**: NRZ, RZ, Manchester (clock sync embedded), Differential Manchester.',
          '**Modulation** (for analog carriers): **ASK** (amplitude), **FSK** (frequency), **PSK** (phase), QAM (both amplitude+phase).',
          '**Multiplexing**: FDM (frequency division), **TDM** (time slots, fixed vs statistical), WDM (wavelength), CDMA (code).',
          '**Bandwidth vs data rate**; **frequency spectrum**: twisted pair → coaxial → fibre (speed, cost, interference trade-offs).',
        ],
      },
      {
        h: '2.3 Error Detection & Correction',
        items: [
          '**Single-bit vs burst errors**; **parity check** (even/odd) catches odd number of bit flips only.',
          '**Checksum** (sum complement) at transport layer.',
          '**CRC** (Cyclic Redundancy Check) — treat bit string as polynomial, divide by generator G, append remainder — catches bursts reliably.',
          '**Hamming code** — introduces parity bits at positions 2ᵏ; detects and **corrects** single-bit errors (d ≥ 2t+1 for t-correction).',
          'Data link uses **framing + error control + flow control**.',
        ],
      },
      {
        h: '2.4 Flow Control & Data Link Protocols',
        items: [
          '**Stop-and-Wait** — one frame at a time, efficiency 1/(1+2a) (a = propagation/transmission ratio); bandwidth wasted.',
          '**Sliding window (Go-back-N / Selective Repeat)** — window allows pipelining; GBN retransmits all from the failed frame, SR only the failed one (needs buffering).',
          '**HDLC** — bit-oriented link protocol, uses flags `01111110` and bit stuffing.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare ASK/FSK/PSK and state which needs more bandwidth / is more noise-immune.',
          'CRC and Hamming code numericals (e.g. find CRC remainder for given generator).',
          'Stop-and-Wait efficiency formula and why sliding window improves throughput on long links.',
          'Differentiate Go-back-N (cumulative ACK, no buffering) vs Selective Repeat (individual ACK, buffers).',
        ],
      },
    ],
  },
  {
    moduleId: 'cn-m3',
    title: 'Module 3 · Network Layer',
    sections: [
      {
        h: '3.1 IP & Addressing',
        items: [
          'The **network layer** provides logical addressing, routing and fragmentation, and best-effort datagram delivery.',
          '**IPv4 address** = 32 bits, dotted decimal (e.g. 192.168.1.10); **network+host** parts decided by **subnet mask**.',
          '**Classes**: A (1–126), B (128–191), C (192–223), D multicast, E reserved; classless → **CIDR** (e.g. /24).',
          '**Private addresses**: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — used inside networks with **NAT**.',
          '**Subnetting/supernetting**: borrow host bits to create subnets; VLSM for efficient addressing.',
          '**IPv6** = 128 bits, hex notation, built-in security (IPSec), larger address space, no NAT needed.',
        ],
      },
      {
        h: '3.2 Routing Protocols',
        items: [
          '**Routing**: find best path; metrics (hop count, delay, bandwidth); routing tables.',
          '**Static vs dynamic routing**; **distance-vector (RIP)** — Bellman-Ford, hop-based, count-to-infinity problem (solved via split horizon / poison reverse).',
          '**Link-state (OSPF)** — Dijkstra SPF, builds complete topology map, faster convergence.',
          '**Path-vector (BGP)** — used between ASes on the internet; AS-path attribute prevents loops.',
          '**Hierarchical routing** reduces table size; **congestion control**: open-loop (prevention) vs closed-loop (feedback), leaky bucket / token bucket for traffic shaping.',
        ],
      },
      {
        h: '3.3 Fragmentation & ICMP/ARP',
        items: [
          '**IP fragmentation** occurs when MTU differs across links; reassembled at destination (offset field, MF bit).',
          '**ARP** resolves IP→MAC on a LAN (broadcast request, unicast reply); **RARP**/DHCP for IP assignment.',
          '**ICMP** reports errors (Destination Unreachable, Time Exceeded) and supports `ping` / `traceroute`.',
          '**DHCP** dynamically assigns IP, subnet, gateway, DNS with a lease.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Given an IP + subnet mask, find network address, broadcast address and usable host range (numerical).',
          'Subnet the given block into N equal subnets — compute new mask.',
          'Compare distance-vector and link-state (count-to-infinity, convergence, topology knowledge).',
          'Difference between static and dynamic routing; role of NAT and ARP in a 4-marker.',
        ],
      },
    ],
  },
  {
    moduleId: 'cn-m4',
    title: 'Module 4 · Transport Layer',
    sections: [
      {
        h: '4.1 TCP vs UDP',
        items: [
          '**Transport layer** provides end-to-end communication, port numbers, segmentation, and (for TCP) reliability.',
          '**TCP** — connection-oriented, reliable, ordered, full-duplex, flow & congestion control; header has sequence/ack numbers, window, flags.',
          '**UDP** — connectionless, no reliability, low overhead, used for DNS, video streaming, VoIP, gaming.',
          '**Three-way handshake**: SYN → SYN+ACK → ACK; **Four-way close**: FIN → ACK → FIN → ACK.',
          '**Ports**: well-known (0–1023, HTTP 80, HTTPS 443, DNS 53, DHCP 67/68), registered, ephemeral.',
        ],
      },
      {
        h: '4.2 Flow, Congestion & Reliability',
        items: [
          '**Flow control** — receiver window (`rwnd`) via ACK; **congestion control** — sender’s `cwnd` using **Slow Start (exponential) → Congestion Avoidance (AIMD: additive increase, multiplicative decrease)**.',
          '**Retransmission** by timeout (RTO) or **fast retransmit** (3 duplicate ACKs) → fast recovery.',
          '**Cumulative vs selective ACK (SACK)**.',
          'TCP variants: Tahoe, Reno, NewReno, Vegas (delay-based), Cubic (Linux default).',
        ],
      },
      {
        h: '4.3 Quality of Service & Scheduling',
        items: [
          '**QoS** parameters: delay, jitter, bandwidth, loss; vs best-effort delivery.',
          '**Queuing disciplines**: FIFO, priority queues, **weighted fair queuing (WFQ)**; traffic shaping (leaky/token bucket).',
          '**Congestion vs flow control** — the classic difference question.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare TCP and UDP on reliability, connection, header size, applications (table).',
          'Three-way handshake diagram + purpose (avoid half-open connections / stale SYNs) — 4-marker.',
          'Explain AIMD / slow start phases with cwnd growth pattern.',
          'Difference between flow control and congestion control with one example each.',
        ],
      },
    ],
  },
  {
    moduleId: 'cn-m5',
    title: 'Module 5 · Network Devices',
    sections: [
      {
        h: '5.1 Devices by Layer',
        items: [
          '**Repeater / hub (Physical)** — regenerate/duplicate signals; hub floods everything (collision domain shared).',
          '**Bridge / switch (Data Link)** — forward frames based on MAC addresses; switch = multiport bridge, each port own collision domain; learns MAC table.',
          '**Router (Network)** — forwards packets based on IP address / routing table; separates broadcast domains.',
          '**Gateway (all layers)** — protocol converter between different networks/architectures.',
          '**Modem** modulates/demodulates digital↔analog; **NIC** connects a host to the network (MAC address).',
        ],
      },
      {
        h: '5.2 LAN Switching & VLANs',
        items: [
          '**Collision domain** (shrunk by switches) vs **broadcast domain** (shrunk by routers; VLANs too).',
          '**Store-and-forward vs cut-through vs fragment-free** switch modes (latency vs error checking).',
          '**VLAN** logically segments a switch; **802.1Q trunk tagging** carries multiple VLANs on one link.',
          '**STP (Spanning Tree)** prevents loops in redundant switch topologies (Blocking/Listening/Learning/Forwarding states).',
        ],
      },
      {
        h: '5.3 Applications & Security',
        items: [
          '**NAT/PAT** maps private↔public addresses; **firewall** filters traffic by rule sets (stateful/stateless).',
          '**IDS/IPS**, **VPN** (IPSec tunnels), **proxy** acting on behalf of clients.',
          'Example internet path: PC → switch → router → ISP → internet — name the devices at each hop.',
          'Troubleshooting chain: `ping` (IP reachability), `traceroute` (path), `ipconfig/ifconfig` (own config), `nslookup` (DNS).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Match devices to OSI layers with their forwarding basis (MAC vs IP) — very frequent question.',
          'Difference between hub, switch and router (collision vs broadcast domain).',
          'Explain VLANs and why they need trunk tagging (802.1Q).',
          'Diagram the home LAN→WAN path naming each device.',
        ],
      },
    ],
  },
];