import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './page/tabs/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'error', loadChildren: './error/error.module' },
  { path: 'ui/button', loadChildren: './page/ui/button/button.module#ButtonPageModule' },
  { path: 'ui/action', loadChildren: './page/ui/action/action.module#ActionPageModule' },
  { path: 'ui/alert', loadChildren: './page/ui/alert/alert.module#AlertPageModule' },
  { path: 'ui/badge', loadChildren: './page/ui/badge/badge.module#BadgePageModule' },
  { path: 'ui/card', loadChildren: './page/ui/card/card.module#CardPageModule' },
  { path: 'ui/checkbox', loadChildren: './page/ui/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'ui/chip', loadChildren: './page/ui/chip/chip.module#ChipPageModule' },
  { path: 'ui/content', loadChildren: './page/ui/content/content.module#ContentPageModule' },
  { path: 'ui/time', loadChildren: './page/ui/time/time.module#TimePageModule' },
  { path: 'ui/float-button', loadChildren: './page/ui/float-button/float-button.module#FloatButtonPageModule' },
  { path: 'ui/grid', loadChildren: './page/ui/grid/grid.module#GridPageModule' },
  { path: 'ui/infinte-scroll', loadChildren: './page/ui/infinte-scroll/infinte-scroll.module#InfinteScrollPageModule' },
  { path: 'ui/icons', loadChildren: './page/ui/icons/icons.module#IconsPageModule' },
  { path: 'ui/input', loadChildren: './page/ui/input/input.module#InputPageModule' },
  { path: 'ui/item', loadChildren: './page/ui/item/item.module#ItemPageModule' },
  { path: 'ui/list', loadChildren: './page/ui/list/list.module#ListPageModule' },
  { path: 'ui/media', loadChildren: './page/ui/media/media.module#MediaPageModule' },
  { path: 'ui/menu', loadChildren: './page/ui/menu/menu.module#MenuPageModule' },
  { path: 'ui/modal', loadChildren: './page/ui/modal/modal.module#ModalPageModule' },  { path: 'example', loadChildren: './page/ui/modal/example/example.module#ExamplePageModule' },





 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
