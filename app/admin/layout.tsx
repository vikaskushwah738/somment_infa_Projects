
import SideBar from './components/SideBar';

export default function Layout({ children }: any) {
    return (
        <main className='lg:pt-28 md:pt-24 pt-20 flex'>
            <SideBar />
            {children}
       
        </main>
    )
}