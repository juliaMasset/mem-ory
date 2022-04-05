# Step 8 - Style the application

The hard steps are over. This step is much more fun as we play with styles and colors.

## Step 8.1 CSS to SCSS

Did you remember from previous step the following lines in `webpack.config.js`?

```javascript
module: {
  rules: [
      {
          test: /\.(scss|css)$/,
          use: [
              'style-loader',
              'css-loader',
              'sass-loader'
          ]
      },
      ...
  ]
  ...
}
```

With those lines, we are giving the ability to webpack to write `import some-style.css` right from our javascript files.
This way, our components have the power to pull their respective css, so it's not the HTML's job anymore.

> ![question] Can you guess how exactly `style-loader` works exactly?

In this step, we go a little bit further, and leverage the power of [Sass](https://sass-lang.com/) to enhance our stylesheets.

> ![tip] Another language we have to learn ![weary]? Do not worry. A valid `.CSS` file is also a valid `.scss` file.

First, the boring and fastidious step: convert all your `*.css` files to `*.scss` file.

- rename all `***.css` to `***.scss`
- replace all `import "***.css"` to `import "***.scss"`
- ...and that's all!

Of course, at the moment, we take no advantage of SASS. See you at next step.

#### Files produced:

```
front-end/src/app/styles/style.scss
front-end/src/app/components/score/score.component.scss
front-end/src/app/components/welcome/welcome.component.scss
front-end/src/app/components/game/card/card.component.scss
```

#### Checklist

- [ ] I have converted all my css files to sass files.
- [ ] I can import `.scss` files from JS files
- [ ] I understand the magic behind **webpack loaders**
- [ ] My application still has some style!

**![commit] commit step**

#### Checklist

**![commit] commit step**

> ![tip] **A not about web design**: As a rule of thumb, we try to keep a uniform style across all displayed elements: Have only few colors,
> and a restraint common set of styles (shadow, borders, animations, ...).
> If you use too many various styles, your application won't be coherent and will suffer of bad UX (User eXperience)

> ![tip] If you are interested in application **UI** (User Interfaces) and **UX** (User eXperience), you **must** have a look to Google's [Material Design](https://material.io/design/)

## Step 8.2 Sass variables

What is your current main color? You know, that blue-ish color on the top nav bar... its `#007bff`
![style-debugger]

Would you remember? I guess not...

One of the immediate benefit of sass is that we can set this once for all in a **sass variable**:

- create a file `styles/_colors.scss`

  > ![question] What does the `_` prefix means on a sass file?

- define all the color variables you will use across all your application.

  > ![tip] **My good advice**: Start by defining a `primary` color and a `secondary` color. Those colors are usually [**complementary**](https://www.w3schools.com/colors/colors_complementary.asp)

  `./src/app/style/_colors.scss`

  ```sass
  /* https://flatuicolors.com/palette/defo */
  $primary: #8e44ad;
  $primary-light: #9b59b6;
  $primary-txt: #ecf0f1;
  $primary-txt-shadow: #95a5a6;
  $primary-background: #34495e;
  ```

  > ![info] Feel free to customize the styles above

  > ![tip] **Pro tip** Never write a CSS class `.background-red` or a variable `$blue`.
  > Tomorrow, you may want to turn those color `green`, and you don't want to rename everything.

  > ![tip] If you lack of inspiration or good tastes, you can pick colors from a predefined palette: [https://flatuicolors.com/palette/defo](https://flatuicolors.com/palette/defo)

- go ahead in `score.component.scss`, import your palette:

  ```scss
  // score.component.scss
  @import "../styles/_colors.scss";

  // ...
  ```

  Now, you can use variables from `_colors.scss` within `core.component.scss`.

- and customize the view on your own. The final result may look like the following:

![score-component-styled]

- make sure all other `scss` files that uses colors import them from `_colors.scss` as well.

#### Files produced:

```
front-end/src/app/styles/style.scss
front-end/src/app/styles/_colors.scss
```

#### Checklist

- [ ] I can `@import` **sass** files from other **sass** files

**![commit] commit step**

## Step 8.3 Nested blocks

Let's use a bit more of sass features!

Go to `card.component.scss`, and see: we have many times `.card-cmp .card-wrapper`, this is kinda boring to write and read:

```sass
// card.component.scss
.card-cmp {
  position: relative;
  display: inline-block !important;
  width: 14%;
}

.card-cmp .card-wrapper {
  position: relative;
  transform-style: preserve-3d;
  transition: all .5s;
}
// ...
```

With Sass, you can now nest your blocks within other blocks. As an example, `card.component.scss` can be rewritten as follows:

```sass
// card.component.scss
.card-cmp {
  position: relative;
  display: inline-block !important;

  width: 14%;

  .card-wrapper {
    position: relative;
    transform-style: preserve-3d;
    transition: all .5s;
  }
}
// ...
```

On your own, refactor all your `.scss` files to use nested blocks.

> ![tip] A mistake happens quickly. I recommend to check the result each time a component is refactored.

> ![info] You can find much more sass features from the docs: [https://sass-lang.com/guide](https://sass-lang.com/guide)

#### Checklist

- [ ] I used the nesting sass feature on my components
- [ ] All my css files are deleted
- [ ] My application still looks great

## Step 8.4 Add bootstrap with Webpack

We told you earlier, our application uses [bootstrap 4](https://getbootstrap.com/).

At the moment, we use a transpiled `css` version of bootstrap, as you can see from your `index.html`:

```html
<!-- meme-ory/src/index.html -->
<link rel="stylesheet" href="../node_modules/bootstrap/dist/css" />
```

> ![info] By now, this should be the only place that imports bootstrap

You can remove that line right now, as in this step we will rather make use of the `scss` version of bootstrap.
Bootstrap sass defines a set of variable by default ([default colors](https://github.com/twbs/bootstrap/blob/v4.3.1/scss/_variables.scss#L69), [default dimensions](https://github.com/twbs/bootstrap/blob/v4.3.1/scss/_variables.scss#L278), ...)
By using SCSS, we can customize bootstrap right before transpiling it to css, so that we don't have to override bootstrap's generated styles.

> ![tip] The `!default` in [bootstrap sources](https://github.com/twbs/bootstrap/blob/v4.3.1/scss/_variables.scss#L69) means: 'Hey, sass: use that value for variable `$primary` unless someone already set it.'

- Remove the bootstrap import from `index.html`
- Navigate to [http://localhost:8080/#](http://localhost:8080) and see your application is missing some styles.
- Go to `meme-ory/front-end/src/styles/styles.scss`, and import bootstrap at the very first line of the file
  ```scss
  @import "~bootstrap/scss/bootstrap";
  ```
  Check that bootstrap styles are back!
- Now, before the `@import` line, define the `$primary` color to what you prefer.
  > ![tip] you can `@import` it from `_colors.scss`.

![tadaa] Tadaa, you can tell bootstrap what color scheme it should use!

#### Checklist

- [ ] I know what means `~` symbol.
- [ ] I have only one import of bootstrap and my style is not broken.

**![commit] commit step**

[style-debugger]: ../assets/style-debugger.png
[score-component-styled]: ../assets/score-component.png
[commit]: ../assets/commit.png
[success]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAA3lBMVEUAAABHi0FTkUxWkU5qwGpFiUBHi0JMjkdDiT5KjUVOjEhSkE1blVZallRUj1Bak1Nhml04fzRhmVxio1RssGwAAABFiUBIikJNjUhMjUZMjUZHikJEiD9LjEVJi0RMjUZOj0hNjkdQjklemVpalVNpoWRemFlIiEJhmVpalFVuoGNonGJ/v19Eiz9FikC60rdNj0hIjEP2+/Tr8urh7OChw52Vu5J9rXlzp29YlVPx9+/m7+TX5dXO4MzE2MKzzrCnxqSbv5iZv5WRuY6JtIVwpGxtomlnn2JdmFhRkEzf6VbsAAAALXRSTlMA/pg4BPj27OHPuJFsWldKOiQbEw0B++nh3dbTubewq6mhn4J0cmFURDAuJwiBXDLxAAAAoElEQVQI1y3ORRICQRBE0WIY3Bnc3bPHDXe5/4UoOni7v8iIJKKqllPSaSVfISnaj4HFh0tZHUivT29NtBlBeh9cM6NStA7TBIRr3dBYUbYmrh4Q7HQDsRyNhXFyHobuBEBkShOB5173rAs4Z1SIA/etfQw5E0XSuoA42z7YgJ/kE0DoC6524fcx2+QVV2pO0kJpJZOpTJH+1HKpVFaJfQFcARfOwCfO+QAAAABJRU5ErkJggg== "success"
[info]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAq1BMVEUAAAAyhXxLkYxVmpRHjoYxhXs1hn05iYA4iYAwhHs5iYE7ioA4iIA+i4NFjodMlIxIkYtNmotLoJc1hX04h341h347iYI5ioA4iH8yhHs1hn42hn08iYBJkYpHj4hZnpRBioM8iIJHk4hJkoo5hn1oraIqqqpmzJkwhn04iYEzhn4whXyqzMjF3dpCj4emysaSvro1h37V5uTF3NqcxMBppZ9hn5lPl48+jIQsyQtlAAAAKHRSTlMA/S8hTfjy3sy/u66kgG9YQRAN5ePXz8K+tauak4NybGVYRzs1FgYFAZuimgAAAI9JREFUCNdFjlcOgzAQRNc2oUOA9N6TNSYmpN//ZFlbivx+Zp5WWg0QIk+iKN2ewOLFTMlOsfnRWDFWqNunRJxxgCpViJ/7QyOq5QUKH6m83kgMOeSMUra3mqLXhxUavTZGuw2sa6d03ftOBxzKxOniTCtGpA29UuEBiF3IUH+RTT2w8GwSBHEm4E8pRGXLD8JdE+EFFZc/AAAAAElFTkSuQmCC "info"
[question]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAtFBMVEUAAABKkK9Sla9PlLBRla9Lka9QlbJMkq9Ok7BLka5RlbBWlq9Rk65Xlq9enLRgnrVWmq5co7N7ytNkschGutFQlLBRlbBQk7BLka9YmLJPlK9XmLJOjalJi6dMjqpTk61knrNzsMVwp8BiobtfpLlzrL1mo7dIkbFIkbCAssa+1+CvztpcnLfJ3eVno7tfnrlUmLRPlbNNk7H4/f3y9vjr8/Xc6u/O4ee409ydw9KNust1rMIJCmKFAAAAJ3RSTlMA/H+9ifTz6uLhqmFcUDonJhcOCwXXz8y2tbGakpKId0c+PTEwHxlXEKWrAAAAkUlEQVQI1y3HRRbCUBQE0Y7gEsVd+8cFh/3vixfCndQpCKe/Xi03Q9QGU02Rqq27vxtRlXFOaqYPnAwyju5JQDZ6QE8js+h5DQty7mFBUQS3qCQ7NmYU2SNJJc0duhRpGChJ6whdqj71js8YtmXflxclJgBdI/MgljUsWddssKKMLSp+v9tptia6jT/P2h8cVL6KiBPhTl8gHwAAAABJRU5ErkJggg== "question"
[error]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAA51BMVEUAAADDKS+8NjvEQELIT1bEIynFJizEJSvEICbEKS/EMTbCLzTAMje9PEC+QkW0GSD/LS3EJCvHJyzDJivEKC7CJCvFLjPDLTLDLTO8KS6+LTHHPUHGOD3AKS7HNz3DNDnDNTm/Ki7AMze+LTLDOD6/P0LFSU3IREjASkq5UUXUY2PabW3UKirIISfGISj9+PjDJyzy3d3t0NHdkZTRY2fKP0Xlrq7Wd3rWb3LWa2/MPULLNzzIKzH9+vr27Oz05uXz4eLsycrrwsPpubrmtrflq6zcjI/diYvXcnXSWl/NRkvIJi3FJizXBKlLAAAALXRSTlMAvk0eGP307eLXpJBoQS0jA/n36NrPy8W5ubOrmpiOjYV4c29aVEw4KRYSBwbgokV3AAAApUlEQVQI1y3LVbLCABQD0JQW1/dwdye3QnF33f96KB3OVzKTwKFGQvlC1TOEy6N4SYo/rLktzfW3vqQ8ALQcH9cJZXFbGw2g9SczfTqZm9aTWQ0VoTHWD3vLJv1dFEka5812RvK/gxIpc3Pn7ElfFBEvF6Zlj/XLikEVsaDcj7bzPy0lnACaPlkK+V5RiQFI1JP8EiUKVzuUCgQytR5+Rmo83nfTB3IdGHIHjpH1AAAAAElFTkSuQmCC "error"
[warning]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAApVBMVEUAAADmn1bxmVLorkXwmVLopWXxmVPxm1Xwm1TxnVjunFjvn1vroV/orl3ymVPxnFXxmlTxnVjvm1XvnVfvnVjvm1XunVjunVnsoGPqoGLsoF7sm1jrn1noo2LpomPqnlvooV3mo2HrrGzqrWbwuGP0mE/zmFDznFf44cvymVL66NX42Lz0qW3zoFzzmVL43ML00rH1yqX1xp70w5nyvpHxuYnypWVtVRncAAAAJXRSTlMASvcF9jPv69Wvn45UC/vj3c25pJWViHt5b29fW05IPTkqKBkSlWgjPwAAAIBJREFUCNdNidUSwjAUBS9tUy/ubidSw/n/TyMhDO2+7OwsWeYLasHCwbEpN+Fq1uSuB4TsPye8LHni/nITVLIQ/b2tbASRX2o+tjv1IWRRI9iaOkeAut44EJu9cgD+fOn0U6LTEMA7l5VWlNGyqy3uD6XlrSl2DJ731ZRYp8XhA2gdDKZuGQaLAAAAAElFTkSuQmCC "warning"
[danger]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAz1BMVEUAAADMUE3IVE/FV1PGWE3VcWTNS0jMTkrNUE3MUE3MVlPMUk3JTkvJUUzJVVLFV1LJWVfGV1fLTEjNTUrNS0fOTkvNUk3MTkvLT0rLT0zLVVDJW1fLWlbEVVLJW1XKWFXGQz/KU0/EXVnQb2rPZGTEX1rMX1/SbmPGY1XMd2bPTEjRTEjOTkvOS0jlr6zbhYLYdXLTZWLSXVr9+vn68vH47u346Of02tjpvLrntrTjo6Hho6HhoqHglpTciofafXrVbGnUZmPRWVXRVFDPTUqDN4l/AAAAKnRSTlMAy4dBGAb38urHtq2YkXdQRyH9+/Lx7+3e2qSUfGlfXEQ6OTcwMCgXEg+/q7kXAAAAmUlEQVQI1yXNVRaDUAwE0EBLgSKFursOTt11/2tqHsxP5p75CIm4I7nXdzaUZyDVgEA1CplsFfikPqALVzTAvx1jAMaKlC7g/cJdDA+lIbkdvrjsXx4fi2ZNcLkf3mCWaa4JPs8pIFiUBKMwYQUykQx439P2wWw5RAudS3RNeLQU8Vhi+0DVLJLI1GzXSw3JXlMeZVkYT7LpDxT4Fa6W3CZjAAAAAElFTkSuQmCC "danger"
[tip]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAPFBMVEUAAAAtimUtimUtimUtimUtimUtimUtimX////09vV1pI2yyLzy9fPX4dvN2tPG1c2jvrCfu61soIeyyL06N0uqAAAAB3RSTlMA1cyjUiryN0xxMwAAAGdJREFUCNddj0sSgDAIQ2tBH7b+vf9dLejCaTaZN4EhJJdKzqLp1TgQGsagCUq9C0zOLTus6Wh52wNmxxnQJH+UlIHqWIEcyGK2EChuu9lODKtb2bbirnGIa10vL/LV4DzxGn3J7oUH2BMEiUYwoD8AAAAASUVORK5CYII= "tip"
[boom]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAABCFBMVEUAAADMLBvDVzDzglLcJB3NLh7QYjbP1pnJRyv3hlf3gVbgGRXwcEneHxb2hVbkKR/jazrSJBniIRnZKR6/DhDyTzD8unL1mybrRCL5iUj4jF3qTSDsOB3waSL4a0jtQiT3fVT2gFXhJRftUiT4lmbeHhboIRzye0/uVh/qMiTgGxftdUjyXUHiIxvwb0PaIhnzXD7yhFHmIxrsRSv2j1bgEBXTIxvqOCXZJR/ue0/xiVLyg03lHxjeQx3qfEzjd0PRIB3ndVPMz9b667z6///89Mf866f95pz9yYX4w4H503T8rnP702b7nWb7tGP4hVX5f1X4qUb3qC/2eyz0nSbqVR3oQBnmLRcHGUOvAAAAQ3RSTlMABgJCIRIKBATbtq+Phn5vOyspGAz89/Hx6+no6ODc29nY1c7KycfFu5mYgHx7d2xrZF5VVE9JPzw6NTMxLisjHBcKrIO04wAAAKBJREFUCNctilUSwzAUA1/cMCdlZmZmTJm5979J7bT7Ic2OBAR2CkBxAAgBTuDrLegPYOIAWJDZIQxVdS5i5RBCejEVEGJxkceLLsuV7HV7OHlqQKBKkct5s1r7m4yto7z7Zi2tR1RzYWV6WvB+3O3DXZMls5F4f55Jn7cNhGpa6UivMR3K2V/ykAoU0JkG/FEMHGbZ+TN+RpGiidrYCugLQMIQNzrtr5IAAAAASUVORK5CYII= "boom"
