export const mainNav = [
  { label: "Work", href: "/projects" },
  { label: "Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
]

export const footerNav = {
  work: { 
    label: "Work", 
    links: [
      { label: "All Projects", href: "/projects" },
      { label: "Residential", href: "/projects?type=Residential" },
      { label: "Cultural", href: "/projects?type=Cultural" },
      { label: "Commercial", href: "/projects?type=Commercial" },
      { label: "Public", href: "/projects?type=Public" },
    ]
  },
  studio: { 
    label: "Studio", 
    links: [
      { label: "About Us", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Philosophy", href: "/philosophy" },
      { label: "Awards", href: "/awards" },
      { label: "Careers", href: "/careers" },
    ]
  },
  connect: { 
    label: "Connect", 
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Press", href: "/contact" },
      { label: "Journal", href: "/journal" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ]
  }
}
