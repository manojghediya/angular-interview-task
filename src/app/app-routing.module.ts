import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ 
		path: '', 
		loadChildren: () => import('./mod-user-details/mod-user-details.module').then(m => m.ModUserDetailsModule) 
	},	
	{ 
		path: 'screen-2', 
		loadChildren: () => import('./mod-user-details-2/mod-user-details-2.module').then(m => m.ModUserDetailsModule2) 
	}	
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		useHash: true,
		preloadingStrategy: PreloadAllModules
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
