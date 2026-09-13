import type { Resource } from '../types';
import { r } from './yt';

/**
 * Centralised best-one-shot mapping — keyed by moduleId.
 * If a module is listed here, every topic in it without an inline one-shot
 * will still appear in the One-Shot Library using this entry.
 * videoIds are verified via YouTube oEmbed before merging into production.
 */
export const MODULE_ONE_SHOTS: Record<string, Resource> = {
  // ──────────────────────────── JAVA ────────────────────────────
  'java-m1': r({
    kind: 'one-shot',
    title: 'Java full course – Module 1 one-shot revision',
    channel: 'CodeWithHarry',
    query: 'java tutorial for beginners full course module 1 in hindi CodeWithHarry',
    language: 'hindi',
  }),
  'java-m2': r({
    kind: 'one-shot',
    title: 'Java data types, operators & control flow one-shot',
    channel: 'CodeWithHarry',
    query: 'java variables data types operators loops in hindi one shot CodeWithHarry',
    language: 'hindi',
  }),
  'java-m3': r({
    kind: 'one-shot',
    title: 'Java classes, objects & inheritance one-shot',
    channel: 'CodeWithHarry',
    query: 'java classes objects inheritance packages string handling in hindi one shot',
    language: 'hindi',
  }),
  'java-m4': r({
    kind: 'one-shot',
    title: 'Java abstract class, interface & polymorphism one-shot',
    channel: 'CodeWithHarry',
    query: 'java abstract class interface polymorphism overloading overriding in hindi one shot',
    language: 'hindi',
  }),
  'java-m5': r({
    kind: 'one-shot',
    title: 'Java exceptions & multithreading one-shot',
    channel: 'CodeWithHarry',
    query: 'java exception handling multithreading in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── IoT ────────────────────────────
  'iot-m1': r({
    kind: 'one-shot',
    title: 'Internet of Things basics & design one-shot',
    channel: 'Gate Smashers',
    query: 'internet of things iot basics introduction in hindi Gate Smashers',
    language: 'hindi',
  }),
  'iot-m2': r({
    kind: 'one-shot',
    title: 'IoT electronics & sensor basics one-shot',
    channel: 'Learn Electronics',
    query: 'iot sensors actuators electronics basics in hindi',
    language: 'hindi',
  }),
  'iot-m3': r({
    kind: 'one-shot',
    title: 'IoT networking & protocols one-shot',
    channel: 'Gate Smashers',
    query: 'iot network protocols zigbee wifi mqtt in hindi Gate Smashers',
    language: 'hindi',
  }),
  'iot-m4': r({
    kind: 'one-shot',
    title: 'Arduino programming one-shot',
    channel: 'Paul McWhorter or similar',
    query: 'arduino programming basics in hindi full tutorial',
    language: 'hindi',
  videoId: 'GDrmpF2-6zY',
  }),
  'iot-m5': r({
    kind: 'one-shot',
    title: 'M2M, SDN/NFV and Web of Things one-shot',
    channel: 'Gate Smashers',
    query: 'm2m sdn nfv web of things iot in hindi',
    language: 'hindi',
  }),

  // ──────────────────────────── MAD ────────────────────────────
  'mad-m1': r({
    kind: 'one-shot',
    title: 'Android development fundamentals one-shot',
    channel: 'Programming Knowledge',
    query: 'android development basics java activity manifest one shot hindi',
    language: 'hindi',
  videoId: 'mXjZQX3UzOs',
  }),
  'mad-m2': r({
    kind: 'one-shot',
    title: 'Android components – activities, services, intents one-shot',
    channel: 'Programming Knowledge',
    query: 'android activity service intent broadcast receiver one shot hindi',
    language: 'hindi',
  videoId: 'mXjZQX3UzOs',
  }),
  'mad-m3': r({
    kind: 'one-shot',
    title: 'Android UI layouts & animations one-shot',
    channel: 'Programming Knowledge',
    query: 'android xml layout animation drawing in hindi one shot',
    language: 'hindi',
  }),
  'mad-m4': r({
    kind: 'one-shot',
    title: 'Android testing & publishing one-shot',
    channel: 'Programming Knowledge',
    query: 'android testing publishing play store shared preferences in hindi one shot',
    language: 'hindi',
  }),
  'mad-m5': r({
    kind: 'one-shot',
    title: 'Android storage, networking & telephony APIs one-shot',
    channel: 'Programming Knowledge',
    query: 'android sqlite content provider networking in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── Multimedia ─────────────────────
  'mtech-m1': r({
    kind: 'one-shot',
    title: 'Multimedia foundations one-shot',
    channel: 'Gate Smashers',
    query: 'multimedia basics hardware software in hindi one shot Gate Smashers',
    language: 'hindi',
  videoId: 'BcL7n1tDgU8',
  }),
  'mtech-m2': r({
    kind: 'one-shot',
    title: 'Lossy vs lossless compression one-shot',
    channel: 'Gate Smashers',
    query: 'lossy vs lossless compression huffman rle jpeg mpeg in hindi one shot',
    language: 'hindi',
  }),
  'mtech-m3': r({
    kind: 'one-shot',
    title: 'DTP & animation one-shot',
    channel: 'Design Wale',
    query: 'dtp tools animation special effects multimedia in hindi one shot',
    language: 'hindi',
  videoId: 'pHBkMtSto5I',
  }),
  'mtech-m4': r({
    kind: 'one-shot',
    title: 'Digital images & graphic design one-shot',
    channel: 'Design Wale',
    query: 'digital image graphic design resolution color models in hindi one shot',
    language: 'hindi',
  videoId: '76i6CyoZmAE',
  }),

  // ──────────────────────────── InfoSec ────────────────────────
  'isec-m1': r({
    kind: 'one-shot',
    title: 'Information security basics one-shot',
    channel: 'Gate Smashers',
    query: 'information security basics pain model in hindi one shot Gate Smashers',
    language: 'hindi',
  }),
  'isec-m2': r({
    kind: 'one-shot',
    title: 'Network attacks & mitigations one-shot',
    channel: 'Gate Smashers',
    query: 'network security attacks ipsec https vpn in hindi one shot',
    language: 'hindi',
  }),
  'isec-m3': r({
    kind: 'one-shot',
    title: 'Cryptography & PKI one-shot',
    channel: 'Gate Smashers',
    query: 'cryptography basics pki secure coding in hindi one shot',
    language: 'hindi',
  videoId: 'trHox1bN5es',
  }),
  'isec-m4': r({
    kind: 'one-shot',
    title: 'Firewall, IDS/IPS, VPN one-shot',
    channel: 'Gate Smashers',
    query: 'firewall ids ips vpn concentrator in hindi one shot',
    language: 'hindi',
  }),
  'isec-m5': r({
    kind: 'one-shot',
    title: 'Security standards & auditing one-shot',
    channel: 'Gate Smashers',
    query: 'iso 27001 indian it act ipr security audit in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── ACN ────────────────────────────
  'acn-m1': r({
    kind: 'one-shot',
    title: 'Advanced networking – IPv4 subnetting one-shot',
    channel: 'Gate Smashers',
    query: 'ipv4 subnetting multicast advanced networking in hindi one shot Gate Smashers',
    language: 'hindi',
  }),
  'acn-m2': r({
    kind: 'one-shot',
    title: 'WAN technologies & wireless networks one-shot',
    channel: 'Gate Smashers',
    query: 'frame relay atm mpls wireless network cellular in hindi one shot',
    language: 'hindi',
  }),
  'acn-m3': r({
    kind: 'one-shot',
    title: 'QoS, redundancy & network monitoring one-shot',
    channel: 'Gate Smashers',
    query: 'qos load balancing snmp rmon network monitoring in hindi one shot',
    language: 'hindi',
  }),
  'acn-m4': r({
    kind: 'one-shot',
    title: 'VLAN, VPN, firewall & IPS one-shot',
    channel: 'Gate Smashers',
    query: 'vlan vpn firewall ips proxy server advanced networking in hindi one shot',
    language: 'hindi',
  }),
  'acn-m5': r({
    kind: 'one-shot',
    title: 'Network simulation tools – NS2, Packet Tracer, Wireshark one-shot',
    channel: 'Network Kings',
    query: 'wireshark cisco packet tracer ns2 tutorial in hindi',
    language: 'hindi',
  }),

  // ──────────────────────────── Indian Constitution ────────────
  'icon-m1': r({
    kind: 'one-shot',
    title: 'Indian Constitution – Preamble, FR & FD one-shot',
    channel: 'Study IQ',
    query: 'indian constitution preamble fundamental rights duties one shot hindi Study IQ',
    language: 'hindi',
  }),
  'icon-m2': r({
    kind: 'one-shot',
    title: 'President, PM & Parliament one-shot',
    channel: 'Study IQ',
    query: 'president prime minister parliament indian polity one shot hindi',
    language: 'hindi',
  }),
  'icon-m3': r({
    kind: 'one-shot',
    title: 'State government – Governor, CM, Secretariat one-shot',
    channel: 'Study IQ',
    query: 'governor chief minister state secretariat indian polity one shot hindi',
    language: 'hindi',
  }),
  'icon-m4': r({
    kind: 'one-shot',
    title: 'Local governance – District, Municipal, Panchayat one-shot',
    channel: 'Study IQ',
    query: 'district administration municipal corporation panchayat one shot hindi',
    language: 'hindi',
  }),
  'icon-m5': r({
    kind: 'one-shot',
    title: 'Election Commission one-shot',
    channel: 'Study IQ',
    query: 'election commission india role functioning one shot hindi',
    language: 'hindi',
  }),

  // ──────────────────────────── AI ─────────────────────────────
  'ai-m1': r({
    kind: 'one-shot',
    title: 'AI introduction & agents one-shot',
    channel: 'Gate Smashers',
    query: 'artificial intelligence introduction history agents peas in hindi one shot Gate Smashers',
    language: 'hindi',
  videoId: 'e-egxFtAF_4',
  }),
  'ai-m2': r({
    kind: 'one-shot',
    title: 'AI search algorithms one-shot',
    channel: 'Gate Smashers',
    query: 'heuristic search hill climbing simulated annealing genetic algorithm ai in hindi one shot',
    language: 'hindi',
  }),
  'ai-m3': r({
    kind: 'one-shot',
    title: 'A*, minimax & game playing one-shot',
    channel: 'Gate Smashers',
    query: 'a star algorithm minimax alpha beta pruning game playing in hindi one shot',
    language: 'hindi',
  videoId: 'tvAh0JZF2YE',
  }),
  'ai-m4': r({
    kind: 'one-shot',
    title: 'Planning & CSP one-shot',
    channel: 'Gate Smashers',
    query: 'ai planning constraint satisfaction problem in hindi one shot',
    language: 'hindi',
  }),
  'ai-m5': r({
    kind: 'one-shot',
    title: 'Logic & inference in AI one-shot',
    channel: 'Gate Smashers',
    query: 'propositional logic first order logic forward backward chaining in hindi one shot',
    language: 'hindi',
  videoId: '6490tKrGEic',
  }),

  // ──────────────────────────── DS & ML ────────────────────────
  'dsml-m1': r({
    kind: 'one-shot',
    title: 'Data science & ML introduction one-shot',
    channel: 'Krish Naik',
    query: 'data science machine learning introduction types applications in hindi one shot',
    language: 'hindi',
  videoId: 'JxgmHe2NyeY',
  }),
  'dsml-m2': r({
    kind: 'one-shot',
    title: 'Data preprocessing & visualization one-shot',
    channel: 'Krish Naik',
    query: 'data preprocessing scaling encoding visualization in hindi one shot',
    language: 'hindi',
  }),
  'dsml-m3': r({
    kind: 'one-shot',
    title: 'Statistics & EDA one-shot',
    channel: 'Krish Naik',
    query: 'statistics eda probability distributions parametric nonparametric in hindi one shot',
    language: 'hindi',
  }),
  'dsml-m4': r({
    kind: 'one-shot',
    title: 'ML algorithms one-shot',
    channel: 'Krish Naik',
    query: 'decision tree linear regression knn svm kmeans neural network in hindi one shot',
    language: 'hindi',
  videoId: 'JxgmHe2NyeY',
  }),
  'dsml-m5': r({
    kind: 'one-shot',
    title: 'Social network mining & ethics one-shot',
    channel: 'Gate Smashers',
    query: 'mining social networks graphs community detection ethics in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── Entrepreneurship ───────────────
  'ent-m1': r({
    kind: 'one-shot',
    title: 'Entrepreneurship introduction one-shot',
    channel: 'Unacademy',
    query: 'entrepreneurship introduction types traits business structures in hindi one shot',
    language: 'hindi',
  }),
  'ent-m2': r({
    kind: 'one-shot',
    title: 'Business ideas & plan one-shot',
    channel: 'Unacademy',
    query: 'business plan activity map how to start business in hindi one shot',
    language: 'hindi',
  }),
  'ent-m3': r({
    kind: 'one-shot',
    title: 'STP & SWOT analysis one-shot',
    channel: 'Unacademy',
    query: 'stp segmentation targeting positioning swot analysis in hindi one shot',
    language: 'hindi',
  }),
  'ent-m4': r({
    kind: 'one-shot',
    title: 'Management functions one-shot',
    channel: 'Unacademy',
    query: 'management functions planning organising recruitment selection in hindi one shot',
    language: 'hindi',
  }),
  'ent-m5': r({
    kind: 'one-shot',
    title: 'Startup financing & IPR one-shot',
    channel: 'Unacademy',
    query: 'startup funding options india ipr copyright patent in hindi one shot',
    language: 'hindi',
  }),
  'ent-m6': r({
    kind: 'one-shot',
    title: 'Succession & dissolution one-shot',
    channel: 'Unacademy',
    query: 'succession planning types dissolution harvesting exit strategy in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── Disaster Management ────────────
  'dm-m1': r({
    kind: 'one-shot',
    title: 'Disaster management basics one-shot',
    channel: 'Study IQ',
    query: 'disaster management basics hazard vulnerability risk in hindi one shot',
    language: 'hindi',
  }),
  'dm-m2': r({
    kind: 'one-shot',
    title: 'Types of disasters one-shot',
    channel: 'Study IQ',
    query: 'natural disasters geological hydro meteorological biological technological in hindi one shot',
    language: 'hindi',
  }),
  'dm-m3': r({
    kind: 'one-shot',
    title: 'Disaster management cycle one-shot',
    channel: 'Study IQ',
    query: 'disaster management cycle mitigation preparedness response recovery in hindi one shot',
    language: 'hindi',
  videoId: '5KtVocJfVGw',
  }),
  'dm-m4': r({
    kind: 'one-shot',
    title: 'DM Act 2005 & India policy one-shot',
    channel: 'Study IQ',
    query: 'disaster management act 2005 india ndma ndrf policy in hindi one shot',
    language: 'hindi',
  }),
  'dm-m5': r({
    kind: 'one-shot',
    title: 'S&T for disaster management one-shot',
    channel: 'Study IQ',
    query: 'remote sensing gis gps early warning system disaster communication in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── Renewable Energy ───────────────
  'ren-m1': r({
    kind: 'one-shot',
    title: 'Renewable energy introduction one-shot',
    channel: 'Engineering Digest',
    query: 'renewable energy sources introduction world energy scenario in hindi one shot',
    language: 'hindi',
  }),
  'ren-m2': r({
    kind: 'one-shot',
    title: 'Solar energy one-shot',
    channel: 'Engineering Digest',
    query: 'solar energy solar cell solar pv power generation in hindi one shot',
    language: 'hindi',
  videoId: 'N9LSyBnnf_U',
  }),
  'ren-m3': r({
    kind: 'one-shot',
    title: 'Wind energy one-shot',
    channel: 'Engineering Digest',
    query: 'wind energy wind turbine types site selection in hindi one shot',
    language: 'hindi',
  }),
  'ren-m4': r({
    kind: 'one-shot',
    title: 'Bio-energy one-shot',
    channel: 'Engineering Digest',
    query: 'biomass biogas bio energy ethanol biodiesel in hindi one shot',
    language: 'hindi',
  }),
  'ren-m5': r({
    kind: 'one-shot',
    title: 'Other renewable sources – tidal, geothermal, fuel cells one-shot',
    channel: 'Engineering Digest',
    query: 'tidal wave geothermal fuel cell hydrogen hybrid renewable energy in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── SE ─────────────────────────────
  'se-m1': r({
    kind: 'one-shot',
    title: 'Software engineering introduction one-shot',
    channel: 'Gate Smashers',
    query: 'software engineering introduction sdlc waterfall model in hindi one shot',
    language: 'hindi',
  }),
  'se-m2': r({
    kind: 'one-shot',
    title: 'Agile, spiral & testing one-shot',
    channel: 'Gate Smashers',
    query: 'agile spiral model software testing unit integration in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── e-Governance ───────────────────
  'egovernance-m1': r({
    kind: 'one-shot',
    title: 'e-Governance introduction one-shot',
    channel: 'Gyan Mahima',
    query: 'e governance introduction digital india in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── Robotics ───────────────────────
  'rob-m1': r({
    kind: 'one-shot',
    title: 'Industrial robotics basics one-shot',
    channel: 'Mechanical Guru',
    query: 'industrial robot anatomy applications safety in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── AI/ML (OE) ────────────────────
  'aiml-m1': r({
    kind: 'one-shot',
    title: 'AI & ML introduction one-shot',
    channel: 'Gate Smashers',
    query: 'ai machine learning introduction basics in hindi one shot',
    language: 'hindi',
  }),
  'aiml-m2': r({
    kind: 'one-shot',
    title: 'ML models & evaluation one-shot',
    channel: 'Gate Smashers',
    query: 'machine learning models training evaluation in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── Product Design ─────────────────
  'pd-m1': r({
    kind: 'one-shot',
    title: 'Product design & design thinking one-shot',
    channel: 'Design Wale',
    query: 'product design thinking process prototyping ux ui in hindi one shot',
    language: 'hindi',
  }),

  // ──────────────────────────── Engineering Economics ──────────
  'ee-m1': r({
    kind: 'one-shot',
    title: 'Engineering economics – costing & financials one-shot',
    channel: 'Unacademy',
    query: 'engineering economics costing break even financial statements ratios in hindi one shot',
    language: 'hindi',
  }),
};