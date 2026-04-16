import { UsersIcon, DatabaseIcon, CheckCircleIcon, BoltIcon } from "./icons";

const proofItems = [
  { icon: UsersIcon, number: "+5.000", label: "usuarios ativos" },
  { icon: DatabaseIcon, number: "+1M", label: "resumos" },
  { icon: CheckCircleIcon, number: "97.4%", label: "de satisfacao" },
  { icon: BoltIcon, number: "24/7", label: "suporte integral" },
];

export function SocialProof() {
  return (
    <section className="py-11 border-y border-border bg-y400/[0.015] relative overflow-hidden">
      <span className="absolute top-1/2 -translate-y-1/2 -left-5 font-mono text-border-accent text-5xl font-extrabold opacity-40">{">>>"}</span>
      <span className="absolute top-1/2 -translate-y-1/2 -right-5 font-mono text-border-accent text-5xl font-extrabold opacity-40">{"<<<"}</span>
      
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {proofItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3.5 text-text-secondary text-[0.85rem] font-mono">
              <div className="w-11 h-11 bg-y400/6 border border-border-accent rounded-xl flex items-center justify-center text-y400">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-lg text-n100">{item.number}</div>
                <div className="text-muted text-[0.72rem] uppercase tracking-wide">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
