import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Icon } from "@iconify/react";

interface Tech {
  title: string;
  iconName: string;
}

const CustomDialog = ({
  title,
  description,
  techs,
  link,
  details,
}: {
  title: string;
  description: string;
  techs: Tech[];
  link: string;
  details: string[];
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
        >
          Details
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[95vw] md:max-w-2xl! lg:max-w-4xl! max-h-[80vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-muted-foreground">
            {description}
          </AlertDialogDescription>
          <div className="space-y-5">
            <div className="space-y-3">
              {details.map((group, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {group}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-around">
              {techs.map((t) => (
                <div
                  key={t.title}
                  className="space-y-2 flex flex-col items-center "
                >
                  <Icon icon={t.iconName} width="32" height="32" />
                  <p className="text-secondary-foreground text-xs font-medium">
                    {t.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Visit live site ↗
          </a>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomDialog;
