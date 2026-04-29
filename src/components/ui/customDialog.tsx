import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

// type Props {

// }
const CustomDialog = ({
  title,
  description,
  tech,
  link,
  details,
}: {
  title: string;
  description: string;
  tech: string;
  link: string;
  details: string[];
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="px-3 py-1 text-center text-secondary-foreground text-xs font-medium bg-secondary rounded-full cursor-pointer">
          View Details
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-4xl! bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-muted-foreground">
            {description}
          </AlertDialogDescription>
          <div className="space-y-3">
            {details.map((group, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                <p className="text-muted-foreground leading-relaxed">{group}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.split(", ").map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomDialog;
