const languageSamples = {
    js: {
        title: 'JavaScript',
        code: `
        function fizzBuzz(n) {
          for (let i = 1; i <= n; i++) {
            let str = "";
        
            if (i % 3 === 0) str += "fizz"
            if (i % 5 === 0) str += "buzz"
            if (str === "") str = i;
          
            console.log(str); // logs to console
          }
        }
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
    html: {
        title: 'HTML',
        code: `
      <!DOCTYPE html>
      <html>
      <head>
      <style>
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      th, td {
        padding: 5px;
        text-align: left;
      }
      table.names {
        width: 100%;    
        background-color: #f1f1c1;
      }
      </style>
      </head>
      <body>

      <table style="width:100%">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th> 
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>80</td>
        </tr>
      </table>

      <br>

      <table class="names">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th> 
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>80</td>
        </tr>
      </table>

      </body>
      </html>
            `,
    },
    xml: {
        title: 'XML',
        code: `
      <Snippet>
      <Header>
      <Title>SXML parameters block</Title>
      <Author>Smartsite Software</Author>
      <Description>An SXML parameters block</Description>
      </Header>
      <Code Kind="sxml" Language="">
      <![CDATA[<se:parameters>
      <se:parameter name=""></se:parameter>
      </se:parameters>]]>
      </Code>
      <ImageIndex>43</ImageIndex>
     </Snippet>
      `,
    },
}

export default languageSamples
