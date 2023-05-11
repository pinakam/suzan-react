 export const menuData ={
    menu: 
       [
          {name: 'Home', link: '0', sub: null},
          {name: 'Service', link: '1', 
              sub: 
             [
                {name: 'Service 1',link: '1-0', sub: null},
                {name: 'Service 2',link: '1-1', sub: null},
                {name: 'Service 3',link: '1-2', sub: null},
                {name: 'Service 4',link: '1-3', sub: null}
             ]
          },
          {name: 'About', link: '2', 
               sub: 
             [
                {name: 'Company',link: '2-0', sub: null},
                {name: 'Business',link: '2-1', sub: null}
             ]
           },   
                
           {name: 'Contact', link: '3',sub:null
           }
       ]
 };