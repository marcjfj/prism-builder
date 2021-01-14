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
          /*
            Here's a comment
          */
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
    jsx: {
        title: 'JSX',
        code: `
        import React from 'react';

        class MyComponent extends React.Component {
          render(){
            return (
              <React.Fragment>
                <div>I am an element!</div>
                <button>I am another element</button>
              </React.Fragment>
            );
          }
        }

        export default MyComponent;
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
    php: {
        title: 'PHP',
        code: `
      function get_posts( $args = null ) {
        $defaults = array(
            'numberposts'      => 5,
            'category'         => 0,
            'orderby'          => 'date',
            'order'            => 'DESC',
            'include'          => array(),
            'exclude'          => array(),
            'meta_key'         => '',
            'meta_value'       => '',
            'post_type'        => 'post',
            'suppress_filters' => true,
        );
     
        $parsed_args = wp_parse_args( $args, $defaults );
        if ( empty( $parsed_args['post_status'] ) ) {
            $parsed_args['post_status'] = ( 'attachment' === $parsed_args['post_type'] ) ? 'inherit' : 'publish';
        }
        if ( ! empty( $parsed_args['numberposts'] ) && empty( $parsed_args['posts_per_page'] ) ) {
            $parsed_args['posts_per_page'] = $parsed_args['numberposts'];
        }
        if ( ! empty( $parsed_args['category'] ) ) {
            $parsed_args['cat'] = $parsed_args['category'];
        }
        if ( ! empty( $parsed_args['include'] ) ) {
            $incposts                      = wp_parse_id_list( $parsed_args['include'] );
            $parsed_args['posts_per_page'] = count( $incposts );  // Only the number of posts included.
            $parsed_args['post__in']       = $incposts;
        } elseif ( ! empty( $parsed_args['exclude'] ) ) {
            $parsed_args['post__not_in'] = wp_parse_id_list( $parsed_args['exclude'] );
        }
     
        $parsed_args['ignore_sticky_posts'] = true;
        $parsed_args['no_found_rows']       = true;
     
        $get_posts = new WP_Query;
        return $get_posts->query( $parsed_args );
     
    }
      `,
    },
}

export default languageSamples
