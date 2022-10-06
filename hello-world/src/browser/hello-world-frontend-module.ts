import { TabBarToolbarContribution } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { ContainerModule } from '@theia/core/shared/inversify';
import { HelloWorldTabBarToolbarContribution } from './hello-world-contribution';

export default new ContainerModule((bind) => {
    bind(TabBarToolbarContribution).to(HelloWorldTabBarToolbarContribution);
});
