import remoteImg from "@/assets/remote-access.png";
import { Cloud, Smartphone } from "lucide-react";

const RemoteAccessSection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading font-extrabold text-2xl md:text-4xl mb-4">
            REMOTE ACCESS
          </h2>
          <p className="text-secondary-foreground/80 mb-8">
            Stay connected with 24/7 real-time access to monitor & manage your
            system's health and status wirelessly using a phone, tablet, or computer.
          </p>
          <div className="flex gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm">
              <Cloud size={20} className="text-primary" />
              <span>Cloud Sync</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Smartphone size={20} className="text-primary" />
              <span>Your Control Panel on Any Device</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-heading font-semibold hover:opacity-90 transition">
              Get it on Google Play
            </a>
            <a href="#" className="bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-heading font-semibold hover:opacity-90 transition">
              Download on App Store
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={remoteImg} alt="Remote access illustration" className="max-w-xs md:max-w-sm" />
        </div>
      </div>
    </section>
  );
};

export default RemoteAccessSection;
