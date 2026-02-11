export const projects = [
  {
    id: 1,
    title: "NOC Real-Time Monitoring Dashboard",
    category: "Monitoring",
    year: "2025",
    description:
      "Membangun dashboard monitoring real-time untuk health check link MPLS, internet, dan server core. Alert dikirim otomatis ke Telegram untuk respon lebih cepat.",
    tech: ["Zabbix", "Grafana", "Linux", "Telegram API"],
    demo: "https://example.com/case-study/noc-dashboard",
    github: "https://github.com/arif-netops/noc-monitoring-dashboard",
  },
  {
    id: 2,
    title: "Secure Remote Access for Branch Office",
    category: "Security",
    year: "2025",
    description:
      "Implementasi VPN IPsec antar kantor untuk akses aman ke aplikasi internal, lengkap dengan hardening policy firewall dan segmentasi VLAN.",
    tech: ["FortiGate", "IPsec VPN", "ACL", "VLAN"],
    demo: "https://example.com/case-study/secure-remote-access",
    github: "https://github.com/arif-netops/secure-remote-access",
  },
  {
    id: 3,
    title: "Incident Handling & Escalation Workflow",
    category: "Operations",
    year: "2024",
    description:
      "Menyusun SOP incident handling untuk tim NOC agar proses deteksi, eskalasi, dan recovery lebih konsisten. MTTR berhasil turun hingga 35%.",
    tech: ["ITIL", "NOC SOP", "Runbook", "Postmortem"],
    demo: "https://example.com/case-study/incident-workflow",
    github: "https://github.com/arif-netops/incident-handling-workflow",
  },
  {
    id: 4,
    title: "Link Capacity Optimization",
    category: "Reliability",
    year: "2024",
    description:
      "Optimasi kapasitas link WAN dengan traffic analysis dan load balancing policy untuk menjaga performa aplikasi kritikal di jam sibuk.",
    tech: ["NetFlow", "QoS", "Policy Routing", "PRTG"],
    demo: "https://example.com/case-study/link-optimization",
    github: "https://github.com/arif-netops/link-capacity-optimization",
  },
];
