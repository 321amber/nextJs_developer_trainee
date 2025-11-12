if we want to use search parameters , there are two important concepts regarding it, 
if we want to use the serch parameters to our app's server component, we use "searchParams" from the props 
and if we need the search parameters to the client component we have to use the "useSearchParams"


catch-all-segments: it is for catching all the routes like blog/tech/postid without creating the dynamic routes. we write like this: [...slug]


Fetching data in server components:
fetch api directly




Suspense: it lets us fininsh a fallback until its children has finished loading.
examples:
show loading spinner for just part of the page.
fetch server side data inside a server component.
make ui feel more responside without waiting for other components.



static Routes vs Dynamic Routes:
Dynamic routes: A route becomes dynamic when it depends on data that can change between requests: such as
searchParams, headers(), cookies(), useSearchParams, usePathname(), fetch(), or when we manually make the page dynamically forcefully (export const dynamic = "force-dynamic")
**in next js all routes are static by default**

after building the app, in console we will be able to see the static pages as "o" will be there before them and for dynamic pages "f" will be there.

note:- static pages after build , no reaction, just as it is even doing several changes, but dynamic pages will be opposite to it.




ISR(incremental static Regenration): 
-update the content of static site without rebuilding the static site.
-Reduce server load by serving prererendered, static pages for more requests.
-Ensure proper cache-control headers are automatically added to pages.
-Handle large amounts of content pages wothout long next build time.

example: we only have to put this line over the component: 
export const revalidate = 30:
means: after every 30 sec, it will revalidate the entire static page and update it.

ISR details example:
let say we built a page at 12:00 with 10 database entries.

timeline:
12:00 bulilt complete, page has 10 entries.
12:30 deleted 2 entries, remaining 8 entries
1:00 user visits page after 30+seconds of build

what user will see:
immediately: the catched version with the 10 entries(stale data)
background: Nextjs triggers regeneration with current DB state (8 entries)
Next visitor: gets the fresh version with 8 entries.

Key Points: 
-No automatic background updates: ISR only regenerate when someone requests the page after revalidation.
-Static data is served first: user never waits for regeneration.
-Zero downtime: Page is always available , even during regeneration failures.







React Cache:
cache() is a function that introduced in react 18+ , allows to memoize a fuction based on its arguments, so it doesnot run again if called with same arguments.
it only works in server components or in server environment like Nextjs app router.






Redirect: it allows user to redirct to other url. only in server component.
** we cannot write redirect inside the try block, if we do this it will throw an error. 
**to write this, we have to pass an trow message inside the catch block.**
  **if(error.message === "NEXT_REDIRECT") throw error;**


Doing same this as redirecting in client components: useRouter Hook.
use Router hook allows programatically change routes inside client components.
-> if we are using Page Router use next/router
-> otherwise use next/navigation if using App Router

-> first initialize use router hook
const router = useRouter();
-> inside handle submit write
router.push("/");
all set.


Go back to previous url form useRouter()-> inside the go back button, onclick handle: router.back(). history stack se previous url par chla jayega. (only for client component).


revalidate path-> when we fill a form and after getting the data from databse, we want to direct get the data updated on a particular page, we use revalidatePath("/pageName"), then data will be updated, otherwise we need to refresh the page again.


Framer Motion: we can only use it in client component.




Shadcn UI: 
it is not a traditional installation library or framework like material UI or Bootstrap, instead it is a unique approach to UI development, that provides a collection of beautifully designed, accessible react components, and a code distribution platform, that lets you copy the source code for individual components directly into your own project, rather than importing from an npm package.




Dialogue and Model in Next/React: with shadcn UI
Dialogue-> A centered modal wihdow that overlays the entire screen and demands user attention.

common usage: 
-Confirmation propmts (are you sure?)
-Forms (login, logout, register, feedback)
-important alert that need action before continuing
-detailed content previews (images, videos)
-Onboarding steps









