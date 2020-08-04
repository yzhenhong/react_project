import Status from '../../views/example/status'
import Form from '../../views/example/form'
import List from '../../views/example/list'
import Uploading from '../../views/example/uploading'
import Map from '../../views/example/map'
import Charts from '../../views/example/charts'
import Iframe from '../../views/example/iframe'



const  exampleRouterMap = [
  { name:'status', path:'/example/status', component: Status },
  { name:'form', path:'/example/form', component: Form },
  { name:'list', path:'/example/list', component: List },
  { name:'uploading', path:'/example/uploading', component: Uploading },
  { name:'map', path:'/example/map', component: Map },
  { name:'charts', path:'/example/charts', component: Charts },
  { name:'iframe', path:'/example/iframe', component: Iframe },
]

export default  exampleRouterMap