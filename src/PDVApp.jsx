import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const PDVApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
