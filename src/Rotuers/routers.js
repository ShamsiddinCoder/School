// import pages
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import TeachersInform from '../Pages/TeacherInforms/TeacherInform';
import Teachers from '../Pages/Teachers/Teachers';

export const routers = [
    {
        paths: '/',
        element: Login
    },

    {
        paths: '/home',
        element: Home
    },

    {
        paths: '/teachersinform',
        element: TeachersInform
    },

    {
        paths: '/teachers',
        element: Teachers
    }
]