import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "Email", href: "mailto:anontoshuvo99@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-anonto-shuvo/",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/shuvo-99", icon: Github },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Md. Anonto Shuvo. All rights reserved.</p>

        <div className="flex items-center gap-1">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:text-foreground hover:bg-muted transition-colors"
            >
              <Icon className="w-[18px] h-[18px]" />
            </a>
          ))}
          <span aria-hidden className="mx-2 h-5 w-px bg-border" />
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-3 h-9 rounded-full hover:text-foreground hover:bg-muted transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
