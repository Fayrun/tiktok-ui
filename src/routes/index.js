import Home from '~/pages/Home';
import { HeaderOnly } from '~/components/Layout';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
//public Routes:Dùng để điều hướng cho các routes công khai
const publicRoutes = [
    {path: '/',component:Home},
    {path: '/following',component:Following},
    {path: '/profile',component:Profile},
    {path: '/upload',component:Upload,layout : HeaderOnly},
    {path: '/search',component:Search,layout : null},
]
//Private Routes: Dùng để cấu hình cho các Routes riêng tư,cần đăng nhập
const privateRoutes = [

]

export {publicRoutes,privateRoutes}