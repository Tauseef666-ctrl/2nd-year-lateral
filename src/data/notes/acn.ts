import type { ChapterNote } from '../../types';

export const ACN_NOTES: ChapterNote[] = [
  {
    moduleId: 'acn-m1',
    title: 'Module 1 · Review of Networking Basics',
    sections: [
      {
        h: '1.1 IPv4 Subnetting & Multicasting',
        items: [
          '**IPv4**: 32-bit address, dotted-decimal; **classes** A–E (A: 1.0.0.0–127.0.0.0 /8, B /16, C /24); private ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16); loopback 127.0.0.1.',
          '**Subnetting** borrows host bits to create network segments: number of subnets = 2^bits; hosts/subnet = 2^(32-CIDR) − 2; **subnet mask** (e.g., /26 = 255.255.255.192).',
          '**CIDR** notation and **VLSM** — variable lengths for efficient address use; find network, broadcast, first/last usable host addresses.',
          '**Multicasting**: one-to-many delivery; Class D (224–239); **IGMP** for group membership; multicast MAC mapping (01:00:5E prefix).',
          'Unicast, broadcast, multicast, anycast delivery modes comparison.',
        ],
      },
      {
        h: '1.2 TCP Flow/Congestion Control & IPv6',
        items: [
          '**TCP flow control**: sliding window + **receiver window (rwnd)**; prevents overwhelming receiver.',
          '**Congestion control**: **slow start** (exponential growth), **congestion avoidance** (additive increase), **AIMD**, fast retransmit/fast recovery; congestion window cnwd vs rwnd.',
          '**Three-way handshake** (SYN, SYN-ACK, ACK) and connection teardown (FIN); classic TCP variants: Tahoe, Reno, NewReno, Cubic.',
          '**IPv6**: 128-bit, 8 hextets, abbreviations (::), address types (unicast, multicast, anycast; link-local, global); no broadcast — multicasts used.',
          '**Transitioning**: dual-stack, tunnelling (6to4, Teredo), NAT64; header simplification (fixed 40-byte base, extension headers, no checksum).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Given an IP/prefix, calculate subnet, broadcast and valid host range.',
          'Explain slow start and AIMD with a graph.',
          'Describe the TCP handshake and window-based flow control.',
          'Compare IPv4 vs IPv6 (header, addresses, features).',
          'What is multicast addressing and how does IGMP work?',
        ],
      },
    ],
  },
  {
    moduleId: 'acn-m2',
    title: 'Module 2 · Telecom Networks & Switching Techniques',
    sections: [
      {
        h: '2.1 Frame Relay, ATM, MPLS & VSAT',
        items: [
          '**Frame Relay**: packet-switched WAN at data-link layer; **VC** (virtual circuits) PVC/SVC; DLCI for multiplexing; low overhead, error handling left to ends; CIR (committed information rate).',
          '**ATM**: cell-based (53-byte fixed cells: 5 header + 48 payload); connection-oriented; **AAL** layers; QoS via CBR/VBR/ABR/UBR; mapping onto SONET.',
          '**MPLS**: label-based forwarding; pushes labels, forwards via LSP (label-switched path); **traffic engineering & VPNs (L2/L3 MPLS)**, replaces per-IP routing costs.',
          '**VSAT (Very Small Aperture Terminal)**: satellite hub–spoke network, geostationary links; used for rural connectivity, remote sites, broadcast.',
        ],
      },
      {
        h: '2.2 Wireless Networks & Cellular Technologies',
        items: [
          '**Wireless LAN (IEEE 802.11)**: a/b/g/n/ac/ax; CSMA/CA, RTS/CTS, infrastructure vs ad-hoc; WEP→WPA2/3 security.',
          '**Cellular evolution**: **1G** (analog) → **2G** (GSM/CDMA, digital voice+SMS) → **2.5G GPRS/EDGE** (packet data) → **3G** (UMTS/WCDMA, mobile broadband) → **4G LTE** (OFDMA, all-IP, high throughput) → **5G** (millimetre wave, network slicing, ultra-low latency).',
          '**GSM architecture**: MS, BSS (BTS/BSC), NSS (MSC, HLR, VLR, AuC, EIR), OSS; handover & roaming.',
          '**CDMA vs GSM**: spread spectrum, soft vs hard handoff, SIM-less vs SIM-based phones.',
          '**2G/3G/4G data comparison**: peak rates, spectrum, duplexing (FDD vs TDD).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare Frame Relay vs ATM vs MPLS.',
          'Explain MPLS label switching operation.',
          'Describe GSM subsystems (BSS/NSS) with functions.',
          'Comment on the evolution from 1G to 5G with data rates.',
          'What is VSAT and its applications?',
        ],
      },
    ],
  },
  {
    moduleId: 'acn-m3',
    title: 'Module 3 · QoS & Network Monitoring',
    sections: [
      {
        h: '3.1 QoS, Redundancy, Load Balancing & Caching',
        items: [
          '**QoS** = guarantees on bandwidth, delay (latency), jitter and packet loss for applications (voice/video/real-time).',
          '**QoS mechanisms**: classification/marking (DSCP), **traffic shaping & policing**, **queuing** (FIFO, PQ, WRR, WFQ), **congestion avoidance** (RED/WRED), scheduling.',
          '**IntServ vs DiffServ**: per-flow RSVP reservations vs per-class priority — DiffServ scales for the internet.',
          '**Redundancy**: redundant links/devices, **link aggregation (LACP)**, **STP** re-convergence, **BGP multipath/ECMP**, load balancers distribute traffic; failover clusters and HSRP/VRRP gateways.',
          '**Caching**: proxy/web caching, CDN edge caches, DNS caching, HTTP cache headers (ETag, Cache-Control) — reduces origin load and latency.',
        ],
      },
      {
        h: '3.2 Network Monitoring: SNMP & RMON',
        items: [
          '**SNMP (Simple Network Management Protocol)** = UDP-based request/response for network management: **manager ↔ agent**, MIB (Management Information Base, OID tree) holds counters/status.',
          'SNMP versions: **v1/v2c** community strings (weak), **v3** authentication + encryption (secure).',
          '**PDUs**: GET, GETNEXT, GETBULK, SET, RESPONSE, TRAP/Notification (agent-initiated alerts), INFORM.',
          '**RMON (Remote Monitoring)** = MIB extensions for **off-line monitoring** of traffic at probes/agents (statistics, history, alarms, hosts, topN) — captures granular link data.',
          'Monitoring tools: SolarWinds, PRTG, Nagios, Wireshark, NetFlow/sFlow for flows; NMS dashboards and thresholds/alarms.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define QoS metrics and list queuing techniques.',
          'Differentiate IntServ and DiffServ.',
          'Explain the SNMP manager-agent-MIB model.',
          'SNMP v1/v2 vs v3 security differences.',
          'What additions does RMON provide over SNMP counters?',
        ],
      },
    ],
  },
  {
    moduleId: 'acn-m4',
    title: 'Module 4 · Introduction to Network Security',
    sections: [
      {
        h: '4.1 VLAN, VPN, Firewall, IPS & Proxy',
        items: [
          '**VLAN** (802.1Q): logical LAN segmentation on switches; trunks carry tagged frames; isolates broadcast domains and applies per-VLAN ACLs.',
          '**VPN**: encrypted tunnels (IPSec/IKE, SSL/TLS) — site-to-site and remote-access; NAT traversal; enterprise overlay networks.',
          '**Firewalls**: packet filter, stateful inspection, application gateway/proxy; deployment with DMZ; default-deny rule sets.',
          '**IPS/IDS**: inline prevention vs passive detection; signature + anomaly detection placed at network choke points.',
          '**Proxy servers**: forward caching/filtering proxies, reverse proxies/load balancers protecting web servers, transparent proxies.',
          'Defence in depth: perimeter firewall → ISP/IPS → proxy → host hardening → application WAF.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain VLAN configuration and trunking.',
          'Design a small secure network with firewall, DMZ and IPS.',
          'Compare packet filtering vs stateful vs application proxy firewall.',
          'What is defence in depth in a network?',
          'How do reverse proxies improve security?',
        ],
      },
    ],
  },
  {
    moduleId: 'acn-m5',
    title: 'Module 5 · Network Simulation',
    sections: [
      {
        h: '5.1 NS2 / Cisco Packet Tracer',
        items: [
          '**Network simulation** = modelling network behaviour without hardware — validates designs, tests protocols, teaches networking.',
          '**NS2/NS3**: event-driven simulator; NS3 uses C++ core + Python scripting; build nodes, links (bandwidth/delay), agents (TCP/UDP), applications, and trace files for analysis.',
          '**Cisco Packet Tracer**: GUI tool for designing, wiring and configuring **routers/switches/hosts** (CLI: en, configure terminal, interface, ip address, ip route, RIP/OSPF/EIGRP, VLAN, NAT, DHCP).',
          'Common labs: static routing, RIP/OSPF convergence, VLAN+inter-VLAN routing, access lists, DHCP/NAT to the internet, wireless.',
          'Evaluation: ping/traceroute, show ip route, show interfaces, packet sniffing, PT simulation mode to inspect frames/PDUs.',
        ],
      },
      {
        h: '5.2 Wireshark & Traffic Analysis',
        items: [
          '**Wireshark** = packet capture/analysis tool (libpcap/Npcap); reads PCAP files.',
          'Workflow: capture on interface → filters (**capture filters** BPF vs **display filters** like `tcp.port==80`, `http.host`), colouring rules, follow TCP stream, statistics (protocol hierarchy, conversations), expert info.',
          'Analyse real handshakes: TCP 3-way, HTTP/HTTPS (TLS handshake), DNS queries, ARP, DHCP (DISCOVER/OFFER/REQUEST/ACK), ICMP.',
          '**tcpdump** = CLI equivalent; capture to file, read with Wireshark.',
          'Detect anomalies: retransmissions, SYN floods, malformed packets, cleartext credentials.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Build a 3-router network in PT with static routes and verify connectivity.',
          'Configure VLANs and inter-VLAN routing in Packet Tracer.',
          'Explain NS3 nodes/links/applications model.',
          'How do you capture and filter packets in Wireshark? Provide filters.',
          'Trace a TCP handshake and HTTP request using Wireshark.',
        ],
      },
    ],
  },
];