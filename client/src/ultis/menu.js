import icons from './icons'

const { MdLibraryMusic, TbChartArcs, MdFeed, RiPieChartFill } = icons

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá Nhân',
        icons: <MdLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <TbChartArcs size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <RiPieChartFill size={24} />
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdFeed size={24} />
    },
]