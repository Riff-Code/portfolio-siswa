export const projects = [
  {
    id: 1,
    title: "Branch Office SD-WAN Migration",
    category: "Enterprise Networking",
    year: "2025",
    description:
      "Migrasi 12 kantor cabang dari MPLS tradisional ke SD-WAN dengan dual ISP. Hasilnya latency aplikasi kritikal turun 28% dan failover lebih stabil.",
    tech: ["Cisco ISR", "IPSec VPN", "BGP", "ThousandEyes"],
    demo: "https://example.com/case-study/sdwan-migration",
    github: "https://github.com/arif-netops/sdwan-migration-docs",
  },
  {
    id: 2,
    title: "Network Monitoring & Alerting Stack",
    category: "Observability",
    year: "2024",
    description:
      "Membangun monitoring berbasis Zabbix + Grafana untuk 300+ network devices. Mean Time To Detect incident turun dari 25 menit menjadi 7 menit.",
    tech: ["Zabbix", "Grafana", "Telegram Bot API", "Linux"],
    demo: "https://example.com/case-study/network-observability",
    github: "https://github.com/arif-netops/network-monitoring-stack",
  },
  {
    id: 3,
    title: "Campus Firewall Hardening Project",
    category: "Network Security",
    year: "2024",
    description:
      "Redesign firewall policy dan segmentasi VLAN untuk lingkungan kampus multi-gedung. Menutup port berisiko tinggi dan menurunkan insiden brute-force signifikan.",
    tech: ["FortiGate", "ACL", "VLAN", "Syslog"],
    demo: "https://example.com/case-study/firewall-hardening",
    github: "https://github.com/arif-netops/firewall-hardening-guide",
  },
  {
    id: 4,
    title: "Infrastructure as Code for Lab Network",
    category: "Automation",
    year: "2023",
    description:
      "Otomasi provisioning lab network untuk tim internal memakai Ansible dan template konfigurasi. Waktu setup environment baru turun dari 2 jam ke 20 menit.",
    tech: ["Ansible", "Jinja2", "Netmiko", "GitHub Actions"],
    demo: "https://example.com/case-study/network-automation-lab",
    github: "https://github.com/arif-netops/network-lab-automation",
  },
];
