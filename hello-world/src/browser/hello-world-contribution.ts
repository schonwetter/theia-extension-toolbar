import {
    TabBarToolbarContribution,
    TabBarToolbarRegistry,
} from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { injectable } from '@theia/core/shared/inversify';

@injectable()
export class HelloWorldTabBarToolbarContribution
    implements TabBarToolbarContribution
{
    registerToolbarItems(registry: TabBarToolbarRegistry): void {
        registry.registerItem({
            id: 'my-toolbar-item',
            render: () => {
                return 'hello, world!';
            },
        });
    }
}
