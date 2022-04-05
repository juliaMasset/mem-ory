---
home: true
# heroImage: assets/project-image.png # Optional. Customize project image to point to another file. Defaults: master3.json -> [[0].image].
# heroText: title # Optional.  Defaults: master3.json -> [[0].name].
actions:
  - text: Get Started →
    link: /0.guide/000-setup.md
    type: primary
sidebar: false
courses: # Links to courses the slide-decks
  - title: Web 00 - The origins
    link: https://docs.google.com/presentation/d/1P3ZGCCFOjCrn3035aQfsTejd65QA2m8VBGtKWnl5oGg/edit?usp=sharing
  - title: Web 01 - NodeJS
    link: https://docs.google.com/presentation/d/19xq68gSw8oVmMhH03kzQo9-gQSSVbsxjgXKwwBseSf8/edit?usp=sharing
  - title: Web 02 - bundlers & modules
    link: https://docs.google.com/presentation/d/181G6pCNfqqTO-hPOBO3vsVVWNKE2ge0owccNwu3GAuU/edit?usp=sharing
  - title: Web 03 - ESNext
    link: https://docs.google.com/presentation/d/1uNeFVkYbIlvv0FV6tVs5SIgBs9vl5bM67QuqjTsS8c8/edit?usp=sharing
  - title: Web 04 - Tools & Frameworks
    link: https://docs.google.com/presentation/d/1ADPASia_Cj3B5UoUnvGEHuMV5e8l9Mr1lxpM0gHK2NE/edit?usp=sharing
  - title: Fill in the talk survey (thank you <i class="fa fa-heart"></i>)
    link: https://docs.google.com/forms/d/e/1FAIpQLSfmh59bCliT0yohIEoXWb3yFVnM76megp8_5ZljnU6FHk72Dw/viewform?usp=sf_link
seeAlso: # links to the connected tutorials
  - title: React module 01
    link: https://guide.master3.takima.io/react-01
  - title: Angular module 01
    link: https://guide.master3.takima.io/angular-01
# prerequisites: # If your tutorial have prerequisites (eg, other tuto needs to be finished, some subject has to be mastered), you can list them beforehand
#   - roughly know how to write a javascript function
objectives: # Here you list objectives for this course
  - Master new ES6+ features
tech: # A list of icon for tools & tech
  - title: es6
    icon: ./assets/icons/es6.png
  - title: babel
    icon: ./assets/icons/babel.png
  - title: webpack
    icon: ./assets/icons/webpack.png
  - title: sass
    icon: ./assets/icons/sass.png
  - title: bootstrap
    icon: ./assets/icons/bootstrap-64x64.png
  - title: npm
    icon: ./assets/icons/npm-64x64.png
  - title: yarn
    icon: ./assets/icons/yarn-64x64.png

footer: Copyright © 2022 Takima
---

## <i class="fa fa-book-open"></i> Abstract

Writing javascript application these days has not much in common with web development 10 years ago,
and it involves different skillsets and mindsets.
We now are used to do _Component Oriented Programming_, _Single Page Applications_ (SPA), all with modern EcmaScript features and other tools such as **package managers**, **transpilers**, **bundlers**, ...

In this module, we catch up with the most important changes from ES5 to ES6+
and learn to develop a simple _SPA_ with vanilla javascript. (no frameworks).

### <i class="fa fa-pencil-alt"></i> Contributors

- Alexandra PURET <[apuret@takima.fr](mailto://apuret@takima.fr)>
- Nicolas THIERION <[nthierion@takima.fr](mailto://nthierion@takima.fr)>
- Logan LEPAGE <[llepage@takima.fr](mailto://llepage@takima.fr)>
- Alexandre NUNESSE <[anunesse@takima.fr](mailto://anunesse@takima.fr)>
- Pierre-Quentin WARLOT <[pqwarlot@takima.fr](mailto://pqwarlot@takima.fr)>

[success]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAA3lBMVEUAAABHi0FTkUxWkU5qwGpFiUBHi0JMjkdDiT5KjUVOjEhSkE1blVZallRUj1Bak1Nhml04fzRhmVxio1RssGwAAABFiUBIikJNjUhMjUZMjUZHikJEiD9LjEVJi0RMjUZOj0hNjkdQjklemVpalVNpoWRemFlIiEJhmVpalFVuoGNonGJ/v19Eiz9FikC60rdNj0hIjEP2+/Tr8urh7OChw52Vu5J9rXlzp29YlVPx9+/m7+TX5dXO4MzE2MKzzrCnxqSbv5iZv5WRuY6JtIVwpGxtomlnn2JdmFhRkEzf6VbsAAAALXRSTlMA/pg4BPj27OHPuJFsWldKOiQbEw0B++nh3dbTubewq6mhn4J0cmFURDAuJwiBXDLxAAAAoElEQVQI1y3ORRICQRBE0WIY3Bnc3bPHDXe5/4UoOni7v8iIJKKqllPSaSVfISnaj4HFh0tZHUivT29NtBlBeh9cM6NStA7TBIRr3dBYUbYmrh4Q7HQDsRyNhXFyHobuBEBkShOB5173rAs4Z1SIA/etfQw5E0XSuoA42z7YgJ/kE0DoC6524fcx2+QVV2pO0kJpJZOpTJH+1HKpVFaJfQFcARfOwCfO+QAAAABJRU5ErkJggg== "success"
[info]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAq1BMVEUAAAAyhXxLkYxVmpRHjoYxhXs1hn05iYA4iYAwhHs5iYE7ioA4iIA+i4NFjodMlIxIkYtNmotLoJc1hX04h341h347iYI5ioA4iH8yhHs1hn42hn08iYBJkYpHj4hZnpRBioM8iIJHk4hJkoo5hn1oraIqqqpmzJkwhn04iYEzhn4whXyqzMjF3dpCj4emysaSvro1h37V5uTF3NqcxMBppZ9hn5lPl48+jIQsyQtlAAAAKHRSTlMA/S8hTfjy3sy/u66kgG9YQRAN5ePXz8K+tauak4NybGVYRzs1FgYFAZuimgAAAI9JREFUCNdFjlcOgzAQRNc2oUOA9N6TNSYmpN//ZFlbivx+Zp5WWg0QIk+iKN2ewOLFTMlOsfnRWDFWqNunRJxxgCpViJ/7QyOq5QUKH6m83kgMOeSMUra3mqLXhxUavTZGuw2sa6d03ftOBxzKxOniTCtGpA29UuEBiF3IUH+RTT2w8GwSBHEm4E8pRGXLD8JdE+EFFZc/AAAAAElFTkSuQmCC "info"
[question]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAtFBMVEUAAABKkK9Sla9PlLBRla9Lka9QlbJMkq9Ok7BLka5RlbBWlq9Rk65Xlq9enLRgnrVWmq5co7N7ytNkschGutFQlLBRlbBQk7BLka9YmLJPlK9XmLJOjalJi6dMjqpTk61knrNzsMVwp8BiobtfpLlzrL1mo7dIkbFIkbCAssa+1+CvztpcnLfJ3eVno7tfnrlUmLRPlbNNk7H4/f3y9vjr8/Xc6u/O4ee409ydw9KNust1rMIJCmKFAAAAJ3RSTlMA/H+9ifTz6uLhqmFcUDonJhcOCwXXz8y2tbGakpKId0c+PTEwHxlXEKWrAAAAkUlEQVQI1y3HRRbCUBQE0Y7gEsVd+8cFh/3vixfCndQpCKe/Xi03Q9QGU02Rqq27vxtRlXFOaqYPnAwyju5JQDZ6QE8js+h5DQty7mFBUQS3qCQ7NmYU2SNJJc0duhRpGChJ6whdqj71js8YtmXflxclJgBdI/MgljUsWddssKKMLSp+v9tptia6jT/P2h8cVL6KiBPhTl8gHwAAAABJRU5ErkJggg== "question"
[error]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAA51BMVEUAAADDKS+8NjvEQELIT1bEIynFJizEJSvEICbEKS/EMTbCLzTAMje9PEC+QkW0GSD/LS3EJCvHJyzDJivEKC7CJCvFLjPDLTLDLTO8KS6+LTHHPUHGOD3AKS7HNz3DNDnDNTm/Ki7AMze+LTLDOD6/P0LFSU3IREjASkq5UUXUY2PabW3UKirIISfGISj9+PjDJyzy3d3t0NHdkZTRY2fKP0Xlrq7Wd3rWb3LWa2/MPULLNzzIKzH9+vr27Oz05uXz4eLsycrrwsPpubrmtrflq6zcjI/diYvXcnXSWl/NRkvIJi3FJizXBKlLAAAALXRSTlMAvk0eGP307eLXpJBoQS0jA/n36NrPy8W5ubOrmpiOjYV4c29aVEw4KRYSBwbgokV3AAAApUlEQVQI1y3LVbLCABQD0JQW1/dwdye3QnF33f96KB3OVzKTwKFGQvlC1TOEy6N4SYo/rLktzfW3vqQ8ALQcH9cJZXFbGw2g9SczfTqZm9aTWQ0VoTHWD3vLJv1dFEka5812RvK/gxIpc3Pn7ElfFBEvF6Zlj/XLikEVsaDcj7bzPy0lnACaPlkK+V5RiQFI1JP8EiUKVzuUCgQytR5+Rmo83nfTB3IdGHIHjpH1AAAAAElFTkSuQmCC "error"
[warning]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAApVBMVEUAAADmn1bxmVLorkXwmVLopWXxmVPxm1Xwm1TxnVjunFjvn1vroV/orl3ymVPxnFXxmlTxnVjvm1XvnVfvnVjvm1XunVjunVnsoGPqoGLsoF7sm1jrn1noo2LpomPqnlvooV3mo2HrrGzqrWbwuGP0mE/zmFDznFf44cvymVL66NX42Lz0qW3zoFzzmVL43ML00rH1yqX1xp70w5nyvpHxuYnypWVtVRncAAAAJXRSTlMASvcF9jPv69Wvn45UC/vj3c25pJWViHt5b29fW05IPTkqKBkSlWgjPwAAAIBJREFUCNdNidUSwjAUBS9tUy/ubidSw/n/TyMhDO2+7OwsWeYLasHCwbEpN+Fq1uSuB4TsPye8LHni/nITVLIQ/b2tbASRX2o+tjv1IWRRI9iaOkeAut44EJu9cgD+fOn0U6LTEMA7l5VWlNGyqy3uD6XlrSl2DJ731ZRYp8XhA2gdDKZuGQaLAAAAAElFTkSuQmCC "warning"
[danger]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAz1BMVEUAAADMUE3IVE/FV1PGWE3VcWTNS0jMTkrNUE3MUE3MVlPMUk3JTkvJUUzJVVLFV1LJWVfGV1fLTEjNTUrNS0fOTkvNUk3MTkvLT0rLT0zLVVDJW1fLWlbEVVLJW1XKWFXGQz/KU0/EXVnQb2rPZGTEX1rMX1/SbmPGY1XMd2bPTEjRTEjOTkvOS0jlr6zbhYLYdXLTZWLSXVr9+vn68vH47u346Of02tjpvLrntrTjo6Hho6HhoqHglpTciofafXrVbGnUZmPRWVXRVFDPTUqDN4l/AAAAKnRSTlMAy4dBGAb38urHtq2YkXdQRyH9+/Lx7+3e2qSUfGlfXEQ6OTcwMCgXEg+/q7kXAAAAmUlEQVQI1yXNVRaDUAwE0EBLgSKFursOTt11/2tqHsxP5p75CIm4I7nXdzaUZyDVgEA1CplsFfikPqALVzTAvx1jAMaKlC7g/cJdDA+lIbkdvrjsXx4fi2ZNcLkf3mCWaa4JPs8pIFiUBKMwYQUykQx439P2wWw5RAudS3RNeLQU8Vhi+0DVLJLI1GzXSw3JXlMeZVkYT7LpDxT4Fa6W3CZjAAAAAElFTkSuQmCC "danger"
[tip]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAPFBMVEUAAAAtimUtimUtimUtimUtimUtimUtimX////09vV1pI2yyLzy9fPX4dvN2tPG1c2jvrCfu61soIeyyL06N0uqAAAAB3RSTlMA1cyjUiryN0xxMwAAAGdJREFUCNddj0sSgDAIQ2tBH7b+vf9dLejCaTaZN4EhJJdKzqLp1TgQGsagCUq9C0zOLTus6Wh52wNmxxnQJH+UlIHqWIEcyGK2EChuu9lODKtb2bbirnGIa10vL/LV4DzxGn3J7oUH2BMEiUYwoD8AAAAASUVORK5CYII= "tip"
[boom]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAABCFBMVEUAAADMLBvDVzDzglLcJB3NLh7QYjbP1pnJRyv3hlf3gVbgGRXwcEneHxb2hVbkKR/jazrSJBniIRnZKR6/DhDyTzD8unL1mybrRCL5iUj4jF3qTSDsOB3waSL4a0jtQiT3fVT2gFXhJRftUiT4lmbeHhboIRzye0/uVh/qMiTgGxftdUjyXUHiIxvwb0PaIhnzXD7yhFHmIxrsRSv2j1bgEBXTIxvqOCXZJR/ue0/xiVLyg03lHxjeQx3qfEzjd0PRIB3ndVPMz9b667z6///89Mf866f95pz9yYX4w4H503T8rnP702b7nWb7tGP4hVX5f1X4qUb3qC/2eyz0nSbqVR3oQBnmLRcHGUOvAAAAQ3RSTlMABgJCIRIKBATbtq+Phn5vOyspGAz89/Hx6+no6ODc29nY1c7KycfFu5mYgHx7d2xrZF5VVE9JPzw6NTMxLisjHBcKrIO04wAAAKBJREFUCNctilUSwzAUA1/cMCdlZmZmTJm5979J7bT7Ic2OBAR2CkBxAAgBTuDrLegPYOIAWJDZIQxVdS5i5RBCejEVEGJxkceLLsuV7HV7OHlqQKBKkct5s1r7m4yto7z7Zi2tR1RzYWV6WvB+3O3DXZMls5F4f55Jn7cNhGpa6UivMR3K2V/ykAoU0JkG/FEMHGbZ+TN+RpGiidrYCugLQMIQNzrtr5IAAAAASUVORK5CYII= "boom"
