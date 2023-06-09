import {
    ChartPieIcon,
    DocumentDuplicateIcon,
    HomeIcon,
    UsersIcon,
    VariableIcon,
} from '@heroicons/react/24/outline';

enum Navigation {
    Home = 'ホーム',
    Class = 'クラス',
    Matching = 'マッチング',
    Reports = 'レポート',
    Account = 'アカウント',
}

const allNavigation = [
    { name: Navigation.Home, href: '/home', icon: HomeIcon, current: false },
    { name: Navigation.Class, href: '/class', icon: UsersIcon, current: false },
    { name: Navigation.Matching, href: '/matching', icon: VariableIcon, current: false },
    { name: Navigation.Reports, href: '/reports', icon: ChartPieIcon, current: false },
    { name: Navigation.Account, href: '/account', icon: DocumentDuplicateIcon, current: false },
]

export const navigation = (pathname: string) => {
    return allNavigation.map((item) => ({
        ...item,
        current: item.href === pathname,
    }));
}
