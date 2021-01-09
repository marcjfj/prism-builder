const languageSamples = {
    js: {
        title: 'JavaScript',
        code: `
            const foo = bar;
            foo = "good christianssdfd";
            function do() {
            for (i = 0; i < 100000; i++){
                let j += i;
                do();
                // this is a comment
                }
            }
            do();
                  `,
    },
    css: {
        title: 'CSS',
        code: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap');

          body {
              margin: 0;
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                  'Helvetica Neue', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
          }
          `,
    },
}

export default languageSamples
