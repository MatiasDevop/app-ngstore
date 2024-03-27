import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const currentMenu = route.url[0].path;
  const router=inject(Router)
  if (currentMenu == 'blog') {
    return true
  }else{
    alert('access denied');
    router.navigate(['']);
    return false;
  }
};
