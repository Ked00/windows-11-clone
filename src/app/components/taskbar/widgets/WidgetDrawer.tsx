import { useIsShowing } from "@/app/hooks/isShowing";
import { Drawer } from "@mantine/core";

export default function WidgetDrawer() {
    const isShowing = useIsShowing(false)
  return (
    // <div className="absolute bg-[#eaeaea40] w-2/4 h-[750px] rounded-lg ml-3 mt-3 backdrop-blur">
    // </div>

    <div>
        <Drawer opened={isShowing.isShowing} onClose={isShowing.reverseShowing}></Drawer>
    </div>
  );
}
