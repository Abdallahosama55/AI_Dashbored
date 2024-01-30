import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'لوحة التحكم',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'ابدا محادثة جديدة',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'صمم صورة جديدة',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'كتابة مقال كامل',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'مدقق اللغوي',
    path: '/login',
    icon: icon('ic_lock'),
  },

];

export default navConfig;
