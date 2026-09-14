import type { ChapterNote } from '../../types';

export const ISEC_NOTES: ChapterNote[] = [
  {
    moduleId: 'isec-m1',
    title: 'Module 1 · Information Security & OS Security',
    sections: [
      {
        h: '1.1 InfoSec Fundamentals & PAIN',
        items: [
          '**Information security** = protecting confidentiality, integrity and availability (**CIA triad**) of information assets.',
          'Also: **authenticity** (identity assurance), **non-repudiation** (sender cannot deny), **authorisation/access control**, **accountability** (audit trail).',
          '**PAIN** = the four pillars commonly screened in exams: **P**rivacy, **A**uthentication, **I**ntegrity, **N**on-repudiation.',
          '**Threats vs vulnerabilities vs risks**: threat = potential harm, vulnerability = weakness exploited, risk = likelihood × impact.',
          '**Attack types**: malware (virus, worm, Trojan, ransomware), phishing, DDoS, MITM, social engineering, SQL injection.',
        ],
      },
      {
        h: '1.2 Operating System Security Features',
        items: [
          '**OS security functions**: user authentication (password, biometrics, tokens), access control (DAC/MAC, RBAC), memory protection (bound registers, segmentation/paging), process isolation, file permissions.',
          '**Windows security**: SAM database, NTFS ACLs, EFS, BitLocker encryption, UAC, Windows Defender/Firewall, Active Directory + Group Policy.',
          '**Linux/Unix security**: users/groups, file modes `chmod` (rwx, umask), sudo, `/etc/shadow` password hashes, PAM, AppArmor/SELinux (MAC), iptables/nftables.',
          '**Patching & hardening**: keep OS updated, disable unused services/ports, remove default accounts, least-privilege principle, log monitoring, antivirus/EDR.',
          '**BIOS/UEFI security**: Secure Boot, TPM for measured boot and disk encryption keys.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain the CIA triad and extend with authenticity/non-repudiation.',
          'What is PAIN in information security?',
          'List and explain OS-level access control mechanisms.',
          'Compare DAC vs MAC.',
          'Write Windows vs Linux hardening measures.',
        ],
      },
    ],
  },
  {
    moduleId: 'isec-m2',
    title: 'Module 2 · Network Security Weaknesses & Solutions',
    sections: [
      {
        h: '2.1 Protocol & Device Weaknesses',
        items: [
          '**TCP/IP weaknesses**: IP spoofing (no source authentication), TCP handshake flaws (SYN flood), DNS spoofing/poisoning, ARP spoofing, clear-text protocols (Telnet, FTP, HTTP, SNMP v1/v2).',
          '**Routing/device weaknesses**: weak router default credentials, misconfigured access lists, broadcast storms, VLAN hopping, unsecured admin (SNMP/HTTP) interfaces.',
          '**Common attacks**: sniffing, session hijacking, man-in-the-middle, packet forgery, replay attacks, DDoS (amplification).',
          'Wireless weaknesses: WEP cracking, rogue AP, evil twin, deauth attacks — use WPA2/WPA3 + 802.1X.',
        ],
      },
      {
        h: '2.2 Mitigations: IPSec, HTTPS, VLAN & VPN',
        items: [
          '**IPSec**: authenticates and encrypts IP packets; protocols **AH** (authentication) and **ESP** (encryption+auth); modes **transport** (host-to-host) vs **tunnel** (site-to-site/VPN); uses IKE for key exchange.',
          '**HTTPS = HTTP over TLS/SSL**: certificates, cipher suites, mitigates sniffing and MITM; HSTS for forcing secure connections.',
          '**VLAN (IEEE 802.1Q)**: logical segmentation of a switch to isolate traffic; mitigates broadcast storms and limits blast radius; risks: VLAN hopping.',
          '**VPN**: encrypted tunnel over public network — remote-access and site-to-site; solutions include IPSec, SSL/TLS, OpenVPN, WireGuard.',
          'Hardening device: change defaults, SSH instead of Telnet, role-based admin, logging, ACLs, firmware updates.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain IPSec AH vs ESP and transport vs tunnel mode.',
          'How does HTTPS protect data and how is trust established?',
          'What are VLANs and how do they improve security?',
          'Describe VPN architecture and types.',
          'List TCP/IP protocol weaknesses and their countermeasures.',
        ],
      },
    ],
  },
  {
    moduleId: 'isec-m3',
    title: 'Module 3 · Cryptography & PKI',
    sections: [
      {
        h: '3.1 Cryptography Basics',
        items: [
          '**Cryptography** = transforming plaintext ↔ ciphertext to preserve confidentiality/integrity/authenticity.',
          '**Symmetric (private key)**: single shared key — fast; e.g., **DES** (56-bit, weak vs brute force), **3DES, AES** (128/192/256-bit, standard), Blowfish/Twofish, RC4; problem = key distribution.',
          '**Asymmetric (public key)**: key pair (public encrypt, private decrypt and vice versa); solves key exchange — **RSA** (factoring-based), DSA, ECC; slower, used for small volumes.',
          '**Hash functions**: one-way, fixed-length digest (MD5 — broken, SHA-1 — deprecated, SHA-256), detect tampering; used with digital signatures.',
          '**Hybrid systems**: asymmetric exchange of session key + symmetric bulk encryption (e.g., TLS).',
        ],
      },
      {
        h: '3.2 Public Key Infrastructure & Secure Coding',
        items: [
          '**PKI** = framework managing **certificates** binding a public key to an identity; components: **CA** (Certification Authority), **RA** (Registration Authority), certificate repository/CRL, end entities.',
          '**X.509 certificate**: subject, issuer, public key, validity, serial number, signature of CA, extensions; used in TLS/HTTPS, code signing, email (S/MIME).',
          '**Cert lifecycle**: enrolment (CSR) → issuance → revocation/expiry → renewal; **CRL & OCSP** check validity.',
          '**Digital signature**: hash + encrypt with sender private key → receiver verifies with public key (integrity + authenticity + non-repudiation).',
          '**PGP**: web-of-trust model alternative to hierarchical PKI.',
          '**Secure coding**: input validation, parameterised queries (SQLi), output encoding (XSS), least privilege, error handling, secrets management, updating dependencies.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare symmetric and asymmetric cryptography with examples.',
          'Explain RSA key generation/encryption/decryption (theory).',
          'Define hash, digital signature; show signing and verification flow.',
          'Describe the components and working of PKI / X.509.',
          'Short notes on secure coding practices.',
        ],
      },
    ],
  },
  {
    moduleId: 'isec-m4',
    title: 'Module 4 · Network Security Products',
    sections: [
      {
        h: '4.1 Firewalls & IDS/IPS',
        items: [
          '**Firewall** = filter between trusted and untrusted networks based on rules: **packet filtering** (stateless ACL on IP/ports), **stateful inspection** (tracks connections), **proxy/application gateway** (terminates sessions).',
          '**DMZ** design: public services placed in demilitarized zone, isolated from internal LAN.',
          '**IDS (Intrusion Detection System)** — monitors and alerts (passive); **IPS (Intrusion Prevention)** — inline, can block/drop in real time.',
          '**Detection types**: signature-based (known attacks), anomaly-based (baseline deviation), policy-based.',
          'Deployment: network-based (NIDS at network choke points) vs host-based (HIDS on endpoints).',
        ],
      },
      {
        h: '4.2 VPN Concentrator, Gateways & Other Products',
        items: [
          '**VPN concentrator** — central device terminating many VPN tunnels, enforcing policies, assigning IP pools, monitoring sessions.',
          '**Security gateway** — unified device: firewall + VPN + IDS/IPS + content filtering + anti-malware (UTM/NGFW).',
          '**Proxy servers** — forward proxy (client→internet caching/filtering), reverse proxy (load balance/protect servers); content filtering and NAT.',
          '**Antivirus/EDR, SIEM** (centralised log correlation: Splunk, Wazuh), **Honeypots** (decoys), **WAF** (web app protection).',
          'Layered defence (**defence in depth**): firewall → NIDS → load balancer/reverse proxy → host hardening → EDR.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Classify firewalls and explain stateful inspection.',
          'Differentiate IDS and IPS with modes of deployment.',
          'What is a VPN concentrator and where is it placed?',
          'Explain DMZ architecture.',
          'Compare forward and reverse proxy.',
        ],
      },
    ],
  },
  {
    moduleId: 'isec-m5',
    title: 'Module 5 · Security Standards, Audit & Policies',
    sections: [
      {
        h: '5.1 Security Standards: ISO 27001, IT Act, IPR',
        items: [
          '**ISO/IEC 27001** — international information security management system (**ISMS**) standard: PDCA cycle, Annex A controls, certification via audit.',
          '**ISO/IEC 27002** — code of practice / control catalogue; ISO 27005 risk management.',
          '**Indian IT Act 2000** — legal framework for e-commerce, digital signatures; **sections 43, 66 (data tampering/hacking), 66C/E (identity, privacy), 66D (impersonation), 67 (obscene content)**, 72 (breach of confidentiality); amended 2008; CERT-In empowered.',
          '**IPR**: copyright (author\u2019s works), patents (inventions), trademarks, trade secrets; software licensing and infringement basics.',
          'Other standards: PCI-DSS (payment card), HIPAA (health), GDPR (privacy), NIST CSF.',
        ],
      },
      {
        h: '5.2 Security Audit, Policies & Business Continuity',
        items: [
          '**Security audit** = systematic evaluation of controls vs policy/standards; types: internal, external, compliance; people+process+technology reviewed.',
          '**Audit process**: scope → evidence collection → risk assessment → findings → recommendations → report.',
          '**Security policies**: access control, password, acceptable use (AUP), incident response, BYOD, data classification; must be documented, communicated and enforced.',
          '**Business continuity (BCP) & disaster recovery (DRP)**: RTO (recovery time objective), RPO (recovery point objective), backup strategies (full/incremental/differential, off-site), failover sites (hot/warm/cold).',
          '**Incident response lifecycle**: preparation → detection → containment → eradication → recovery → lessons learned.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Explain ISO 27001 ISMS and its PDCA approach.',
          'Which IT Act sections deal with hacking and identity theft?',
          'What is a security audit? Describe the audit process.',
          'Differentiate BCP and DRP; explain RTO/RPO.',
          'Write a one-page acceptable-use policy outline.',
        ],
      },
    ],
  },
];