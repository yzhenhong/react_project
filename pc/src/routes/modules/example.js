import Form from '../../views/example/form'
import Iframe from '../../views/example/iframe'
import List from '../../views/example/list'
import Map from '../../views/example/map'
import State from '../../views/example/state'
import Uploading from '../../views/example/uploading'


const  exampleRouterMap = [
  { name:'form', path:'/example/form', component: Form },
  { name:'iframe', path:'/example/iframe', component: Iframe },
  { name:'list', path:'/example/list', component: List },
  { name:'map', path:'/example/map', component: Map },
  { name:'state', path:'/example/state', component: State },
  { name:'uploading', path:'/example/uploading', component: Uploading },
]

export default  exampleRouterMap