export default {
  items:[
    {
      type: 'atom',
      label: 'Button',
      id: '1'
    },
    {
      type: 'atom',
      label: 'Input Email',
      id: '2'
    },
    {
      type: 'atom',
      label: 'Input Name',
      id: '21'
    },
    {
      type: 'molecule',
      label: 'Form Newsletter',
      id: '3'
    },
    {
      type: 'molecule',
      label: 'Form User',
      id: '31'
    },
    {
      type: 'organism',
      label: 'Block News',
      id: '4'
    },
    {
      type: 'organism',
      label: 'Block Salutation',
      id: '41'
    },
    {
      type: 'page',
      label: 'Shop',
      id: '5'
    }
  ],
  tree:[
    { id:'1' },
    { id:'2' },
    { id:'3', children:['1','2'] },
    { id:'31', children:['1','21'] },
    { id:'4', children:['3'] },
    { id:'41', children:['31'] },
    { id:'5', children:['4','41'] },
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