import { useTranslation } from "@/contexts/TranslationContext";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full py-8 px-6 md:px-12 border-t border-white/5 flex justify-between items-center text-sm text-text-tertiary bg-background">
      <div>
        © {new Date().getFullYear()} Chaymae Harrach
      </div>
      <div>
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
