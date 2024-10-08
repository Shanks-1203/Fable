import { CiHome, CiStar } from "react-icons/ci";
import { PiCompassLight } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";

const options = [
    {
        icon: CiHome,
        name: 'Home',
        path: '/'
    },
    {
        icon: IoAdd,
        name: 'Post',
        path: '/post'
    },
    {
        icon: PiCompassLight,
        name: 'Explore',
        path: '/explore'
    },
    {
        icon: CiStar,
        name: 'Following',
        path: '/following'
    }
]

export default options