import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './users/login/login.component'

const appRoutes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/' },
	{ path: '', component: LoginComponent }
]

export const appRouting = RouterModule.forRoot(appRoutes)