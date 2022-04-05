# Step 1 - The component architecture

topics: **components**, **closures**

Time to dive into the code...

At the moment, your project structure look like the following:

![mvc-architecture]

This was a very common file structure some years ago. Things are simple:

- All controllers (`*.js`) are in `scripts/` folder
- All views (`*.html`) are in `views/` folder
- All styles (`*.css`) are in `styles/` folder

It makes it easy to locate files per type. However, it's hard to **locate file by feature**.

> ![danger] Say you need to rewrite the `Welcome` view, you'll have to remember to change files in 3 folders.

For such applications, the recommended architecture today is **component oriented**, because it promotes **separation of concern** rather than **separation of technologies**.

![component-architecture]

> ![question] Component-oriented programming for the web is considered **more maintainable**. Why?

**Your job**

- create a new folder `src/app/components/welcome`
- move and rename files related to _welcome feature_ to this folder.

```
src/app/scripts/welcome.js => src/app/components/welcome/welcome.component.js
src/app/views/welcome.html => src/app/components/welcome/welcome.component.html
```

- move all CSS rules related to `.welcome-cmp` from `src/app/styles/style.css` to a new file called `src/app/components/welcome/welcome.component.css`.
- open `src/app/components/welcome.component.html`, and update links to point toward the new CSS & JS files:

  ```html
  <!-- src/app/components/welcome/welcome.component.html -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>MÈME ory</title>
      <!--                         vvvv HERE vvvvvvvvvvvvv -->
      <link rel="stylesheet" href="./welcome.component.css">
      <!--                         vvvv HERE vvvvvvvvvvvv -->
      <link rel="stylesheet" href="../../styles/style.css">
      <!--                         vvvv HERE vvvvvvvvvvvvvvvv -->
      <link rel="stylesheet" href="../../styles/bootstrap.css">
  </head>

  <body class="...">
  <nav class="...">
      <a class="..." href="/src">
          <!--                  vvv HERE vvvvvvvvvvvvvvvvvvvvvvvvvvvvv -->
          <img class="..." src="../../../assets/logo_take_my_money.png" alt="logo">
          <span class="...">MÈME ory</span>
      </a>
      <span class="..."></span>
  </nav>
      <!-- ... -->

  <!-- link to welcome controller -->
  <!--         vvv HERE vvvvvvvvvvvvv -->
  <script src="./welcome.component.js"></script>
  <script>
      // execute the controller
      var wc = new WelcomeComponent().init();
  </script>
  </html>
  ```

  Links to replace are labelled with the `<!-- TODO step 1 -->` comments. Once your done, you can remove these comments.

- open `src/index.html`, and update links to point toward the new `welome.component.html` file:

  ```html
  <!-- src/index.html -->
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>MÈME ory</title>
    </head>

    <body class="d-flex flex-column">
      <script>
        //                 vvvvv HERE vvvvvvvvvvv
        window.location = "app/views/welcome.html";
      </script>
    </body>
  </html>
  ```

- navigate to [http://localhost:8080/src](http://localhost:8080/src): The welcome page should look and behave as usual.

- Repeat this operation for other files in `views/` and `scripts/`. You can search for `TODO Step 1` comments to point out the links to replace.
- Images in `src/assets/cards/***.png` are only useful for `CardComponent`. Move them to a new folder `src/app/components/game/card/assets`
- Image `src/assets/happy_homer.jpg` is only useful for `ScoreComponent`. Move it to a new folder `src/app/components/game/score/assets`

At the end, the file structure should describe 4 components:

- `components/welcome.component`
- `components/game.component`
- `components/game/card.component`
- `components/score.component`

> ![tip] **Remember**: Component oriented architecture is not only about file structure.
> A component is
>
> - a simple, **elementary** piece of code
> - **reusable**: easy to invoke several times, all over an application
> - standalone and with **low coupling**: it does not depends much on other components
> - with **high coherence**: it do only one thing, but it do it well

#### Files produced:

```
src/app/components/game/card/assets/*.png
src/app/components/game/card/card.component.js
src/app/components/game/card/card.component.css
src/app/components/game/game.component.html
src/app/components/game/game.component.js
src/app/components/score/assets/happy_homer.jpg
src/app/components/score/score.component.css
src/app/components/score/score.component.html
src/app/components/score/score.component.js
src/app/components/welcome/welcome.component.css
src/app/components/welcome/welcome.component.html
src/app/components/welcome/welcome.component.js
```

> ![question] If you look at the source code, every JS file wraps its code into a **closure**:
>
> ```javascript
> // card.component.js
> (function () {
>   // TODO remove closure
>   // source code here
>   // ...
> })();
> ```
>
> Try to remove the 2 closures from both `card.component.js` & `game.component.js`. What happens? Why?  
> Once figured out, remove the extra variable that makes the code to crash.

> ![tip] Using your web browser's development tools, you will find out bugs much more quickly.

#### Checklist

- [ ] The 3 views of my application behave as usual
- [ ] `scripts/` folder is empty and can be deleted
- [ ] `views/` folder is empty and can be deleted
- [ ] `styles/styles.css` defines only global styles (eg: style applied to `<body>`)
- [ ] I understand the benefits of **component-oriented architecture**
- [ ] I understand why closure are needed
- [ ] There is no `TODO Step 1` comments in my code anymore
- [ ] My development console prints no errors

**![commit] commit step**

Now you moved everything in a better place, you should be more familiar with the codebase. But there is still a lot of work to turn this code into a modern web application.

[commit]: ../assets/commit.png
[mvc-architecture]: ../assets/mvc-architecture.png
[component-architecture]: ../assets/component-architecture.png
[success]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAA3lBMVEUAAABHi0FTkUxWkU5qwGpFiUBHi0JMjkdDiT5KjUVOjEhSkE1blVZallRUj1Bak1Nhml04fzRhmVxio1RssGwAAABFiUBIikJNjUhMjUZMjUZHikJEiD9LjEVJi0RMjUZOj0hNjkdQjklemVpalVNpoWRemFlIiEJhmVpalFVuoGNonGJ/v19Eiz9FikC60rdNj0hIjEP2+/Tr8urh7OChw52Vu5J9rXlzp29YlVPx9+/m7+TX5dXO4MzE2MKzzrCnxqSbv5iZv5WRuY6JtIVwpGxtomlnn2JdmFhRkEzf6VbsAAAALXRSTlMA/pg4BPj27OHPuJFsWldKOiQbEw0B++nh3dbTubewq6mhn4J0cmFURDAuJwiBXDLxAAAAoElEQVQI1y3ORRICQRBE0WIY3Bnc3bPHDXe5/4UoOni7v8iIJKKqllPSaSVfISnaj4HFh0tZHUivT29NtBlBeh9cM6NStA7TBIRr3dBYUbYmrh4Q7HQDsRyNhXFyHobuBEBkShOB5173rAs4Z1SIA/etfQw5E0XSuoA42z7YgJ/kE0DoC6524fcx2+QVV2pO0kJpJZOpTJH+1HKpVFaJfQFcARfOwCfO+QAAAABJRU5ErkJggg== "success"
[info]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAq1BMVEUAAAAyhXxLkYxVmpRHjoYxhXs1hn05iYA4iYAwhHs5iYE7ioA4iIA+i4NFjodMlIxIkYtNmotLoJc1hX04h341h347iYI5ioA4iH8yhHs1hn42hn08iYBJkYpHj4hZnpRBioM8iIJHk4hJkoo5hn1oraIqqqpmzJkwhn04iYEzhn4whXyqzMjF3dpCj4emysaSvro1h37V5uTF3NqcxMBppZ9hn5lPl48+jIQsyQtlAAAAKHRSTlMA/S8hTfjy3sy/u66kgG9YQRAN5ePXz8K+tauak4NybGVYRzs1FgYFAZuimgAAAI9JREFUCNdFjlcOgzAQRNc2oUOA9N6TNSYmpN//ZFlbivx+Zp5WWg0QIk+iKN2ewOLFTMlOsfnRWDFWqNunRJxxgCpViJ/7QyOq5QUKH6m83kgMOeSMUra3mqLXhxUavTZGuw2sa6d03ftOBxzKxOniTCtGpA29UuEBiF3IUH+RTT2w8GwSBHEm4E8pRGXLD8JdE+EFFZc/AAAAAElFTkSuQmCC "info"
[question]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAtFBMVEUAAABKkK9Sla9PlLBRla9Lka9QlbJMkq9Ok7BLka5RlbBWlq9Rk65Xlq9enLRgnrVWmq5co7N7ytNkschGutFQlLBRlbBQk7BLka9YmLJPlK9XmLJOjalJi6dMjqpTk61knrNzsMVwp8BiobtfpLlzrL1mo7dIkbFIkbCAssa+1+CvztpcnLfJ3eVno7tfnrlUmLRPlbNNk7H4/f3y9vjr8/Xc6u/O4ee409ydw9KNust1rMIJCmKFAAAAJ3RSTlMA/H+9ifTz6uLhqmFcUDonJhcOCwXXz8y2tbGakpKId0c+PTEwHxlXEKWrAAAAkUlEQVQI1y3HRRbCUBQE0Y7gEsVd+8cFh/3vixfCndQpCKe/Xi03Q9QGU02Rqq27vxtRlXFOaqYPnAwyju5JQDZ6QE8js+h5DQty7mFBUQS3qCQ7NmYU2SNJJc0duhRpGChJ6whdqj71js8YtmXflxclJgBdI/MgljUsWddssKKMLSp+v9tptia6jT/P2h8cVL6KiBPhTl8gHwAAAABJRU5ErkJggg== "question"
[error]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAA51BMVEUAAADDKS+8NjvEQELIT1bEIynFJizEJSvEICbEKS/EMTbCLzTAMje9PEC+QkW0GSD/LS3EJCvHJyzDJivEKC7CJCvFLjPDLTLDLTO8KS6+LTHHPUHGOD3AKS7HNz3DNDnDNTm/Ki7AMze+LTLDOD6/P0LFSU3IREjASkq5UUXUY2PabW3UKirIISfGISj9+PjDJyzy3d3t0NHdkZTRY2fKP0Xlrq7Wd3rWb3LWa2/MPULLNzzIKzH9+vr27Oz05uXz4eLsycrrwsPpubrmtrflq6zcjI/diYvXcnXSWl/NRkvIJi3FJizXBKlLAAAALXRSTlMAvk0eGP307eLXpJBoQS0jA/n36NrPy8W5ubOrmpiOjYV4c29aVEw4KRYSBwbgokV3AAAApUlEQVQI1y3LVbLCABQD0JQW1/dwdye3QnF33f96KB3OVzKTwKFGQvlC1TOEy6N4SYo/rLktzfW3vqQ8ALQcH9cJZXFbGw2g9SczfTqZm9aTWQ0VoTHWD3vLJv1dFEka5812RvK/gxIpc3Pn7ElfFBEvF6Zlj/XLikEVsaDcj7bzPy0lnACaPlkK+V5RiQFI1JP8EiUKVzuUCgQytR5+Rmo83nfTB3IdGHIHjpH1AAAAAElFTkSuQmCC "error"
[warning]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAApVBMVEUAAADmn1bxmVLorkXwmVLopWXxmVPxm1Xwm1TxnVjunFjvn1vroV/orl3ymVPxnFXxmlTxnVjvm1XvnVfvnVjvm1XunVjunVnsoGPqoGLsoF7sm1jrn1noo2LpomPqnlvooV3mo2HrrGzqrWbwuGP0mE/zmFDznFf44cvymVL66NX42Lz0qW3zoFzzmVL43ML00rH1yqX1xp70w5nyvpHxuYnypWVtVRncAAAAJXRSTlMASvcF9jPv69Wvn45UC/vj3c25pJWViHt5b29fW05IPTkqKBkSlWgjPwAAAIBJREFUCNdNidUSwjAUBS9tUy/ubidSw/n/TyMhDO2+7OwsWeYLasHCwbEpN+Fq1uSuB4TsPye8LHni/nITVLIQ/b2tbASRX2o+tjv1IWRRI9iaOkeAut44EJu9cgD+fOn0U6LTEMA7l5VWlNGyqy3uD6XlrSl2DJ731ZRYp8XhA2gdDKZuGQaLAAAAAElFTkSuQmCC "warning"
[danger]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAz1BMVEUAAADMUE3IVE/FV1PGWE3VcWTNS0jMTkrNUE3MUE3MVlPMUk3JTkvJUUzJVVLFV1LJWVfGV1fLTEjNTUrNS0fOTkvNUk3MTkvLT0rLT0zLVVDJW1fLWlbEVVLJW1XKWFXGQz/KU0/EXVnQb2rPZGTEX1rMX1/SbmPGY1XMd2bPTEjRTEjOTkvOS0jlr6zbhYLYdXLTZWLSXVr9+vn68vH47u346Of02tjpvLrntrTjo6Hho6HhoqHglpTciofafXrVbGnUZmPRWVXRVFDPTUqDN4l/AAAAKnRSTlMAy4dBGAb38urHtq2YkXdQRyH9+/Lx7+3e2qSUfGlfXEQ6OTcwMCgXEg+/q7kXAAAAmUlEQVQI1yXNVRaDUAwE0EBLgSKFursOTt11/2tqHsxP5p75CIm4I7nXdzaUZyDVgEA1CplsFfikPqALVzTAvx1jAMaKlC7g/cJdDA+lIbkdvrjsXx4fi2ZNcLkf3mCWaa4JPs8pIFiUBKMwYQUykQx439P2wWw5RAudS3RNeLQU8Vhi+0DVLJLI1GzXSw3JXlMeZVkYT7LpDxT4Fa6W3CZjAAAAAElFTkSuQmCC "danger"
[tip]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAPFBMVEUAAAAtimUtimUtimUtimUtimUtimUtimX////09vV1pI2yyLzy9fPX4dvN2tPG1c2jvrCfu61soIeyyL06N0uqAAAAB3RSTlMA1cyjUiryN0xxMwAAAGdJREFUCNddj0sSgDAIQ2tBH7b+vf9dLejCaTaZN4EhJJdKzqLp1TgQGsagCUq9C0zOLTus6Wh52wNmxxnQJH+UlIHqWIEcyGK2EChuu9lODKtb2bbirnGIa10vL/LV4DzxGn3J7oUH2BMEiUYwoD8AAAAASUVORK5CYII= "tip"
[boom]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAABCFBMVEUAAADMLBvDVzDzglLcJB3NLh7QYjbP1pnJRyv3hlf3gVbgGRXwcEneHxb2hVbkKR/jazrSJBniIRnZKR6/DhDyTzD8unL1mybrRCL5iUj4jF3qTSDsOB3waSL4a0jtQiT3fVT2gFXhJRftUiT4lmbeHhboIRzye0/uVh/qMiTgGxftdUjyXUHiIxvwb0PaIhnzXD7yhFHmIxrsRSv2j1bgEBXTIxvqOCXZJR/ue0/xiVLyg03lHxjeQx3qfEzjd0PRIB3ndVPMz9b667z6///89Mf866f95pz9yYX4w4H503T8rnP702b7nWb7tGP4hVX5f1X4qUb3qC/2eyz0nSbqVR3oQBnmLRcHGUOvAAAAQ3RSTlMABgJCIRIKBATbtq+Phn5vOyspGAz89/Hx6+no6ODc29nY1c7KycfFu5mYgHx7d2xrZF5VVE9JPzw6NTMxLisjHBcKrIO04wAAAKBJREFUCNctilUSwzAUA1/cMCdlZmZmTJm5979J7bT7Ic2OBAR2CkBxAAgBTuDrLegPYOIAWJDZIQxVdS5i5RBCejEVEGJxkceLLsuV7HV7OHlqQKBKkct5s1r7m4yto7z7Zi2tR1RzYWV6WvB+3O3DXZMls5F4f55Jn7cNhGpa6UivMR3K2V/ykAoU0JkG/FEMHGbZ+TN+RpGiidrYCugLQMIQNzrtr5IAAAAASUVORK5CYII= "boom"
