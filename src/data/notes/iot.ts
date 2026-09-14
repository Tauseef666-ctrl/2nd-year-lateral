import type { ChapterNote } from '../../types';

export const IOT_NOTES: ChapterNote[] = [
  {
    moduleId: 'iot-m1',
    title: 'Module 1 · Introduction to IoT',
    sections: [
      {
        h: '1.1 IoT Basics: Definitions & Characteristics',
        items: [
          '**IoT** = network of physical objects ("things") embedded with sensors, software and connectivity that exchange data over the internet with minimal human intervention.',
          '**Things** can be devices, vehicles, appliances, wearables, machines — anything uniquely addressable and networkable.',
          '**Characteristics**: connectivity, dynamic/interactive, heterogeneity (different HW/SW), huge scale (billions of devices), self-configuring, safety & privacy needs, energy constraints.',
          '**Typical IoT architecture layers**: perception (sensors/actuators) → network (connectivity) → middleware (processing) → application layer.',
          'First IoT device: a Coke vending machine at CMU (1982); Kevin Ashton coined "Internet of Things" (1999); NB-IoT/LoRaWAN drive LPWAN growth.',
        ],
      },
      {
        h: '1.2 IoT Design: Physical/Logical, Protocols & APIs',
        items: [
          '**Physical design**: things, IoT protocols, IoT level-1 to level-6 deployments.',
          '**Logical (functional) design**: `iot system` blocks — device/communication/service management/database/analytics/application layers (6 layers common).',
          '**IoT protocols**: MQTT (publish-subscribe, lightweight, QoS levels), CoAP (UDP-based RESTful), HTTP/HTTPS, AMQP (enterprise messaging), DDS, XMPP.',
          '**Communication patterns**: request–response, publish–subscribe, push–pull, exclusive pair.',
          '**IoT APIs**: RESTful APIs (HTTP verbs over resources), WebSocket (full-duplex), MQTT broker APIs — enable device-to-application data flow.',
          '**Development boards & tools**: Arduino, Raspberry Pi, ESP8266/ESP32, sensors/shields; MQTT/Broker libraries and cloud dashboards (ThingSpeak, Blynk, AWS IoT).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Define IoT and list its characteristics.',
          'Draw the logical design block diagram of an IoT system.',
          'Compare MQTT vs CoAP protocols.',
          'Explain the request–response and publish–subscribe patterns.',
          'Why is IoT called a "system of systems"?',
        ],
      },
    ],
  },
  {
    moduleId: 'iot-m2',
    title: 'Module 2 · IoT Devices',
    sections: [
      {
        h: '2.1 Electronics Basics',
        items: [
          '**Breadboard** — solderless prototyping board with connected rows/columns for wiring circuits without soldering.',
          '**LED** — light-emitting diode; anode (+) longer leg, cathode (−) short leg; needs a **current-limiting resistor** (~220 Ω) to avoid damage.',
          '**Resistor** — limits current / divides voltage; **colour code** (e.g., red-red-brown = 220 Ω); value measured by multimeter.',
          '**Voltage/current essentials**: series (current constant, V divides), parallel (V constant, I divides); Ohm\u2019s law V = IR.',
          '**Power for projects**: 5 V from USB / Arduino pins; 3.3 V logic on ESP boards; grounding common referenced as GND.',
        ],
      },
      {
        h: '2.2 Sensors & Actuators',
        items: [
          '**Sensor** = transducer converting a physical quantity (temp, light, motion, distance) into an electrical signal; **actuator** = converts signal to physical action (e.g., motor, relay, buzzer).',
          '**Common sensors**: DHT11/DHT22 (temperature + humidity), LDR (light), ultrasonic HC-SR04 (distance), PIR (motion), IR (obstacle), soil-moisture, gas (MQ-2/MQ-135), accelerometer (MPU6050).',
          '**Common actuators**: DC motor, servo motor, stepper, relay module (switch high-power loads), buzzer, LED, solenoid.',
          '**Digital vs analog signals**: digital = HIGH/LOW (0/1); analog = varying voltage handled by ADC pins on Arduino.',
          'Sensor data flows: sensor → signal conditioning → ADC → microcontroller → network stack → cloud/application.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'What is a breadboard and why use resistors with LEDs?',
          'Explain the difference between sensors and actuators with 3 examples each.',
          'Describe how an ultrasonic distance sensor works (trig/echo principle).',
          'Why are sensors "analog" mostly and how does ADC help?',
          'Draw the block diagram of a sensing node.',
        ],
      },
    ],
  },
  {
    moduleId: 'iot-m3',
    title: 'Module 3 · IoT Networks',
    sections: [
      {
        h: '3.1 Network Components & Connectivity',
        items: [
          '**IoT network components**: end devices (sensors/actuators), gateways, routers, switches, access points, cloud backend — connected over **PAN/LAN/WAN/LPWAN**.',
          '**Connectivity options**: Wi-Fi (802.11), Bluetooth/BLE, ZigBee (low-power mesh), LoRaWAN (long range, low bandwidth), NB-IoT and LTE-M (cellular LPWAN), 6LoWPAN (IPv6 over low-power WPAN), NFC/RFID (short range).',
          '**Gateways** bridge heterogeneous devices to the internet (protocol conversion, aggregation, edge processing).',
          '**ZigBee** operates at 2.4 GHz; coordinator, router, end-device roles; forms mesh networks with multi-hop.',
        ],
      },
      {
        h: '3.2 Connections & Protocols',
        items: [
          '**Direct connection** (device ↔ internet), **indirect through gateway**, and **gateway + cloud** topologies; also star, tree, mesh logical topologies.',
          '**OSI layering for IoT**: application (MQTT/CoAP/HTTP), transport (TCP/UDP), network (IPv4/IPv6, RPL), data link (802.15.4, Wi-Fi, BLE), physical.',
          '**MQTT details**: broker-centred publish/subscribe over TCP, small fixed header, QoS 0/1/2, retained messages, last-will; topics organised `/a/b`; ideal for low-power constrained devices.',
          '**CoAP**: runs over UDP, REST-like (GET/PUT/POST/DELETE), observe option for near-real-time; uses COAP:// URIs and message IDs for reliability.',
          '**Bandwidth/latency trade-offs**: Wi-Fi/4G/5G for rich data; LPWAN for battery-powered sparse sensor messages.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Classify IoT network with examples (PAN, LAN, WAN, LPWAN).',
          'Explain the role of an IoT gateway.',
          'Compare Wi-Fi, Bluetooth/BLE and ZigBee.',
          'Describe MQTT architecture with broker, topics and publish-subscribe.',
          'Draw the IoT protocol stack mapping onto the OSI model.',
        ],
      },
    ],
  },
  {
    moduleId: 'iot-m4',
    title: 'Module 4 · Arduino',
    sections: [
      {
        h: '4.1 Arduino Board & IDE Basics',
        items: [
          '**Arduino** = open-source electronics platform: microcontroller (ATmega328P on Uno) + IDE, for prototyping IoT/interactive systems.',
          '**Uno pinout**: digital pins 0–13 (~PWM on 3,5,6,9,10,11), analog-in A0–A5 (10-bit ADC), 5 V / 3.3 V / GND, RESET, RX/TX (pins 0,1 serial), 16 MHz crystal, USB-B port.',
          '**IDE flow**: install boards package → Tools > Board/Port selection → `void setup()` runs once → `void loop()` repeats forever → Verify (✓) compiles → Upload.',
          '**Common functions**: `pinMode(pin, INPUT/OUTPUT)`, `digitalWrite`, `digitalRead`, `analogRead`, `analogWrite` (PWM 0–255), `delay(ms)`, `millis()` (non-blocking timing), `Serial.begin(9600)` + `Serial.print/println` for debugging.',
          'Avoid common errors: wrong board/port, no braces, wrong pin numbers, missing resistor — LED burn.',
        ],
      },
      {
        h: '4.2 Programming Structure & Types',
        items: [
          '**Program structure**: global declarations → `setup()` → `loop()`.',
          '**Data types**: int, byte, long, float, char, boolean; constants HIGH/LOW, INPUT_PULLUP, OUTPUT.',
          '**Control**: if/else, switch, while, do-while, for; operators same as C.',
          '**Functions**: return types, parameters, local vs global scope; object style with libraries.',
          '**Libraries** (Sketch > Include): e.g., `Servo.h`, `LiquidCrystal.h`, `DHT.h`, `SoftwareSerial.h` — include via `#include <>` and install from Library Manager.',
          'Pattern examples: button + LED (digital input/output), LDR + LED (analog threshold), LED blink and traffic-light simulation (classics).',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Draw the functional block diagram of Arduino Uno and label pins.',
          'Write a sketch: LED blink, and one reading a button with pull-up.',
          'Explain `setup()` vs `loop()` and PWM on Arduino.',
          'What is the role of the ADC and resolution of analogRead?',
          'Write a sketch to print sensor values over Serial Monitor.',
        ],
      },
    ],
  },
  {
    moduleId: 'iot-m5',
    title: 'Module 5 · IoT and M2M',
    sections: [
      {
        h: '5.1 M2M and IoT',
        items: [
          '**M2M** = direct machine-to-machine communication, typically wired/wireless point-to-point, closed systems, no internet/cloud (e.g., OBD car diagnostics, vending machine telemetry).',
          '**M2M vs IoT**: M2M — dedicated links, restricted devices, local apps; IoT — internet-centric, scalable ecosystem, cloud analytics, heterogeneous protocols, open APIs.',
          '**M2M architecture**: devices/cache/gateway/network → applications domain; **M2M gateway** performs protocol/address mapping and data aggregation.',
          '**IoT reference architecture**: perception → transport(edge) → processing → application; stacking shows where intelligence (edge vs cloud) lives.',
        ],
      },
      {
        h: '5.2 SDN, NFV and Web of Things',
        items: [
          '**SDN (Software-Defined Networking)** — separates **control plane** (centralised controller) from **data plane** (switches forwarding only); enables dynamic routing, programmability, efficient management of large IoT networks.',
          '**NFV (Network Function Virtualisation)** — runs network functions (firewall, load balancer, gateway) as software on commodity servers instead of dedicated hardware; lowers cost and speeds deployment.',
          '**Web of Things (WoT)** — reuses the web stack (HTTP, REST, JSON, WebSocket) to make IoT devices addressable and interoperable; W3C WoT standard layers: building blocks (Thing Description, binding templates), integration with browsers.',
          '**Edge vs Cloud**: edge computing (fog) does low-latency local processing near sensors; cloud handles big data, ML and long-term storage.',
        ],
      },
      {
        h: 'Exam Focus',
        items: [
          'Compare M2M and IoT with a table.',
          'Explain SDN: separate the control and data plane with a diagram.',
          'What is NFV and how does it benefit IoT service deployment?',
          'Describe Web of Things and its relationship with REST APIs.',
          'Short notes on edge computing and M2M gateway.',
        ],
      },
    ],
  },
];