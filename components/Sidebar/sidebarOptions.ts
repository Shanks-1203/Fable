import { GoHome } from "react-icons/go";
import { PiCompassLight } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";
import { VscCommentDiscussion } from "react-icons/vsc";

const options = [
    {
        icon: GoHome,
        name: 'Home',
        path: '/'
    },
    {
        icon: PiCompassLight,
        name: 'Explore',
        path: '/explore'
    },
    {
        icon: VscCommentDiscussion,
        name: 'Discussions',
        path: '/discussions'
    },
    {
        icon: IoAdd,
        name: 'Post',
        path: '/post'
    }
]

export default options