export default {
  items:[
    {
      type: 'atom',
      label: 'Button1',
      id: '1'
    },
    {
      type: 'atom',
      label: 'Button2',
      id: '2'
    },
    {
      type: 'molecule',
      label: 'BBox',
      id: '3'
    }
  ],
  tree:[
    { id:'3', children:[] }
  ]
}


/*
  >>>>>>> Types definition:
  items: [] 
    item: {}
      - type: page | organism | molecule | atom
      - label
      - id

  tree: [] 
    pages: {} -> atomic
      
-------------------
  atomic: {}
    - id
    - children: [ atomic ]

*/

/*
>>>>>>> Example:

tree = {
  items:[
    {
      type: 'atom',
      label: 'Button',
      id: 'a054'
    },
    {
      type: 'atom',
      label: 'Input Email',
      id: 'a055'
    },
    {
      type: 'molecule',
      label: 'Form Special',
      id: 'm001'
    },
    {
      type: 'organisms',
      label: 'Content Shop',
      id: 'o001'
    },
    {
      type: 'page',
      label: 'Shop',
      id: 'p001'
    }
  ],
  tree:[
    {
      id: 'p001',
      children: [
        {
          id: 'o001',
          children: [
            {
              id: 'm001',
              children: [
                {
                  id: 'a054'
                },
                {
                  id: 'a055'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
*/