## Lib:

- Github Repo: https://github.com/rrs301/erasor_clone
- Landing Page Lib: https://www.hyperui.dev/
- UI Component Kit: https://ui.shadcn.com/

## Application Cloned:

- App: https://app.eraser.io/dashboard/all

## Information

- We can have components either outside /app folder because app router uses convention that any dir/ inside `app/` will act as Route URL segment with that folder name

- Another hack is that we can have `components/` folder inside `app/` folder but we can rename with `_prefix` convention. So it can't be read as URL segment and we can keep pages and components under same
  directory. It is just for maintainability POV.

## Authentication

Kinde

- https://bitbytedevs.kinde.com/admin
- Account Created: khizerrehandev@gmail.com

## Testing Account:

- khizerrehands+1@gmail.com
- password: testing@123

## Important Points:

- Authentication this Path matcher config is very important otherwise during back/forth middleware
  won't be able to able to authenticate and user without validation check can be allowed to access PROTECTED routes which we don't want to allow it.

```
export const config = {
  matcher: ["/dashboard"],
};

```
