# Developer Notes

* React Router: https://reactrouter.com/en/main/start/overview
* JSON resume: https://github.com/searles9/JSON_Resume/blob/main/resume.json


# TO-DO:
* make the card ui component (holds the full page contents)
```
<Card>
    <MainNav />
    <Outlet />
    <Footer />
</Card>
```
```
# the card
<div> # the outer card
    <div> # the inner container, margin to the edges

    <div>
<div>

```

* make the nav component
* add media queries
    * add a query for the nav
    * add a query so the card renders conditionally based on the screen size
* import the poppins font
* add global css values
* build about me page
    * make the header part (profile pic, title, summary)
    * make a facts section
    * make social links
* add an error element to the root route