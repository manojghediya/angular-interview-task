import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ 
		path: '', 
		loadChildren: () => import('./mod-user-details/mod-user-details.module').then(m => m.ModUserDetailsModule) 
	},	
	{ 
		path: 'user-detail', 
		loadChildren: () => import('./mod-user-details/mod-user-details.module').then(m => m.ModUserDetailsModule) 
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
